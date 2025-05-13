<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { type AvatarProps, avatarTheme } from '.'
    import uiConfig from '#uiconfig'
    import { Icon } from '$lib/components/icon'

    const {
        as = 'span',
        children,
        ui,
        size,
        alt,
        src,
        icon,
        text,
        style,
        class: className,
        ...restProps
    }: AvatarProps = $props()

    const fallback = $derived(text || (alt || '').split(' ').map(word => word.charAt(0)).join('').substring(0, 2))

    const uiAvatar = $derived(
        tv({
            extend: tv(avatarTheme),
            ...(uiConfig?.ui?.avatar || {})
        })({
            size
        })
    )

    const uiRoot = $derived(uiAvatar.root({
        class: [ui?.root, className?.toString()]
    }))

    const uiImage = $derived(uiAvatar.image({
        class: ui?.image
    }))

    const uiIcon = $derived(uiAvatar.icon({
        class: ui?.icon
    }))

    const uiFallback = $derived(uiAvatar.fallback({
        class: ui?.fallback
    }))

    const sizePx = $derived(
        {
            '3xs': 16,
            '2xs': 20,
            xs: 24,
            sm: 28,
            md: 32,
            lg: 36,
            xl: 40,
            '2xl': 44,
            '3xl': 48
        }[size || 'md']
    )
</script>

<svelte:element this={as} class={uiRoot} {style}>
    {#if src}
        <img
            src={src}
            alt={alt}
            width={sizePx}
            height={sizePx}
            class={uiImage}
            {...restProps}
        >
    {:else}
        {#if children}
            {@render children?.()}
        {:else}
            {#if icon}
                <Icon name={icon} class={uiIcon} />
            {:else}
                <span class={uiFallback}>{fallback || '\u00A0'}</span>
            {/if}
        {/if}
    {/if}
</svelte:element>