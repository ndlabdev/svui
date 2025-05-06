<script lang="ts">
    import { type ButtonProps, buttonTheme } from '.'
    import RefreshCw from '@lucide/svelte/icons/refresh-cw'

    const {
        leading,
        trailing,
        children,
        loadingIcon,
        label,
        size = 'md',
        color = 'primary',
        variant = 'solid',
        type = 'button',
        tag = 'button',
        loading,
        block,
        href,
        disabled,
        class: className,
        ui,
        ...restProps
    }: ButtonProps = $props()

    const uiButton = $derived(buttonTheme({
        color,
        variant,
        size,
        loading,
        leading: loading,
        trailing: loading,
        block
    }))

    const uiBase = $derived(uiButton.base({
        class: [className?.toString(), ui?.base]
    }))

    const uiLabel = $derived(uiButton.label({
        class: ui?.label
    }))

    const uiLeadingIcon = $derived(uiButton.leadingIcon({
        class: ui?.leadingIcon
    }))

    const uiTrailingIcon = $derived(uiButton.trailingIcon({
        class: ui?.trailingIcon
    }))
</script>

{#if href}
    <a {href} role="button" class={uiBase} {...restProps}>
        {@render children?.()}
    </a>
{:else if tag === 'button'}
    <button
        {type}
        disabled={disabled || loading}
        class={uiBase}
        {...restProps}
    >
        {#if !loading}
            {#if leading}
                {@const Icon = leading}
                <Icon class={uiLeadingIcon} />
            {/if}
        {:else}
            {@const Icon = !loadingIcon ? RefreshCw : loadingIcon}
            <Icon class={uiLeadingIcon} />
        {/if}

        {#if children}
            {@render children?.()}
        {:else}
            {#if label}
                <span class="{uiLabel}">{label}</span>
            {/if}
        {/if}

        {#if trailing}
            {@const Icon = trailing}
            <Icon class={uiTrailingIcon} />
        {/if}
    </button>
{/if}