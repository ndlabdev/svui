<script lang="ts">
    import { type ButtonProps, buttonTheme } from '.'

    const {
        leading,
        trailing,
        children,
        label,
        size = 'md',
        color = 'primary',
        variant = 'solid',
        type = 'button',
        tag = 'button',
        loading,
        block,
        href,
        ...restProps
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

    const uiLabel = $derived(ui.label({}))
</script>

{#if href}
    <a {href} role="button" class={uiBase} {...restProps}>
        {@render children?.()}
    </a>
{:else if tag === 'button'}
    <button {type} class={uiBase} {...restProps}>
        {@render leading?.()}

        {#if children}
            {@render children?.()}
        {:else}
            {#if label}
                <span class="{uiLabel}">{label}</span>
            {/if}
        {/if}

        {@render trailing?.()}
    </button>
{/if}