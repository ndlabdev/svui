<script lang="ts">
    import { separatorTheme, type SeparatorProps } from '.'

    const {
        color,
        size,
        type,
        label,
        icon,
        orientation = 'horizontal',
        class: className,
        as = 'div',
        ui,
        ...restProps
    }: SeparatorProps = $props()

    const uiSeparator = $derived(separatorTheme({
        color,
        orientation,
        size,
        type
    }))

    const uiRoot = $derived(uiSeparator.root({
        class: [className?.toString(), ui?.root]
    }))

    const uiBorder = $derived(uiSeparator.border({
        class: ui?.border
    }))

    const uiContainer = $derived(uiSeparator.container({
        class: ui?.container
    }))

    const uiLabel = $derived(uiSeparator.label({
        class: ui?.label
    }))

    const uiIcon = $derived(uiSeparator.icon({
        class: ui?.icon
    }))
</script>

<svelte:element this={as} class={uiRoot} {...restProps}>
    <div class={uiBorder}></div>

    {#if label || icon}
        <div class={uiContainer}>
            {#if label}
                <span class={uiLabel}>{label}</span>
            {:else if icon}
                {@const Icon = icon}
                <Icon class={uiIcon} />
            {/if}
        </div>

        <div class={uiBorder}></div>
    {/if}
</svelte:element>