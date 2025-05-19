<script lang="ts">
    import { isEqual } from 'ohash/utils'
    import { tv } from 'tailwind-variants'
    import { type LinkProps, linkTheme } from '.'
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
        ...restProps
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
    const isActive = $derived(currentUrl.pathname === targetUrl.pathname)
    const isExactActive = $derived(isActive && currentUrl.search === targetUrl.search && isHashActive)
    const resolveLinkClass = $derived(
        raw
            ? [className?.toString(), isLinkActive() ? activeClass : inactiveClass]
            : uiLink.base({ class: className?.toString(), active: isLinkActive(), disabled: Boolean(disabled) })
    )

    function routerParams(query: URLSearchParams) {
        return Object.fromEntries(
            [...query.entries()].map(([key, value]) => [key, value])
        )
    }

    function isLinkActive() {
        if (active !== undefined) return active
        if (exactQuery === true && !isEqual(routerParams(currentUrl.searchParams), routerParams(targetUrl.searchParams))) return false
        if (exactQuery === 'partial') return Array.from(targetUrl.searchParams.entries()).every(([key, value]) => currentUrl.searchParams.get(key) === value)
        if (exactHash && !isHashActive) return false
        if (exact && isExactActive) return true

        return !!(!exact && isActive)
    }

    const attributes = $derived(
        href ? {
            href: disabled ? undefined : href,
            'aria-disabled': disabled ? true : undefined,
            role: disabled ? 'link' : undefined,
            tabindex: disabled ? -1 : undefined,
            rel,
            target,
            class: resolveLinkClass,
            ...restProps,
            ...(exact && isExactActive ? {
                'aria-current': ariaCurrentValue
            } : {})
        } : as === 'button' ? {
            type,
            disabled,
            ...restProps
        } : {}
    )
</script>

{#if href}
    <a {...attributes}>
        {@render children?.()}
    </a>
{:else if as === 'button'}
    <button {...attributes}>
        {@render children?.()}
    </button>
{:else}
    <svelte:element this={as} {...restProps}>
        {@render children?.()}
    </svelte:element>
{/if}