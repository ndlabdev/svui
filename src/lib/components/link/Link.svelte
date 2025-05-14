<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { LinkBase, type LinkProps, linkTheme } from '.'
    import uiConfig from '#uiconfig'
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
        rel = 'noopener noreferrer',
        target,
        raw,
        class: className,
        activeClass = '',
        inactiveClass = '',
        custom,
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

    const isActive = href && href === page.url.pathname
    const isExactActive = href && href === page.url.pathname && !page.url.search && !page.url.hash

    function isLinkActive() {
        if (active !== undefined) {
            return active
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
