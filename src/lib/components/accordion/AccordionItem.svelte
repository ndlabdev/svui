<script lang="ts">
    import { Accordion } from 'bits-ui'
    import { slide } from 'svelte/transition'
    import uiConfig from '#uiconfig'
    import { Icon } from '$lib/components/icon'

    const {
        children,
        child,
        slotItem,
        item,
        index,
        forceMount,
        leading,
        uiItem,
        uiHeader,
        uiTrigger,
        uiLeadingIcon,
        uiLabel,
        uiTrailingIcon,
        uiContent,
        uiBody,
        trailingIcon
    } = $props()

    console.log(children,
        child, slotItem)
</script>

<Accordion.Item
    value={item.slot || item.value || String(index)}
    disabled={item.disabled}
    class={uiItem}
>
    <Accordion.Header class={uiHeader}>
        <Accordion.Trigger class={uiTrigger(item.disabled)}>
            {#if leading}
                {@render leading?.()}
            {:else}
                {#if item.icon}
                    <Icon name={item.icon} class={uiLeadingIcon} />
                {/if}
            {/if}

            <span class={uiLabel}>{item.label}</span>

            <Icon name={item.trailingIcon || trailingIcon || uiConfig.icon.chevronDown} class={uiTrailingIcon} />
        </Accordion.Trigger>
    </Accordion.Header>

    {#if forceMount}
        <Accordion.Content {forceMount} class={uiContent}>
            {#snippet child({ props, open })}
                {#if open}
                    <div {...props} transition:slide={{ duration: 200 }}>
                        <div class={uiBody}>
                            {#if item.value}
                                {@render child?.(item)}
                            {:else}
                                {item.content}
                            {/if}
                        </div>
                    </div>
                {/if}
            {/snippet}
        </Accordion.Content>
    {:else}
        <Accordion.Content {forceMount} class={uiContent}>
            <div class={uiBody}>
                {#if item.slot}
                    {@render slotItem?.(item)}
                {:else}
                    {item.content}
                {/if}
            </div>
        </Accordion.Content>
    {/if}
</Accordion.Item>
