<script lang="ts">
    import { type CardProps, cardTheme } from '.'

    const {
        children,
        header,
        footer,
        class: className,
        ui
    }: CardProps = $props()

    const uiCard = $derived(cardTheme())

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

<div class={uiRoot}>
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
</div>