<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { type ButtonProps, buttonTheme } from '.'
    import uiConfig from '#uiconfig'
    import { Icon } from '$lib/components/icon'

    const {
        icon,
        leading,
        leadingIcon,
        trailing,
        trailingIcon,
        loading,
        loadingIcon,
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

    const isLeading = $derived((icon && leading) || (icon && !trailing) || (loading && !trailing) || !!leadingIcon)
    const isTrailing = $derived((icon && trailing) || (loading && trailing) || !!trailingIcon)

    const leadingIconName = $derived(
        loading ? loadingIcon || uiConfig.icon.loading : loadingIcon || icon
    )

    const trailingIconName = $derived(
        loading && !isLeading ? loadingIcon || uiConfig.icon.loading : trailingIcon || icon
    )

    const uiButton = $derived(
        tv({
            extend: tv(buttonTheme),
            ...(uiConfig?.ui?.button || {})
        })({
            color,
            variant,
            size,
            loading,
            leading: isLeading,
            trailing: isTrailing,
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
        {#if isLeading && leadingIconName}
            <Icon name={leadingIconName} class={uiLeadingIcon} />
        {/if}

        {#if children}
            {@render children?.()}
        {:else}
            {#if label}
                <span class="{uiLabel}">{label}</span>
            {/if}
        {/if}

        {#if isTrailing && trailingIconName}
            <Icon name={trailingIconName} class={uiTrailingIcon} />
        {/if}
    </button>
{/if}