<script lang="ts">
    import { Dialog } from 'bits-ui'
    import { tv } from 'tailwind-variants'
    import { modalTheme, type ModalProps } from './'
    import uiConfig from '#uiconfig'
    import { Button, type ButtonProps } from '$lib/components/button'
    import VisuallyHidden from '$lib/components/VisuallyHidden.svelte'

    let {
        close = true,
        portal = true,
        overlay = true,
        transition = true,
        dismissible = true,
        title,
        description,
        fullscreen,
        closeIcon,
        children,
        slotBody,
        slotTitle,
        slotHeader,
        slotContent,
        slotDescription,
        slotFooter,
        class: className,
        contentProps,
        ui,
        slotClose,
        ...restProps
    }: ModalProps = $props()

    const uiModal = $derived(
        tv({
            extend: tv(modalTheme),
            ...(uiConfig?.ui?.modal || {})
        })({
            transition,
            fullscreen
        })
    )

    const uiTrigger = $derived(className?.toString())

    const uiOverlay = $derived(uiModal.overlay({
        class: ui?.overlay
    }))

    const uiContent = $derived(uiModal.content({
        class: [!children && className?.toString(), ui?.content]
    }))

    const uiTitle = $derived(uiModal.title({
        class: ui?.title
    }))

    const uiDescription = $derived(uiModal.description({
        class: ui?.description
    }))

    const uiHeader = $derived(uiModal.header({
        class: ui?.header
    }))

    const uiWrapper = $derived(uiModal.wrapper({
        class: ui?.wrapper
    }))

    const uiBody = $derived(uiModal.body({
        class: ui?.body
    }))

    const uiFooter = $derived(uiModal.footer({
        class: ui?.footer
    }))

    const uiClose = $derived(uiModal.close({
        class: ui?.close
    }))

    const buttonCloseProps = $derived(typeof close === 'object' ? close as Partial<ButtonProps> : {})
</script>

<Dialog.Root {...restProps}>
    <Dialog.Trigger class={uiTrigger}>
        {#snippet child({ props })}
            <div {...props}>
                {@render children?.()}
            </div>
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
                                            <div {...props}>
                                                <Button
                                                    icon={closeIcon || uiConfig.icon.close}
                                                    size="md"
                                                    color="neutral"
                                                    variant="ghost"
                                                    aria-label="Close"
                                                    class={uiClose}
                                                    {...buttonCloseProps}
                                                />
                                            </div>
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