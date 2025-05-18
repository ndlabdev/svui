<script lang="ts">
    import { isEqual } from 'ohash/utils'
    import { tv } from 'tailwind-variants'
    import { LinkBase, type LinkProps, linkTheme } from '.'
    import uiConfig from '#uiconfig'
    import { browser } from '$app/environment'
    import { page } from '$app/state'

    const {
        children,
        as = 'button',
        type = 'button',
        ariaCurrentValue = 'page',
        exact,
        exactQuery,
        exactHash,
        disabled,
        active,
        href,
        rel,
        target,
        raw,
        class: className,
        activeClass = '',
        inactiveClass = '',
        custom
    }: LinkProps = $props()

    const uiLink = $derived(
        tv({
            extend: tv(linkTheme),
            variants: {
                active: {
                    true: activeClass,
                    false: inactiveClass
                }
            },
            ...(uiConfig?.ui?.link || {})
        })()
    )

    const currentUrl = $derived(new URL(page.url.href))
    const targetUrl = $derived(new URL(href as string, browser ? window.location.origin : 'http://localhost'))
    const isHashActive = $derived(currentUrl.hash === targetUrl.hash)
    const isActive = $derived(currentUrl.pathname.startsWith(targetUrl.pathname) && currentUrl.search === targetUrl.search && isHashActive)
    const isExactActive = $derived(currentUrl.pathname === targetUrl.pathname && currentUrl.search === targetUrl.search && isHashActive)
    const resolveLinkClass = $derived(
        raw
            ? [className?.toString(), isLinkActive() ? activeClass : inactiveClass]
            : uiLink.base({ class: className?.toString(), active: isLinkActive(), disabled })
    )

    function routerParams(query: URLSearchParams) {
        return Object.fromEntries(
            [...query.entries()].map(([key, value]) => [key, value])
        )
    }

    function isLinkActive() {
        if (active !== undefined) {
            return active
        }

        if (exactQuery === true && !isEqual(routerParams(currentUrl.searchParams), routerParams(targetUrl.searchParams))) {
            return false
        }

        if (exactQuery === 'partial') {
            return Array.from(targetUrl.searchParams.entries()).every(([key, value]) => currentUrl.searchParams.get(key) === value)
        }

        if (exactHash && currentUrl.hash !== targetUrl.hash) {
            return false
        }

        if (exact && isExactActive) {
            return true
        }

        return !!(!exact && isActive)
    }
</script>

{#if custom}
    <svelte:element this={as} {type} {disabled} {href} {rel} {target} {...(exact && isExactActive ? { 'aria-current': ariaCurrentValue } : {})}>
        {@render children?.()}
    </svelte:element>
{:else}
    <LinkBase {as} {type} {disabled} {href} {rel} {target} {...(exact && isExactActive ? { 'aria-current': ariaCurrentValue } : {})} class={resolveLinkClass}>
        {@render children?.()}
    </LinkBase>
{/if}
