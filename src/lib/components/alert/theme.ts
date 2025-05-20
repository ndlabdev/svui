import { tv } from 'tailwind-variants'

export const alertTheme = tv({
    slots: {
        root: 'relative overflow-hidden w-full rounded-lg p-4 flex gap-2.5',
        wrapper: 'min-w-0 flex-1 flex flex-col',
        title: 'text-sm font-medium',
        description: 'text-sm opacity-90',
        icon: 'shrink-0 size-5',
        avatar: 'shrink-0',
        avatarSize: '2xl',
        actions: 'flex flex-wrap gap-1.5 shrink-0',
        close: 'p-0'
    },
    variants: {
        color: {
            primary: '',
            secondary: '',
            success: '',
            error: '',
            warning: '',
            info: '',
            neutral: ''
        },
        variant: {
            solid: '',
            outline: '',
            soft: '',
            subtle: ''
        },
        orientation: {
            horizontal: {
                root: 'items-center',
                actions: 'items-center'
            },
            vertical: {
                root: 'items-start',
                actions: 'items-start mt-2.5'
            }
        },
        title: {
            true: {
                description: 'mt-1'
            }
        }
    },
    compoundVariants: [
        {
            color: 'primary',
            variant: 'solid',
            class: {
                root: 'bg-primary text-inverted'
            }
        },
        {
            color: 'secondary',
            variant: 'solid',
            class: {
                root: 'bg-secondary text-inverted'
            }
        },
        {
            color: 'success',
            variant: 'solid',
            class: {
                root: 'bg-success text-inverted'
            }
        },
        {
            color: 'error',
            variant: 'solid',
            class: {
                root: 'bg-error text-inverted'
            }
        },
        {
            color: 'warning',
            variant: 'solid',
            class: {
                root: 'bg-warning text-inverted'
            }
        },
        {
            color: 'info',
            variant: 'solid',
            class: {
                root: 'bg-info text-inverted'
            }
        },
        {
            color: 'neutral',
            variant: 'solid',
            class: {
                root: 'text-inverted bg-inverted'
            }
        },
        {
            color: 'primary',
            variant: 'outline',
            class: {
                root: 'text-primary ring ring-inset ring-primary/25'
            }
        },
        {
            color: 'secondary',
            variant: 'outline',
            class: {
                root: 'text-secondary ring ring-inset ring-secondary/25'
            }
        },
        {
            color: 'success',
            variant: 'outline',
            class: {
                root: 'text-success ring ring-inset ring-success/25'
            }
        },
        {
            color: 'error',
            variant: 'outline',
            class: {
                root: 'text-error ring ring-inset ring-error/25'
            }
        },
        {
            color: 'warning',
            variant: 'outline',
            class: {
                root: 'text-warning ring ring-inset ring-warning/25'
            }
        },
        {
            color: 'info',
            variant: 'outline',
            class: {
                root: 'text-info ring ring-inset ring-info/25'
            }
        },
        {
            color: 'neutral',
            variant: 'outline',
            class: {
                root: 'text-highlighted bg-default ring ring-inset ring-default'
            }
        },
        {
            color: 'primary',
            variant: 'soft',
            class: {
                root: 'bg-primary/10 text-primary'
            }
        },
        {
            color: 'secondary',
            variant: 'soft',
            class: {
                root: 'bg-secondary/10 text-secondary'
            }
        },
        {
            color: 'success',
            variant: 'soft',
            class: {
                root: 'bg-success/10 text-success'
            }
        },
        {
            color: 'error',
            variant: 'soft',
            class: {
                root: 'bg-error/10 text-error'
            }
        },
        {
            color: 'warning',
            variant: 'soft',
            class: {
                root: 'bg-warning/10 text-warning'
            }
        },
        {
            color: 'info',
            variant: 'soft',
            class: {
                root: 'bg-info/10 text-info'
            }
        },
        {
            color: 'neutral',
            variant: 'soft',
            class: {
                root: 'text-highlighted bg-elevated/50'
            }
        },
        {
            color: 'primary',
            variant: 'subtle',
            class: {
                root: 'bg-primary/10 text-primary ring ring-inset ring-primary/25'
            }
        },
        {
            color: 'secondary',
            variant: 'subtle',
            class: {
                root: 'bg-secondary/10 text-secondary ring ring-inset ring-secondary/25'
            }
        },
        {
            color: 'success',
            variant: 'subtle',
            class: {
                root: 'bg-success/10 text-success ring ring-inset ring-success/25'
            }
        },
        {
            color: 'error',
            variant: 'subtle',
            class: {
                root: 'bg-error/10 text-error ring ring-inset ring-error/25'
            }
        },
        {
            color: 'warning',
            variant: 'subtle',
            class: {
                root: 'bg-warning/10 text-warning ring ring-inset ring-warning/25'
            }
        },
        {
            color: 'info',
            variant: 'subtle',
            class: {
                root: 'bg-info/10 text-info ring ring-inset ring-info/25'
            }
        },
        {
            color: 'neutral',
            variant: 'subtle',
            class: {
                root: 'text-highlighted bg-elevated/50 ring ring-inset ring-accented'
            }
        }
    ],
    defaultVariants: {
        color: 'primary',
        variant: 'solid'
    }
})