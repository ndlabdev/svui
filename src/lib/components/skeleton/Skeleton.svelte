<script lang="ts">
    import { skeletonTheme, type SkeletonProps } from '.'

    const {
        as = 'div',
        class: className
    }: SkeletonProps = $props()

    const uiSkeleton = $derived(skeletonTheme({
        class: className?.toString()
    }))
</script>

<svelte:element
    this={as}
    class={uiSkeleton}
    aria-busy="true"
    aria-label="loading"
    aria-live="polite"
    role="alert"
/>
