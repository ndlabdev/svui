<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { type AvatarProps, avatarTheme } from '.'
    import uiConfig from '#uiconfig'
    import { Chip } from '$lib/components/chip'
    import { Icon } from '$lib/components/icon'
    import { Link } from '$lib/components/link'
    import { Tooltip } from '$lib/components/tooltip'

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
        chipProps,
        linkProps,
        tooltipProps,
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

    const mergedClass = $derived([
        ui?.root,
        !chipProps && className,
        linkProps && linkProps?.class,
        linkProps && className,
        !tooltipProps && className
    ].filter(Boolean).join(' '))

    const uiRoot = $derived(uiAvatar.root({
        class: mergedClass
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

{#snippet avatarContent(props = {})}
    {#if src}
        <img
            {...props}
            src={src}
            alt={alt}
            width={sizePx}
            height={sizePx}
            class={uiImage}
            {...restProps}
        >
    {:else if children}
        {@render children?.()}
    {:else if icon}
        <Icon name={icon} class={uiIcon} {...props} />
    {:else}
        <span class={uiFallback} {...props}>{fallback || '\u00A0'}</span>
    {/if}
{/snippet}

{#snippet avatarWrapped(props = {})}
    {#if linkProps}
        <Link {...linkProps} class={uiRoot}>
            <svelte:element this={as} class={uiRoot} {...props} {style}>
                {#if tooltipProps}
                    <Tooltip {...tooltipProps}>
                        {#snippet children({ props })}
                            {@render avatarContent?.(props)}
                        {/snippet}
                    </Tooltip>
                {:else}
                    {@render avatarContent?.()}
                {/if}
            </svelte:element>
        </Link>
    {:else}
        <svelte:element this={as} class={uiRoot} {...props} {style}>
            {#if tooltipProps}
                <Tooltip {...tooltipProps}>
                    {#snippet children({ props })}
                        {@render avatarContent?.(props)}
                    {/snippet}
                </Tooltip>
            {:else}
                {@render avatarContent?.()}
            {/if}
        </svelte:element>
    {/if}
{/snippet}

{#if chipProps}
    <Chip {...chipProps} class={className}>
        {#snippet children({ props })}
            {@render avatarWrapped?.(props)}
        {/snippet}
    </Chip>
{:else}
    {@render avatarWrapped?.()}
{/if}
