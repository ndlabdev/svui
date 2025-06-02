<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { chipTheme, type ChipProps } from '.'
    import uiConfig from '#uiconfig'

    const {
        as = 'div',
        show = $bindable(true),
        color,
        size,
        text,
        position,
        inset = false,
        standalone = false,
        class: className,
        ui,
        children,
        slotContent,
        ...restProps
    }: ChipProps = $props()

    const uiChip = $derived(
        tv({
            extend: tv(chipTheme),
            ...(uiConfig?.ui?.chip || {})
        })({
            color,
            size,
            position,
            inset,
            standalone
        })
    )

    const uiRoot = $derived(uiChip.root({
        class: [className?.toString(), ui?.root]
    }))

    const uiBase = $derived(uiChip.base({
        class: ui?.base
    }))
</script>

<svelte:element this={as} class={uiRoot}>
    {@render children?.({ props: restProps })}

    {#if show}
        <span class={uiBase}>
            {#if slotContent}
                {@render slotContent()}
            {:else}
                {text}
            {/if}
        </span>
    {/if}
</svelte:element>