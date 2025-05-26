<script lang="ts">
    import { Accordion } from 'bits-ui'
    import { slide } from 'svelte/transition'
    import { tv } from 'tailwind-variants'
    import { accordionTheme, type AccordionProps } from '.'
    import uiConfig from '#uiconfig'
    import AccordionItem from '$lib/components/accordion/AccordionItem.svelte'
    import { Icon } from '$lib/components/icon'

    const {
        ui,
        leading,
        trailingIcon,
        forceMount = false,
        type = 'single',
        items = [],
        disabled,
        class: className,
        ...restProps
    }: AccordionProps = $props()

    const {
        value,
        onValueChange,
        loop,
        ref,
        children,
        child
    } = restProps

    const rootProps = $derived({
        type,
        disabled,
        value,
        onValueChange,
        loop,
        ref,
        children,
        child
    } as Accordion.RootProps)

    const uiAccordion = $derived(
        tv({
            extend: tv(accordionTheme),
            ...(uiConfig?.ui?.accordion || {})
        })({
            disabled
        })
    )

    const uiRoot = $derived(uiAccordion.root({
        class: [className?.toString(), ui?.root]
    }))

    const uiItem = $derived(uiAccordion.item({
        class: ui?.item
    }))

    const uiHeader = $derived(uiAccordion.header({
        class: ui?.header
    }))

    const uiContentClass = $derived(uiAccordion.content({
        class: ui?.content
    }))

    const uiContent = $derived(forceMount
        ? `${ui?.content} overflow-hidden focus:outline-none`
        : uiContentClass)

    const uiBody = $derived(uiAccordion.body({
        class: ui?.body
    }))

    const uiLeadingIcon = $derived(uiAccordion.leadingIcon({
        class: ui?.leadingIcon
    }))

    const uiTrailingIcon = $derived(uiAccordion.trailingIcon({
        class: ui?.trailingIcon
    }))

    const uiLabel = $derived(uiAccordion.label({
        class: ui?.label
    }))

    const uiTrigger = (itemDisabled?: boolean): string => uiAccordion.trigger({
        class: ui?.trigger,
        disabled: itemDisabled
    })
</script>

<Accordion.Root {...rootProps} class={uiRoot}>
    {#each items as item, index (index)}
        <AccordionItem
            {item}
            {index}
            {forceMount}
            {leading}
            {uiItem}
            {uiHeader}
            {uiTrigger}
            {uiLeadingIcon}
            {uiLabel}
            {uiTrailingIcon}
            {uiContent}
            {uiBody}
            {trailingIcon}
        />
    {/each}
</Accordion.Root>