<script lang="ts">
    import { type LinkBaseProps } from '.'

    const {
        children,
        disabled,
        onClick,
        href,
        goto,
        isExternal,
        rel,
        target,
        as = 'button',
        type = 'button'
    }: LinkBaseProps = $props()

    function onClickWrapper(e: MouseEvent) {
        if (disabled) {
            e.preventDefault()
            e.stopPropagation()
            return
        }

        const handlers = Array.isArray(onClick) ? onClick : [onClick]
        for (const handler of handlers) {
            handler?.(e)
        }

        if (href && goto && !isExternal) {
            goto(e)
        }
    }

    const elementProps = $derived(href ? {
        'as': 'a',
        'rel': rel,
        'target': target,
        'href': disabled ? undefined : href,
        'aria-disabled': disabled ? true : undefined,
        'role': disabled ? 'link' : undefined,
        'tabindex': disabled ? -1 : undefined
    } : as === 'button' ? {
        as,
        type,
        disabled
    } : {
        as
    })
</script>

<svelte:element
    this={elementProps.as}
    {...elementProps}
    onclick={onClickWrapper}
>
    {@render children?.()}
</svelte:element>