<script lang="ts">
    import type { Snippet } from 'svelte'

    interface VisuallyHiddenProps {
        as?: keyof HTMLElementTagNameMap
        feature?: 'focusable' | 'fully-hidden'
        children?: Snippet
    }

    const {
        children,
        as = 'span',
        feature = 'focusable'
    }: VisuallyHiddenProps = $props()
</script>

<svelte:element
    this={as}
    aria-hidden={feature === 'focusable' ? 'true' : undefined}
    data-hidden={feature === 'fully-hidden' ? '' : undefined}
    tabindex={feature === 'fully-hidden' ? -1 : undefined}
    style:position="absolute"
    style:border="0"
    style:width="1px"
    style:height="1px"
    style:padding="0"
    style:margin="-1px"
    style:overflow="hidden"
    style:clip="rect(0, 0, 0, 0)"
    style:clip-path="inset(50%)"
    style:white-space="nowrap"
    style:word-wrap="normal"
>
    {@render children?.()}
</svelte:element>