<script lang="ts">
    import { Tooltip } from 'bits-ui'
    import { fly } from 'svelte/transition'
    import { tv } from 'tailwind-variants'
    import { tooltipTheme, type TooltipProps } from '.'
    import uiConfig from '#uiconfig'

    let {
        portal = true,
        ui,
        open = $bindable(false),
        text: tooltipText,
        arrow,
        forceMount,
        child: slotChild,
        slotContent,
        triggerProps = {},
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

    const uiContentClass = $derived(uiTooltip.content({
        class: [!slotChild && className?.toString(), ui?.content]
    }))

    const uiContent = $derived(forceMount
        ? [!slotChild && className?.toString(), ui?.content, 'flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2 py-1 text-xs select-none pointer-events-auto']
        : uiContentClass)

    const uiText = $derived(uiTooltip.text({
        class: ui?.text
    }))

    const uiArrow = $derived(uiTooltip.arrow({
        class: ui?.arrow
    }))
</script>

{#snippet tooltipContent()}
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
{/snippet}

<Tooltip.Root bind:open {...rootProps}>
    <Tooltip.Trigger {...triggerProps} class={uiTrigger}>
        {#snippet child({ props })}
            {@render slotChild?.({ props })}
        {/snippet}
    </Tooltip.Trigger>

    <Tooltip.Portal disabled={!portal}>
        {#if forceMount}
            <Tooltip.Content
                {...contentProps}
                {forceMount}
                class={uiContent}
            >
                {#snippet child({ wrapperProps, props, open })}
                    {#if open}
                        <div {...wrapperProps}>
                            <div {...props} transition:fly={{ duration: 200 }}>
                                {@render tooltipContent?.()}
                            </div>
                        </div>
                    {/if}
                {/snippet}
            </Tooltip.Content>
        {:else}
            <Tooltip.Content
                {...contentProps}
                {forceMount}
                class={uiContent}
            >
                {@render tooltipContent?.()}
            </Tooltip.Content>
        {/if}
    </Tooltip.Portal>
</Tooltip.Root>
