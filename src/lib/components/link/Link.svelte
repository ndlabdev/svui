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
    const url = $derived(new URL(href as string, browser ? window.location.href : 'http://localhost'))
    const isActive = $derived(currentUrl.pathname.startsWith(targetUrl.pathname) && currentUrl.search === targetUrl.search && currentUrl.hash === targetUrl.hash)
    const isExactActive = $derived(currentUrl.pathname === targetUrl.pathname && currentUrl.search === targetUrl.search && currentUrl.hash === targetUrl.hash)

    function routerParams(query: URLSearchParams) {
        return Object.fromEntries(
            [...query.entries()].map(([key, value]) => [key, value])
        )
    }

    function isLinkActive() {
        if (active !== undefined) {
            return active
        }

        if (exactQuery === true) {
            if (!isEqual(routerParams(page.url.searchParams), routerParams(url.searchParams))) return false
        }

        if (exactHash && url.hash !== page.url.hash) {
            return false
        }

        if (exact && isExactActive) {
            return true
        }

        return !!(!exact && isActive)
    }

    function resolveLinkClass() {
        const active = isLinkActive()

        if (raw) {
            return [className?.toString(), active ? activeClass : inactiveClass]
        }

        return uiLink.base({ class: className?.toString(), active, disabled })
    }
</script>

{#if custom}
    <svelte:element this={as} {type} {disabled} {href} {rel} {target} {...(exact && isExactActive ? { 'aria-current': ariaCurrentValue } : {})}>
        {@render children?.()}
    </svelte:element>
{:else}
    <LinkBase {as} {type} {disabled} {href} {rel} {target} {...(exact && isExactActive ? { 'aria-current': ariaCurrentValue } : {})} class={resolveLinkClass()}>
        {@render children?.()}
    </LinkBase>
{/if}
