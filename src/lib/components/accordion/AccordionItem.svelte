<script lang="ts">
    import { type AccordionItemProps } from '.'

    const {
        children,
        item,
        value
    }: AccordionItemProps = $props()
</script>

{#if value && item.custom && item.value === value}
    {@render children?.()}
{/if}
