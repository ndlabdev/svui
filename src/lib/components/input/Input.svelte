<script lang="ts">
    import { getContext } from 'svelte'
    import { tv } from 'tailwind-variants'
    import { type InputProps, inputTheme } from '.'
    import uiConfig from '#uiconfig'
    import { Avatar, type AvatarProps } from '$lib/components/avatar'
    import type { ButtonGroupContext } from '$lib/components/button-group'
    import { Icon } from '$lib/components/icon'

    const {
        as = 'div',
        type = 'text',
        autocomplete = 'off',
        value = $bindable(),
        children,
        color,
        variant,
        placeholder,
        disabled,
        id,
        required,
        icon,
        avatar,
        highlight,
        loading,
        loadingIcon,
        slotLeading,
        slotTrailing,
        leadingIcon,
        trailingIcon,
        class: className,
        ui
    }: InputProps = $props()

    const buttonGroup = getContext<ButtonGroupContext>('button-group')


    const isLeading = $derived((icon && slotLeading) || (icon && !slotTrailing) || (loading && !slotTrailing) || !!leadingIcon)
    const isTrailing = $derived((icon && slotTrailing) || (loading && slotTrailing) || !!trailingIcon)

    const leadingIconName = $derived(
        loading ? loadingIcon || uiConfig.icon.loading : loadingIcon || icon
    )

    const trailingIconName = $derived(
        loading && !isLeading ? loadingIcon || uiConfig.icon.loading : trailingIcon || icon
    )

    const hasLeading = $derived(isLeading || !!avatar || !!slotLeading)
    const hasTrailing = $derived(isTrailing || !!slotTrailing)

    const uiInput = $derived(
        tv({
            extend: tv(inputTheme),
            ...(uiConfig?.ui?.input || {})
        })({
            type: type as keyof typeof inputTheme['variants']['type'],
            color,
            variant,
            size: buttonGroup?.size,
            loading,
            highlight,
            leading: !!hasLeading,
            trailing: !!hasTrailing,
            buttonGroup: buttonGroup?.orientation
        })
    )

    const uiRoot = $derived(uiInput.root({
        class: [ui?.root, className?.toString()]
    }))

    const uiBase = $derived(uiInput.base({
        class: ui?.base
    }))

    const uiLeading = $derived(uiInput.leading({
        className: ui?.leading
    }))

    const uiLeadingIcon = $derived(uiInput.leadingIcon({
        className: ui?.leadingIcon
    }))

    const uiTrailing = $derived(uiInput.trailing({
        className: ui?.trailing
    }))

    const uiTrailingIcon = $derived(uiInput.trailingIcon({
        className: ui?.trailingIcon
    }))

    const uiAvatar = $derived(uiInput.leadingAvatar({
        class: ui?.leadingAvatar
    }))

    const uiAvatarSize = $derived((ui?.leadingAvatarSize || uiInput.leadingAvatarSize()) as AvatarProps['size'])
</script>

<svelte:element this={as} class={uiRoot}>
    <input
        {id}
        {type}
        {value}
        {placeholder}
        {disabled}
        {required}
        {autocomplete}
        class={uiBase}
    >

    {@render children?.()}

    {#if hasLeading}
        <span class={uiLeading}>
            {#if slotLeading}
                {@render slotLeading?.()}
            {:else}
                {#if isLeading && leadingIconName}
                    <Icon name={leadingIconName} class={uiLeadingIcon} />
                {:else if !!avatar}
                    <Avatar size={uiAvatarSize} class={uiAvatar} {...avatar} />
                {/if}
            {/if}
        </span>
    {/if}

    {#if hasTrailing}
        <span class={uiTrailing}>
            {#if slotTrailing}
                {@render slotTrailing?.()}
            {:else}
                {#if trailingIconName}
                    <Icon name={trailingIconName} class={uiTrailingIcon} />
                {/if}
            {/if}
        </span>
    {/if}
</svelte:element>