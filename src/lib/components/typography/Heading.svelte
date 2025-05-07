<script lang="ts">
    import { headingTheme, type HeadingProps } from '.'

    const {
        children,
        tag = 'h1',
        variant,
        label,
        ui,
        class: className,
        ...restProps
    }: HeadingProps = $props()

    const uiHeading = $derived(headingTheme({
        tag,
        variant
    }))

    const uiBase = $derived(uiHeading.base({
        class: [className?.toString(), ui?.base]
    }))

    const uiLabel = $derived(uiHeading.label({
        class: [ui?.label]
    }))
</script>

<svelte:element this={tag} class={uiBase} {...restProps}>
    {#if children}
        {@render children?.()}
    {:else}
        {#if label}
            <span class="{uiLabel}">{label}</span>
        {/if}
    {/if}
</svelte:element>