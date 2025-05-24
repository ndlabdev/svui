<script lang="ts">
    import { Tooltip } from 'bits-ui'
    import { tv } from 'tailwind-variants'
    import { tooltipTheme, type TooltipProps } from '.'
    import uiConfig from '#uiconfig'

    const {
        children,
        portal = true,
        ui,
        text: tooltipText,
        arrow,
        slotContent,
        contentProps = {
            sideOffset: 8,
            collisionPadding: 8,
            side: 'bottom'
        },
        class: className,
        ...restProps
    }: TooltipProps = $props()

    const {
        delayDuration,
        disableHoverableContent,
        disableCloseOnTriggerClick,
        disabled,
        ignoreNonKeyboardFocus,
        open,
        onOpenChange
    } = restProps

    const rootProps = $derived({
        delayDuration,
        disableHoverableContent,
        disableCloseOnTriggerClick,
        disabled,
        ignoreNonKeyboardFocus,
        open,
        onOpenChange
    } as Tooltip.RootProps)

    const uiTooltip = $derived(
        tv({
            extend: tv(tooltipTheme),
            ...(uiConfig?.ui?.tooltip || {})
        })({
            side: contentProps.side
        })
    )

    const uiTrigger = $derived(className?.toString())

    const uiContent = $derived(uiTooltip.content({
        class: [!children && className?.toString(), ui?.content]
    }))

    const uiText = $derived(uiTooltip.text({
        class: ui?.text
    }))

    const uiArrow = $derived(uiTooltip.arrow({
        class: ui?.arrow
    }))
</script>

<Tooltip.Root {...rootProps}>
    <Tooltip.Trigger class={uiTrigger}>
        {#snippet child({ props })}
            <div {...props} class="inline-block">
                {@render children?.()}
            </div>
        {/snippet}
    </Tooltip.Trigger>

    <Tooltip.Portal disabled={!portal}>
        <Tooltip.Content
            {...contentProps}
            class={uiContent}
        >
            {#if slotContent}
                {@render slotContent?.()}
            {:else}
                {#if tooltipText}
                    <span class={uiText}>{tooltipText}</span>
                {/if}

                {#if !!arrow}
                    <Tooltip.Arrow class={uiArrow} />
                {/if}
            {/if}
        </Tooltip.Content>
    </Tooltip.Portal>
</Tooltip.Root>
