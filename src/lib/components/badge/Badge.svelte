<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { type BadgeProps, badgeTheme } from '.'
    import uiConfig from '#uiconfig'
    import { Avatar, type AvatarProps } from '$lib/components/avatar'
    import { Icon } from '$lib/components/icon'

    const {
        as = 'span',
        children,
        label,
        color,
        variant,
        size,
        square,
        avatar,
        icon,
        leading,
        trailing,
        leadingIcon,
        trailingIcon,
        class: className,
        ui
    }: BadgeProps = $props()

    const isLeading = $derived((icon && leading) || (icon && !trailing) || !!leadingIcon)
    const isTrailing = $derived((icon && trailing) || !!trailingIcon)
    const leadingIconName = $derived(icon)
    const trailingIconName = $derived(trailingIcon || icon)

    const uiBadge = $derived(
        tv({
            extend: tv(badgeTheme),
            ...(uiConfig?.ui?.badge || {})
        })({
            color,
            variant,
            size,
            square: square || !label
        })
    )

    const uiBase = $derived(uiBadge.base({
        class: [ui?.base, className?.toString()]
    }))

    const uiLabel = $derived(uiBadge.label({
        class: ui?.label
    }))

    const uiLeadingIcon = $derived(uiBadge.leadingIcon({
        className: ui?.leadingIcon
    }))

    const uiTrailingIcon = $derived(uiBadge.trailingIcon({
        className: ui?.trailingIcon
    }))

    const uiAvatar = $derived(uiBadge.leadingAvatar({
        class: ui?.leadingAvatar
    }))

    const uiAvatarSize = $derived((ui?.leadingAvatarSize || uiBadge.leadingAvatarSize()) as AvatarProps['size'])
</script>

<svelte:element this={as} class={uiBase}>
    {#if isLeading && leadingIconName}
        <Icon name={leadingIconName} class={uiLeadingIcon} />
    {:else if !!avatar}
        <Avatar size={uiAvatarSize} class={uiAvatar} {...avatar} />
    {/if}

    {#if children}
        {@render children?.()}
    {:else}
        {#if label !== undefined && label !== null}
            <span class="{uiLabel}">{label}</span>
        {/if}
    {/if}

    {#if isTrailing && trailingIconName}
        <Icon name={trailingIconName} class={uiTrailingIcon} />
    {/if}
</svelte:element>