<script lang="ts" module>
    import { tv } from 'tailwind-variants'
    import { colors } from '#themes/colors'
    import { buttonGroupVariant } from '$lib/components/button-group'

    export const buttonTheme = tv({
        slots: {
            base: ['rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75', 'transition-colors'],
            label: 'truncate',
            leadingIcon: 'shrink-0',
            leadingAvatar: 'shrink-0',
            leadingAvatarSize: '',
            trailingIcon: 'shrink-0'
        },
        variants: {
            ...buttonGroupVariant,
            color: {
                ...Object.fromEntries((colors || []).map((color: string) => [color, ''])),
                neutral: ''
            },
            variant: {
                solid: '',
                outline: '',
                soft: '',
                subtle: '',
                ghost: '',
                link: ''
            },
            size: {
                xs: {
                    base: 'px-2 py-1 text-xs gap-1',
                    leadingIcon: 'size-4',
                    leadingAvatarSize: '3xs',
                    trailingIcon: 'size-4'
                },
                sm: {
                    base: 'px-2.5 py-1.5 text-xs gap-1.5',
                    leadingIcon: 'size-4',
                    leadingAvatarSize: '3xs',
                    trailingIcon: 'size-4'
                },
                md: {
                    base: 'px-2.5 py-1.5 text-sm gap-1.5',
                    leadingIcon: 'size-5',
                    leadingAvatarSize: '2xs',
                    trailingIcon: 'size-5'
                },
                lg: {
                    base: 'px-3 py-2 text-sm gap-2',
                    leadingIcon: 'size-5',
                    leadingAvatarSize: '2xs',
                    trailingIcon: 'size-5'
                },
                xl: {
                    base: 'px-3 py-2 text-base gap-2',
                    leadingIcon: 'size-6',
                    leadingAvatarSize: 'xs',
                    trailingIcon: 'size-6'
                }
            },
            block: {
                true: {
                    base: 'w-full justify-center',
                    trailingIcon: 'ms-auto'
                }
            },
            square: {
                true: ''
            },
            leading: {
                true: ''
            },
            trailing: {
                true: ''
            },
            loading: {
                true: ''
            },
            active: {
                true: {
                    base: ''
                },
                false: {
                    base: ''
                }
            }
        },
        compoundVariants: [...(colors || []).map((color: string) => ({
            color,
            variant: 'solid',
            class: `text-inverted bg-${color} hover:bg-${color}/75 disabled:bg-${color} aria-disabled:bg-${color} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}`
        })), ...(colors || []).map((color: string) => ({
            color,
            variant: 'outline',
            class: `ring ring-inset ring-${color}/50 text-${color} hover:bg-${color}/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-${color}`
        })), ...(colors || []).map((color: string) => ({
            color,
            variant: 'soft',
            class: `text-${color} bg-${color}/10 hover:bg-${color}/15 focus:outline-none focus-visible:bg-${color}/15 disabled:bg-${color}/10 aria-disabled:bg-${color}/10`
        })), ...(colors || []).map((color: string) => ({
            color,
            variant: 'subtle',
            class: `text-${color} ring ring-inset ring-${color}/25 bg-${color}/10 hover:bg-${color}/15 disabled:bg-${color}/10 aria-disabled:bg-${color}/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-${color}`
        })), ...(colors || []).map((color: string) => ({
            color,
            variant: 'ghost',
            class: `text-${color} hover:bg-${color}/10 focus:outline-none focus-visible:bg-${color}/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent`
        })), ...(colors || []).map((color: string) => ({
            color,
            variant: 'link',
            class: `text-${color} hover:text-${color}/75 disabled:text-${color} aria-disabled:text-${color} focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}`
        })), {
            color: 'neutral',
            variant: 'solid',
            class: 'text-inverted bg-inverted hover:bg-inverted/90 disabled:bg-inverted aria-disabled:bg-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted'
        }, {
            color: 'neutral',
            variant: 'outline',
            class: 'ring ring-inset ring-accented text-default bg-default hover:bg-elevated disabled:bg-default aria-disabled:bg-default focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted'
        }, {
            color: 'neutral',
            variant: 'soft',
            class: 'text-default bg-elevated hover:bg-accented/75 focus:outline-none focus-visible:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated'
        }, {
            color: 'neutral',
            variant: 'subtle',
            class: 'ring ring-inset ring-accented text-default bg-elevated hover:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted'
        }, {
            color: 'neutral',
            variant: 'ghost',
            class: 'text-default hover:bg-elevated focus:outline-none focus-visible:bg-elevated hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent'
        }, {
            color: 'neutral',
            variant: 'link',
            class: 'text-muted hover:text-default disabled:text-muted aria-disabled:text-muted focus:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-inverted'
        }, {
            size: 'xs',
            square: true,
            class: 'p-1'
        }, {
            size: 'sm',
            square: true,
            class: 'p-1.5'
        }, {
            size: 'md',
            square: true,
            class: 'p-1.5'
        }, {
            size: 'lg',
            square: true,
            class: 'p-2'
        }, {
            size: 'xl',
            square: true,
            class: 'p-2'
        }, {
            loading: true,
            leading: true,
            class: {
                leadingIcon: 'animate-spin'
            }
        }, {
            loading: true,
            leading: false,
            trailing: true,
            class: {
                trailingIcon: 'animate-spin'
            }
        }],
        defaultVariants: {
            color: 'primary',
            variant: 'solid',
            size: 'md'
        }
    })
</script>

<script lang="ts">
    import { Button } from 'bits-ui'
    import { getContext } from 'svelte'
    import { type ButtonProps } from '.'
    import uiConfig from '#uiconfig'
    import { Avatar, type AvatarProps } from '$lib/components/avatar'
    import type { ButtonGroupContext } from '$lib/components/button-group'
    import { Icon } from '$lib/components/icon'
    import { Link } from '$lib/components/link'

    let {
        icon,
        avatar,
        leading,
        leadingIcon,
        trailing,
        trailingIcon,
        loading,
        loadingIcon,
        children,
        label,
        square,
        size,
        color,
        variant,
        type = 'button',
        tag = 'button',
        block,
        href,
        disabled,
        class: className,
        ui,
        ...restProps
    }: ButtonProps = $props()

    const buttonGroup = getContext<ButtonGroupContext>('button-group')

    const isLeading = $derived((icon && leading) || (icon && !trailing) || (loading && !trailing) || !!leadingIcon)
    const isTrailing = $derived((icon && trailing) || (loading && trailing) || !!trailingIcon)

    const leadingIconName = $derived(
        loading ? loadingIcon || uiConfig.icon.loading : loadingIcon || icon
    )

    const trailingIconName = $derived(
        loading && !isLeading ? loadingIcon || uiConfig.icon.loading : trailingIcon || icon
    )

    const uiButton = $derived(
        tv({
            extend: tv(buttonTheme),
            ...uiConfig.ui?.button || {}
        })({
            color,
            variant,
            size: size || buttonGroup?.size,
            buttonGroup: buttonGroup?.orientation,
            loading,
            leading: isLeading,
            trailing: isTrailing,
            block,
            square: square || (!children && !label)
        })
    )

    const uiBase = $derived(uiButton.base({
        class: [className?.toString(), ui?.base]
    }))

    const uiLabel = $derived(uiButton.label({
        class: ui?.label
    }))

    const uiLeadingIcon = $derived(uiButton.leadingIcon({
        class: ui?.leadingIcon
    }))

    const uiTrailingIcon = $derived(uiButton.trailingIcon({
        class: ui?.trailingIcon
    }))

    const uiAvatar = $derived(uiButton.leadingAvatarSize({
        class: ui?.leadingAvatar
    }))

    const uiAvatarSize = $derived((ui?.leadingAvatarSize || uiButton.leadingAvatarSize()) as AvatarProps['size'])
</script>

{#snippet buttonSlots()}
    {#if isLeading && leadingIconName}
        <Icon name={leadingIconName} class={uiLeadingIcon} />
    {:else if !!avatar}
        <Avatar size={uiAvatarSize} class={uiAvatar} {...avatar} />
    {/if}

    {#if children}
        {@render children?.()}
    {:else}
        {#if label}
            <span class="{uiLabel}">{label}</span>
        {/if}
    {/if}

    {#if isTrailing && trailingIconName}
        <Icon name={trailingIconName} class={uiTrailingIcon} />
    {/if}
{/snippet}

{#if href}
    <Link {href} {disabled} class={uiBase} {...restProps}>
        {@render buttonSlots?.()}
    </Link>
{:else if tag === 'button'}
    <Button.Root
        {type}
        disabled={disabled || loading}
        class={uiBase}
        {...restProps}
    >
        {@render buttonSlots?.()}
    </Button.Root>
{/if}
