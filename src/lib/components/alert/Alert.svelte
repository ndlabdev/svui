<script lang="ts">
    import X from '@lucide/svelte/icons/x'

    import { Button } from '../button'

    import { type AlertProps, alertTheme } from '.'

    const {
        as = 'div',
        title,
        description,
        orientation = 'vertical',
        icon,
        color,
        variant,
        close,
        closeIcon,
        actions,
        class: className,
        slotLeading,
        slotTitle,
        slotActions,
        slotDescription,
        slotClose,
        ui
    }: AlertProps = $props()

    const uiAlert = $derived(alertTheme({
        color,
        variant,
        orientation,
        title: !!title || !!slotTitle
    }))

    const uiRoot = $derived(uiAlert.root({
        class: [ui?.root, className?.toString()]
    }))

    const uiIcon = $derived(uiAlert.icon({
        class: ui?.icon
    }))

    const uiWrapper = $derived(uiAlert.wrapper({
        class: ui?.wrapper
    }))

    const uiTitle = $derived(uiAlert.title({
        class: ui?.title
    }))

    const uiDescription = $derived(uiAlert.description({
        class: ui?.description
    }))

    const uiActionsVertical = $derived(uiAlert.actions({
        class: ui?.actions
    }))

    const uiActionsHorizontal = $derived(uiAlert.actions({
        class: ui?.actions,
        orientation: 'horizontal'
    }))

    const uiClose = $derived(uiAlert.close({
        class: ui?.close
    }))
</script>

<svelte:element this={as} data-orientation={orientation} class={uiRoot}>
    {#if slotLeading}
        {@render slotLeading?.()}
    {:else}
        {#if icon}
            {@const Icon = icon}
            <Icon class={uiIcon} />
        {/if}
    {/if}

    <div class={uiWrapper}>
        {#if slotTitle}
            {@render slotTitle?.()}
        {:else}
            {#if title}
                <div class={uiTitle}>
                    {title}
                </div>
            {/if}
        {/if}

        {#if slotDescription}
            {@render slotDescription?.()}
        {:else}
            {#if description}
                <div class={uiDescription}>
                    {description}
                </div>
            {/if}
        {/if}

        <div class={uiActionsVertical}>
            {#if orientation === 'vertical' && (actions?.length || !!slotActions)}
                {#if slotActions}
                    {@render slotActions?.()}
                {:else}
                    {#each actions ?? [] as action, index (index)}
                        <Button
                            size="xs"
                            {...action}
                        />
                    {/each}
                {/if}
            {/if}
        </div>
    </div>

    {#if orientation === 'horizontal' && (actions?.length || !!slotActions) || close}
        <div class={uiActionsHorizontal}>
            {#if orientation === 'horizontal' && (actions?.length || !!slotActions)}
                {#if slotActions}
                    {@render slotActions?.()}
                {:else}
                    {#each actions ?? [] as action, index (index)}
                        <Button
                            size="xs"
                            {...action}
                        />
                    {/each}
                {/if}
            {/if}

            {#if slotClose}
                {@render slotClose?.()}
            {:else}
                {#if close}
                    <Button
                        size="md"
                        color="secondary"
                        variant="link"
                        aria-label="Close"
                        leading={closeIcon || X}
                        class={uiClose}
                    />
                {/if}
            {/if}
        </div>
    {/if}
</svelte:element>