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
        })()
    )

    const uiBase = $derived(uiSkeleton.base({
        class: className?.toString()
    }))
</script>

<svelte:element
    this={as}
    class={uiBase}
    aria-busy="true"
    aria-label="loading"
    aria-live="polite"
    role="alert"
/>
