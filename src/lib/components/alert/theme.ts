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
            danger: '',
            warning: '',
            info: '',
            muted: ''
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
                root: 'bg-primary text-white'
            }
        },
        {
            color: 'secondary',
            variant: 'solid',
            class: {
                root: 'bg-secondary text-white'
            }
        },
        {
            color: 'success',
            variant: 'solid',
            class: {
                root: 'bg-success text-white'
            }
        },
        {
            color: 'danger',
            variant: 'solid',
            class: {
                root: 'bg-danger text-white'
            }
        },
        {
            color: 'warning',
            variant: 'solid',
            class: {
                root: 'bg-warning text-white'
            }
        },
        {
            color: 'info',
            variant: 'solid',
            class: {
                root: 'bg-info text-white'
            }
        },
        {
            color: 'muted',
            variant: 'solid',
            class: {
                root: 'bg-muted text-white'
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
            color: 'danger',
            variant: 'outline',
            class: {
                root: 'text-danger ring ring-inset ring-danger/25'
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
            color: 'muted',
            variant: 'outline',
            class: {
                root: 'text-muted ring ring-inset ring-muted/25'
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
            color: 'danger',
            variant: 'soft',
            class: {
                root: 'bg-danger/10 text-danger'
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
            color: 'muted',
            variant: 'soft',
            class: {
                root: 'bg-muted/10 text-muted'
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
            color: 'danger',
            variant: 'subtle',
            class: {
                root: 'bg-danger/10 text-danger ring ring-inset ring-danger/25'
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
            color: 'muted',
            variant: 'subtle',
            class: {
                root: 'bg-muted/10 text-muted ring ring-inset ring-muted/25'
            }
        }
    ],
    defaultVariants: {
        color: 'primary',
        variant: 'solid'
    }
})