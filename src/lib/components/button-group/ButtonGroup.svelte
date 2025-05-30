<script lang="ts">
    import { setContext } from 'svelte'
    import { tv } from 'tailwind-variants'
    import { type ButtonGroupProps, type ButtonGroupContext, buttonGroupTheme } from '.'
    import uiConfig from '#uiconfig'

    const {
        as = 'div',
        size,
        orientation = 'horizontal',
        children,
        class: className,
        ui
    }: ButtonGroupProps = $props()

    setContext<ButtonGroupContext>('button-group', {
        size,
        orientation
    })

    const uiButtonGroup = $derived(
        tv({
            extend: tv(buttonGroupTheme),
            ...(uiConfig?.ui?.buttonGroup || {})
        })({
            orientation
        })
    )

    const uiBase = $derived(uiButtonGroup.base({
        class: [ui?.base, className?.toString()]
    }))
</script>

<svelte:element this={as} class={uiBase}>
    {@render children?.()}
</svelte:element>