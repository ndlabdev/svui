<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { skeletonTheme, type SkeletonProps } from '.'
    import uiConfig from '#uiconfig'

    const {
        as = 'div',
        class: className
    }: SkeletonProps = $props()

    const uiSkeleton = $derived(
        tv({
            extend: tv(skeletonTheme),
            ...(uiConfig?.ui?.skeleton || {})
        })({
            class: className?.toString()
        })
    )
</script>

<svelte:element
    this={as}
    class={uiSkeleton}
    aria-busy="true"
    aria-label="loading"
    aria-live="polite"
    role="alert"
/>
