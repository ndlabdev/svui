<script lang="ts">
    import { tv } from 'tailwind-variants'
    import { type AlertProps, alertTheme } from '.'
    import uiConfig from '#uiconfig'
    import { Avatar, type AvatarProps } from '$lib/components/avatar'
    import { Button } from '$lib/components/button'
    import { Icon } from '$lib/components/icon'

    const {
        as = 'div',
        title,
        description,
        avatar,
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

    const uiAlert = $derived(
        tv({
            extend: tv(alertTheme),
            ...(uiConfig?.ui?.alert || {})
        })({
            color,
            variant,
            orientation,
            title: !!title || !!slotTitle
        })
    )

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

    const uiAvatar = $derived(uiAlert.avatarSize({
        class: ui?.avatar
    }))

    const uiAvatarSize = $derived((ui?.avatarSize || uiAlert.avatarSize()) as AvatarProps['size'])
</script>

<svelte:element this={as} data-orientation={orientation} class={uiRoot}>
    {#if slotLeading}
        {@render slotLeading?.()}
    {:else}
        {#if icon}
            <Icon name={icon} class={uiIcon} />
        {:else if !!avatar}
            <Avatar size={uiAvatarSize} class={uiAvatar} {...avatar} />
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
                        leading
                        leadingIcon={closeIcon || 'lucide:x'}
                        class={uiClose}
                    />
                {/if}
            {/if}
        </div>
    {/if}
</svelte:element>