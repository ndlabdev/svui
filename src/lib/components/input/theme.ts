import { tv } from 'tailwind-variants'
import { buttonGroupVariantWithRoot } from '$lib/components/button-group'

export const inputTheme = tv({
    slots: {
        root: 'relative inline-flex items-center',
        base: ['w-full rounded-md border-0 placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors'],
        leading: 'absolute inset-y-0 start-0 flex items-center',
        leadingIcon: 'shrink-0 text-dimmed',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailing: 'absolute inset-y-0 end-0 flex items-center',
        trailingIcon: 'shrink-0 text-dimmed'
    },
    variants: {
        ...buttonGroupVariantWithRoot,
        size: {
            xs: {
                base: 'px-2 py-1 text-xs gap-1',
                leading: 'ps-2',
                trailing: 'pe-2',
                leadingIcon: 'size-4',
                leadingAvatarSize: '3xs',
                trailingIcon: 'size-4'
            },
            sm: {
                base: 'px-2.5 py-1.5 text-xs gap-1.5',
                leading: 'ps-2.5',
                trailing: 'pe-2.5',
                leadingIcon: 'size-4',
                leadingAvatarSize: '3xs',
                trailingIcon: 'size-4'
            },
            md: {
                base: 'px-2.5 py-1.5 text-sm gap-1.5',
                leading: 'ps-2.5',
                trailing: 'pe-2.5',
                leadingIcon: 'size-5',
                leadingAvatarSize: '2xs',
                trailingIcon: 'size-5'
            },
            lg: {
                base: 'px-3 py-2 text-sm gap-2',
                leading: 'ps-3',
                trailing: 'pe-3',
                leadingIcon: 'size-5',
                leadingAvatarSize: '2xs',
                trailingIcon: 'size-5'
            },
            xl: {
                base: 'px-3 py-2 text-base gap-2',
                leading: 'ps-3',
                trailing: 'pe-3',
                leadingIcon: 'size-6',
                leadingAvatarSize: 'xs',
                trailingIcon: 'size-6'
            }
        },
        variant: {
            outline: 'text-highlighted bg-default ring ring-inset ring-accented',
            soft: 'text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50',
            subtle: 'text-highlighted bg-elevated ring ring-inset ring-accented',
            ghost: 'text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
            none: 'text-highlighted bg-transparent'
        },
        color: {
            primary: '',
            secondary: '',
            success: '',
            info: '',
            warning: '',
            error: '',
            neutral: ''
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
        highlight: {
            true: ''
        },
        type: {
            file: 'file:me-1.5 file:font-medium file:text-muted file:outline-none'
        }
    },
    compoundVariants: [
        {
            color: 'primary',
            variant: [
                'outline',
                'subtle'
            ],
            class: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary'
        },
        {
            color: 'secondary',
            variant: [
                'outline',
                'subtle'
            ],
            class: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary'
        },
        {
            color: 'success',
            variant: [
                'outline',
                'subtle'
            ],
            class: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success'
        },
        {
            color: 'info',
            variant: [
                'outline',
                'subtle'
            ],
            class: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info'
        },
        {
            color: 'warning',
            variant: [
                'outline',
                'subtle'
            ],
            class: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning'
        },
        {
            color: 'error',
            variant: [
                'outline',
                'subtle'
            ],
            class: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error'
        },
        {
            color: 'neutral',
            variant: [
                'outline',
                'subtle'
            ],
            class: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral'
        },
        {
            color: 'primary',
            highlight: true,
            class: 'ring ring-inset ring-primary'
        },
        {
            color: 'secondary',
            highlight: true,
            class: 'ring ring-inset ring-secondary'
        },
        {
            color: 'success',
            highlight: true,
            class: 'ring ring-inset ring-success'
        },
        {
            color: 'info',
            highlight: true,
            class: 'ring ring-inset ring-info'
        },
        {
            color: 'warning',
            highlight: true,
            class: 'ring ring-inset ring-warning'
        },
        {
            color: 'error',
            highlight: true,
            class: 'ring ring-inset ring-error'
        },
        {
            color: 'neutral',
            highlight: true,
            class: 'ring ring-inset ring-neutral'
        }
        , {
            color: 'neutral',
            variant: ['outline', 'subtle'],
            class: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted'
        }, {
            color: 'neutral',
            highlight: true,
            class: 'ring ring-inset ring-inverted'
        }, {
            leading: true,
            size: 'xs',
            class: 'ps-7'
        }, {
            leading: true,
            size: 'sm',
            class: 'ps-8'
        }, {
            leading: true,
            size: 'md',
            class: 'ps-9'
        }, {
            leading: true,
            size: 'lg',
            class: 'ps-10'
        }, {
            leading: true,
            size: 'xl',
            class: 'ps-11'
        }, {
            trailing: true,
            size: 'xs',
            class: 'pe-7'
        }, {
            trailing: true,
            size: 'sm',
            class: 'pe-8'
        }, {
            trailing: true,
            size: 'md',
            class: 'pe-9'
        }, {
            trailing: true,
            size: 'lg',
            class: 'pe-10'
        }, {
            trailing: true,
            size: 'xl',
            class: 'pe-11'
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
        size: 'md',
        color: 'primary',
        variant: 'outline'
    }
})