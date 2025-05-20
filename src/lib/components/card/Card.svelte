<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { type CardProps, cardTheme } from '.'
    import uiConfig from '#uiconfig'

    const {
        children,
        header,
        footer,
        as = 'div',
        class: className,
        variant,
        ui
    }: CardProps = $props()

    const uiCard = $derived(
        tv({
            extend: tv(cardTheme),
            ...(uiConfig?.ui?.card || {})
        })({
            variant
        })
    )

    const uiRoot = $derived(uiCard.root({
        class: [className?.toString(), ui?.root]
    }))

    const uiHeader = $derived(uiCard.header({
        class: ui?.header
    }))

    const uiBody = $derived(uiCard.body({
        class: ui?.body
    }))

    const uiFooter = $derived(uiCard.footer({
        class: ui?.footer
    }))
</script>

<svelte:element this={as} class={uiRoot}>
    {#if header}
        <div class={uiHeader}>
            {@render header()}
        </div>
    {/if}

    <div class={uiBody}>
        {@render children?.()}
    </div>

    {#if footer}
        <div class={uiFooter}>
            {@render footer()}
        </div>
    {/if}
</svelte:element>