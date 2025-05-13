<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { separatorTheme, type SeparatorProps } from '.'
    import uiConfig from '#uiconfig'
    import { Avatar, type AvatarProps } from '$lib/components/avatar'
    import { Icon } from '$lib/components/icon'

    const {
        color,
        size,
        type,
        label,
        icon,
        avatar,
        orientation = 'horizontal',
        class: className,
        as = 'div',
        ui,
        ...restProps
    }: SeparatorProps = $props()

    const uiSeparator = $derived(
        tv({
            extend: tv(separatorTheme),
            ...(uiConfig?.ui?.separator || {})
        })({
            color,
            orientation,
            size,
            type
        })
    )

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

    const uiAvatar = $derived(uiSeparator.avatarSize({
        class: ui?.avatar
    }))

    const uiAvatarSize = $derived((ui?.avatarSize || uiSeparator.avatarSize()) as AvatarProps['size'])
</script>

<svelte:element this={as} class={uiRoot} {...restProps}>
    <div class={uiBorder}></div>

    {#if label || icon || avatar}
        <div class={uiContainer}>
            {#if label}
                <span class={uiLabel}>{label}</span>
            {:else if icon}
                <Icon name={icon} class={uiIcon} />
            {:else if !!avatar}
                <Avatar size={uiAvatarSize} class={uiAvatar} {...avatar} />
            {/if}
        </div>

        <div class={uiBorder}></div>
    {/if}
</svelte:element>