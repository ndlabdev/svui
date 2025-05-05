<script lang="ts">
    import { type ButtonProps, buttonTheme } from '.'

    const {
        children,
        label,
        size = 'md',
        color = 'primary',
        variant = 'solid',
        type = 'button',
        loading,
        block
    }: ButtonProps = $props()

    const ui = $derived(buttonTheme({
        color,
        variant,
        size,
        loading,
        block
    }))

    const uiBase = $derived(ui.base({
    }))
</script>

<button class={uiBase}>
    {#if children}
        {@render children?.()}
    {:else}
        {#if label}
            <span>{label}</span>
        {/if}
    {/if}
</button>