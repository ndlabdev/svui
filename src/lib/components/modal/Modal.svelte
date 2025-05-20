<script lang="ts">
    import { Dialog } from 'bits-ui'
    import { tv } from 'tailwind-variants'
    import { modalTheme, type ModalProps } from './'
    import uiConfig from '#uiconfig'

    let {
        close = true,
        portal = true,
        overlay = true,
        transition = true,
        dismissible = true,
        title,
        description,
        fullscreen,
        children,
        slotBody,
        slotTitle,
        slotDescription,
        slotFooter,
        class: className,
        ui,
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
        class: ui?.content
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
</script>

<Dialog.Root>
    <Dialog.Trigger class={uiTrigger}>
        {@render children?.()}
    </Dialog.Trigger>

    <Dialog.Portal>
        {#if overlay}
            <Dialog.Overlay class={uiOverlay} />
        {/if}

        <Dialog.Content class={uiContent}>
            <div class={uiHeader}>
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
            </div>

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
        </Dialog.Content>
    </Dialog.Portal>
</Dialog.Root>