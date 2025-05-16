<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { LinkBase, type LinkProps, linkTheme } from '.'
    import uiConfig from '#uiconfig'
    import { page } from '$app/state'
    import { browser } from '$app/environment';

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

    function isLinkActive() {
        if (active !== undefined) {
            return active
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
