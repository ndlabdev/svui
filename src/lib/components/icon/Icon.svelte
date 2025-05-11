<script lang="ts">
    import Icon from '@iconify/svelte'

    const {
        name,
        class: className,
        ...restProps
    } = $props()
</script>

<Icon
    icon={name}
    class={className}
    {...restProps}
/>