<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { type AvatarGroupProps, avatarGroupTheme } from '.'
    import uiConfig from '#uiconfig'
    import { Avatar } from '$lib/components/avatar'

    const {
        as = 'div',
        children,
        size,
        max,
        class: className,
				ui,
        ...restProps
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
</script>

<svelte:element this={as} class={uiRoot}>
	{#each children as child}
		{child.src}
	{/each}
</svelte:element>