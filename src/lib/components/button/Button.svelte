<script lang="ts">
    import { Button } from 'bits-ui'
    import { getContext } from 'svelte'
    import { tv } from 'tailwind-variants'
    import { type ButtonProps, buttonTheme } from '.'
    import uiConfig from '#uiconfig'
    import { Avatar, type AvatarProps } from '$lib/components/avatar'
    import type { ButtonGroupContext } from '$lib/components/button-group'
    import { Icon } from '$lib/components/icon'
    import { Link } from '$lib/components/link'

    let {
        icon,
        avatar,
        leading,
        leadingIcon,
        trailing,
        trailingIcon,
        loading,
        loadingIcon,
        children,
        label,
        square,
        size,
        color,
        variant,
        type = 'button',
        tag = 'button',
        block,
        href,
        disabled,
        class: className,
        ui,
        ...restProps
    }: ButtonProps = $props()

    const buttonGroup = getContext<ButtonGroupContext>('button-group')

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
            ...uiConfig.ui?.button || {}
        })({
            color,
            variant,
            size: size || buttonGroup?.size,
            buttonGroup: buttonGroup?.orientation,
            loading,
            leading: isLeading,
            trailing: isTrailing,
            block,
            square: square || (!children && !label)
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

    const uiAvatar = $derived(uiButton.leadingAvatarSize({
        class: ui?.leadingAvatar
    }))

    const uiAvatarSize = $derived((ui?.leadingAvatarSize || uiButton.leadingAvatarSize()) as AvatarProps['size'])
</script>

{#snippet buttonSlots()}
    {#if isLeading && leadingIconName}
        <Icon name={leadingIconName} class={uiLeadingIcon} />
    {:else if !!avatar}
        <Avatar size={uiAvatarSize} class={uiAvatar} {...avatar} />
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
{/snippet}

{#if href}
    <Link {href} {disabled} class={uiBase} {...restProps}>
        {@render buttonSlots?.()}
    </Link>
{:else if tag === 'button'}
    <Button.Root
        {type}
        disabled={disabled || loading}
        class={uiBase}
        {...restProps}
    >
        {@render buttonSlots?.()}
    </Button.Root>
{/if}
