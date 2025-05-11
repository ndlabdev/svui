<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { type ButtonProps, buttonTheme } from '.'
    import uiConfig from '#uiconfig'
    import { Icon } from '$lib/components/icon'

    const {
        leading,
        leadingIcon,
        trailing,
        trailingIcon,
        loading,
        loadingIcon = 'lucide:refresh-cw',
        children,
        label,
        size = 'md',
        color = 'primary',
        variant = 'solid',
        type = 'button',
        tag = 'button',
        block,
        href,
        disabled,
        class: className,
        ui,
        ...restProps
    }: ButtonProps = $props()

    const uiButton = $derived(
        tv({
            extend: tv(buttonTheme),
            ...(uiConfig?.ui?.button || {})
        })({
            color,
            variant,
            size,
            loading,
            leading: loading,
            trailing: loading,
            block
        })
    )

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
                <Icon name={leadingIcon} class={uiLeadingIcon} />
            {/if}
        {:else}
            <Icon name={loadingIcon} class={uiLeadingIcon} />
        {/if}

        {#if children}
            {@render children?.()}
        {:else}
            {#if label}
                <span class="{uiLabel}">{label}</span>
            {/if}
        {/if}

        {#if trailing}
            <Icon name={trailingIcon} class={uiTrailingIcon} />
        {/if}
    </button>
{/if}