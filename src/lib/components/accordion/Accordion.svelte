<script lang="ts">
    import { Accordion } from 'bits-ui'
    import { slide } from 'svelte/transition'
    import { tv } from 'tailwind-variants'
    import { accordionTheme, type AccordionProps } from '.'
    import uiConfig from '#uiconfig'
    import { Icon } from '$lib/components/icon'

    const {
        ui,
        leading,
        trailingIcon,
        forceMount = false,
        type = 'single',
        items = [],
        disabled,
        class: className
    }: AccordionProps = $props()

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

    const uiContent = $derived(uiAccordion.content({
        class: ui?.content
    }))

    const uiContentClass = $derived(forceMount
        ? `${ui?.content} overflow-hidden focus:outline-none`
        : ui?.content)

    const uiBody = $derived(uiAccordion.body({
        class: ui?.body
    }))

    const uiTrigger = $derived(uiAccordion.trigger({
        class: ui?.trigger
    }))

    const uiLeadingIcon = $derived(uiAccordion.leadingIcon({
        class: ui?.leadingIcon
    }))

    const uiTrailingIcon = $derived(uiAccordion.trailingIcon({
        class: ui?.trailingIcon
    }))
</script>

<Accordion.Root {type} class={uiRoot}>
    {#each items as item, index (index)}
        <Accordion.Item
            value={item.value || String(index)}
            disabled={item.disabled}
            class={uiItem}
        >
            <Accordion.Header class={uiHeader}>
                <Accordion.Trigger class={uiTrigger}>
                    {#if leading}
                        {@render leading?.()}
                    {:else}
                        {#if item.icon}
                            <Icon name={item.icon} class={uiLeadingIcon} />
                        {/if}
                    {/if}

                    {item.label}

                    <Icon name={item.trailingIcon || trailingIcon || uiConfig.icon.chevronDown} class={uiTrailingIcon} />
                </Accordion.Trigger>
            </Accordion.Header>

            {#if forceMount}
                <Accordion.Content {forceMount} class={uiContentClass}>
                    {#snippet child({ props, open })}
                        {#if open}
                            <div {...props} transition:slide={{ duration: 200 }}>
                                <div class={uiBody}>
                                    {item.content}
                                </div>
                            </div>
                        {/if}
                    {/snippet}
                </Accordion.Content>
            {:else}
                <Accordion.Content {forceMount} class={uiContent}>
                    <div class={uiBody}>
                        {item.content}
                    </div>
                </Accordion.Content>
            {/if}
        </Accordion.Item>
    {/each}
</Accordion.Root>