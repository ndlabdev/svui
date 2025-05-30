<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { type AvatarGroupProps, avatarGroupTheme } from '.'
    import uiConfig from '#uiconfig'
    import { Avatar } from '$lib/components/avatar'

    const {
        as = 'div',
        items,
        size,
        max,
        class: className,
        ui
    }: AvatarGroupProps = $props()

    const avatarMax = $derived(typeof max === 'string' ? Number.parseInt(max, 10) : max)

    const uiAvatarGroup = $derived(
        tv({
            extend: tv(avatarGroupTheme),
            ...(uiConfig?.ui?.avatarGroup || {})
        })({
            size
        })
    )

    const uiRoot = $derived(uiAvatarGroup.root({
        class: [ui?.root, className?.toString()]
    }))

    const uiBase = $derived(uiAvatarGroup.base({
        class: ui?.base
    }))

    const visibleAvatars = $derived.by(() => {
        if (!items.length) return []
        if (!avatarMax || avatarMax <= 0) return items.reverse()
        return items.slice(0, avatarMax).reverse()
    })

    const hiddenCount = $derived(!items.length ? 0 : items.length - visibleAvatars.length)
</script>

<svelte:element this={as} class={uiRoot}>
    {#if hiddenCount > 0}
        <Avatar text={`+${hiddenCount}`} {size} class={uiBase} />
    {/if}

    {#each visibleAvatars as item, index (index)}
        <Avatar {...item} {size} class={uiBase} />
    {/each}
</svelte:element>