<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { containerTheme, type ContainerProps } from '.'
    import uiConfig from '#uiconfig'

    const {
        as = 'div',
        class: className,
        children
    }: ContainerProps = $props()

    const uiContainer = $derived(
        tv({
            extend: tv(containerTheme),
            ...(uiConfig?.ui?.container || {})
        })()
    )

    const uiRoot = $derived(uiContainer.base({
        class: className?.toString()
    }))
</script>

<svelte:element this={as} class={uiRoot}>
    {@render children?.()}
</svelte:element>