<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { LinkBase, type LinkProps, linkTheme } from '.'
    import uiConfig from '#uiconfig'
    import { page } from '$app/state'
    import { browser } from '$app/environment'
    import { isEqual, diff } from 'ohash/utils'

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

    // let isExactHash = false;
    const isActive = $derived(href && page.url.pathname.startsWith(href))
    const isExternal = $derived(href && !href.startsWith('http'))
    const isExactActive = $derived(href && page.url.pathname === href)

    const url = $derived(new URL(href as string, browser ? window.location.href : 'http://localhost'))

    function useQuery(query: any) {
        return Object.fromEntries(
          [...query.entries()].map(([key, value]) => [key, value])
        )
    }

    function isPartiallyEqual(item1: any, item2: any) {
        const diffedKeys = diff(item1, item2).reduce((filtered, q) => {
            if (q.type === 'added') {
                filtered.add(q.key)
            }
            return filtered
        }, new Set<string>())

        const item1Filtered = Object.fromEntries(Object.entries(item1).filter(([key]) => !diffedKeys.has(key)))
        const item2Filtered = Object.fromEntries(Object.entries(item2).filter(([key]) => !diffedKeys.has(key)))

        return isEqual(item1Filtered, item2Filtered)
    }

    function isLinkActive() {
        if (active !== undefined) {
            return active
        }

        if (exactQuery === 'partial') {
            if (!isPartiallyEqual(useQuery(page.url.searchParams), useQuery(url.searchParams))) return false
        } else if (exactQuery === true) {
            if (!isEqual(useQuery(page.url.searchParams), useQuery(url.searchParams))) return false
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
