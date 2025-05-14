<script lang="ts">
    import { type LinkBaseProps } from '.'

    const {
        children,
        as = 'button',
        type = 'button',
        disabled,
        href,
        rel,
        target,
        ...restProps
    }: LinkBaseProps = $props()

    const attributes = $derived(
        href ? {
            href: disabled ? undefined : href,
            'aria-disabled': disabled ? true : undefined,
            role: disabled ? 'link' : undefined,
            tabindex: disabled ? -1 : undefined
        } : as === 'button' ? {
            type,
            disabled
        } : {}
    )
</script>

{#if href}
    <a {...attributes} {...restProps} {rel} {target}>
        {@render children?.()}
    </a>
{:else if as === 'button'}
    <button {...attributes} {...restProps}>
        {@render children?.()}
    </button>
{:else}
    <svelte:element this={as} {...restProps}>
        {@render children?.()}
    </svelte:element>
{/if}
