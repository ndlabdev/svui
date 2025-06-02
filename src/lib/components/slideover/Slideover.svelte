<script lang="ts">
    import { Dialog } from 'bits-ui'
    import { tv } from 'tailwind-variants'
    import { slideoverTheme, type SlideoverProps } from '.'
    import uiConfig from '#uiconfig'
    import { Button, type ButtonProps } from '$lib/components/button'
    import VisuallyHidden from '$lib/components/VisuallyHidden.svelte'

    const {
        close = true,
        portal = true,
        overlay = true,
        transition = true,
        dismissible = true,
        side = 'right',
        title,
        description,
        closeIcon,
        children,
        slotBody,
        slotTitle,
        slotHeader,
        slotContent,
        slotDescription,
        slotFooter,
        slotClose,
        contentProps,
        class: className,
        ui,
        ...restProps
    }: SlideoverProps = $props()

    const uiSlideover = $derived(
        tv({
            extend: tv(slideoverTheme),
            ...(uiConfig?.ui?.slideover || {})
        })({
            transition,
            side
        })
    )

    const uiTrigger = $derived(className?.toString())

    const uiOverlay = $derived(uiSlideover.overlay({
        class: ui?.overlay
    }))

    const uiContent = $derived(uiSlideover.content({
        class: [!children && className?.toString(), ui?.content]
    }))

    const uiTitle = $derived(uiSlideover.title({
        class: ui?.title
    }))

    const uiDescription = $derived(uiSlideover.description({
        class: ui?.description
    }))

    const uiHeader = $derived(uiSlideover.header({
        class: ui?.header
    }))

    const uiWrapper = $derived(uiSlideover.wrapper({
        class: ui?.wrapper
    }))

    const uiBody = $derived(uiSlideover.body({
        class: ui?.body
    }))

    const uiFooter = $derived(uiSlideover.footer({
        class: ui?.footer
    }))

    const uiClose = $derived(uiSlideover.close({
        class: ui?.close
    }))

    const buttonCloseProps = $derived(typeof close === 'object' ? close as Partial<ButtonProps> : {})
</script>

<Dialog.Root {...restProps}>
    <Dialog.Trigger class={uiTrigger}>
        {#snippet child({ props })}
            {@render children?.({ props })}
        {/snippet}
    </Dialog.Trigger>

    <Dialog.Portal disabled={!portal}>
        {#if overlay}
            <Dialog.Overlay class={uiOverlay} />
        {/if}

        <Dialog.Content
            {...contentProps}
            {...!dismissible ? {
                escapeKeydownBehavior: 'ignore',
                interactOutsideBehavior: 'ignore'
            } : {}}
            class={uiContent}
        >
            {#if !!slotContent || (title || !!slotTitle) || (description || !!slotDescription)}
                <VisuallyHidden>
                    {#if slotTitle}
                        {@render slotTitle?.()}
                    {:else}
                        {#if title}
                            <Dialog.Title class={uiTitle}>{title}</Dialog.Title>
                        {/if}
                    {/if}

                    {#if slotDescription}
                        {@render slotDescription?.()}
                    {:else}
                        {#if description}
                            <Dialog.Description class={uiDescription}>{description}</Dialog.Description>
                        {/if}
                    {/if}
                </VisuallyHidden>
            {/if}

            {#if slotContent}
                {@render slotContent?.()}
            {:else}
                {#if !!slotHeader || (title || !!slotTitle) || (description || !!slotDescription) || (close || !!slotClose)}
                    <div class={uiHeader}>
                        {#if slotHeader}
                            {@render slotHeader?.()}
                        {:else}
                            <div class={uiWrapper}>
                                {#if slotTitle}
                                    {@render slotTitle?.()}
                                {:else}
                                    {#if title}
                                        <Dialog.Title class={uiTitle}>{title}</Dialog.Title>
                                    {/if}
                                {/if}

                                {#if slotDescription}
                                    {@render slotDescription?.()}
                                {:else}
                                    {#if description}
                                        <Dialog.Description class={uiDescription}>{description}</Dialog.Description>
                                    {/if}
                                {/if}
                            </div>

                            {#if slotClose}
                                {@render slotClose?.()}
                            {:else}
                                {#if close}
                                    <Dialog.Close>
                                        {#snippet child({ props })}
                                            <Button
                                                {...props}
                                                icon={closeIcon || uiConfig.icon.close}
                                                size="md"
                                                color="neutral"
                                                variant="ghost"
                                                aria-label="Close"
                                                class={uiClose}
                                                {...buttonCloseProps}
                                            />
                                        {/snippet}
                                    </Dialog.Close>
                                {/if}
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
        </Dialog.Content>
    </Dialog.Portal>
</Dialog.Root>