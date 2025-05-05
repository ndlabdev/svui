<script lang="ts">
    import { type LinkProps } from '.'

    const {
        href,
        disabled,
        target,
        rel,
        inactiveClass,
        activeClass,
        children
    }: LinkProps = $props()
</script>

{#if href && !disabled}
    <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : '')}
        class={disabled ? inactiveClass : activeClass}
        aria-disabled={disabled ? 'true' : undefined}
    >
        {@render children?.()}
    </a>
{:else}
    <button
        class={disabled ? inactiveClass : activeClass}
        disabled={disabled}
    >
        {@render children?.()}
    </button>
{/if}