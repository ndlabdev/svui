<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { Drawer } from 'vaul-svelte'
    import { drawerTheme, type DrawerProps } from '.'
    import uiConfig from '#uiconfig'

    const {
        inset,
        direction = 'bottom',
        portal = true,
        overlay = true,
        handle = true,
        modal = true,
        dismissible = true,
        contentProps,
        title,
        description,
        children,
        slotTitle,
        slotBody,
        slotContent,
        slotDescription,
        slotFooter,
        slotHeader,
        class: className,
        ui,
        ...restProps
    }: DrawerProps = $props()

    const {
        activeSnapPoint,
        closeThreshold,
        shouldScaleBackground,
        setBackgroundColorOnScale,
        scrollLockTimeout,
        fixed,
        open,
        defaultOpen,
        nested,
        noBodyStyles,
        handleOnly,
        preventScrollRestoration,
        snapPoints
    } = restProps

    const rootProps = $derived({
        activeSnapPoint,
        closeThreshold,
        shouldScaleBackground,
        setBackgroundColorOnScale,
        scrollLockTimeout,
        fixed,
        dismissible,
        modal,
        open,
        defaultOpen,
        nested,
        direction,
        noBodyStyles,
        handleOnly,
        preventScrollRestoration,
        snapPoints
    } as Drawer.RootProps)

    const uiDrawer = $derived(
        tv({
            extend: tv(drawerTheme),
            ...(uiConfig?.ui?.drawer || {})
        })({
            direction,
            inset
        })
    )

    const uiTrigger = $derived(className?.toString())

    const uiOverlay = $derived(uiDrawer.overlay({
        class: ui?.overlay
    }))

    const uiContent = $derived(uiDrawer.content({
        class: [!children && className?.toString(), ui?.content]
    }))

    const uiHandle = $derived(uiDrawer.handle({
        class: ui?.handle
    }))

    const uiTitle = $derived(uiDrawer.title({
        class: ui?.title
    }))

    const uiDescription = $derived(uiDrawer.description({
        class: ui?.description
    }))

    const uiContainer = $derived(uiDrawer.container({
        class: ui?.container
    }))

    const uiHeader = $derived(uiDrawer.header({
        class: ui?.header
    }))

    const uiBody = $derived(uiDrawer.body({
        class: ui?.body
    }))

    const uiFooter = $derived(uiDrawer.footer({
        class: ui?.footer
    }))
</script>

<Drawer.Root {...rootProps}>
    <Drawer.Trigger class={uiTrigger}>
        {#snippet child({ props })}
            {@render children?.({ props })}
        {/snippet}
    </Drawer.Trigger>

    <Drawer.Portal disabled={!portal}>
        {#if overlay}
            <Drawer.Overlay class={uiOverlay} />
        {/if}

        <Drawer.Content
            {...contentProps}
            class={uiContent}
        >
            {#if handle}
                <Drawer.Handle class={uiHandle} />
            {/if}

            {#if slotContent}
                {@render slotContent?.()}
            {:else}
                <div class={uiContainer}>
                    {#if !!slotHeader || (title || !!slotTitle) || (description || !!slotDescription)}
                        {#if slotHeader}
                            {@render slotHeader?.()}
                        {:else}
                            <div class={uiHeader}>
                                {#if slotTitle}
                                    {@render slotTitle?.()}
                                {:else}
                                    {#if title}
                                        <Drawer.Title class={uiTitle}>{title}</Drawer.Title>
                                    {/if}
                                {/if}

                                {#if slotDescription}
                                    {@render slotDescription?.()}
                                {:else}
                                    {#if description}
                                        <Drawer.Description class={uiDescription}>{description}</Drawer.Description>
                                    {/if}
                                {/if}
                            </div>
                        {/if}

                        {#if slotBody}
                            <div class={uiBody}>
                                {@render slotBody?.()}
                            </div>
                        {/if}

                        {#if slotFooter}
                            <div class={uiFooter}>
                                {@render slotFooter?.()}
                            </div>
                        {/if}
                    {/if}
                </div>
            {/if}
        </Drawer.Content>
    </Drawer.Portal>
</Drawer.Root>
