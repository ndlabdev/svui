import { tv } from 'tailwind-variants'

export const buttonTheme = tv({
    slots: {
        base: 'rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors',
        label: 'truncate',
        leadingIcon: 'shrink-0',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailingIcon: 'shrink-0'
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
    compoundVariants: [
        {
            color: 'primary',
            variant: 'solid',
            class: 'text-white bg-primary hover:bg-primary/75 disabled:bg-primary aria-disabled:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
        },
        {
            color: 'secondary',
            variant: 'solid',
            class: 'text-white bg-secondary hover:bg-secondary/75 disabled:bg-secondary aria-disabled:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary'
        },
        {
            color: 'success',
            variant: 'solid',
            class: 'text-white bg-success hover:bg-success/75 disabled:bg-success aria-disabled:bg-success focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success'
        },
        {
            color: 'danger',
            variant: 'solid',
            class: 'text-white bg-danger hover:bg-danger/75 disabled:bg-danger aria-disabled:bg-danger focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-danger'
        },
        {
            color: 'warning',
            variant: 'solid',
            class: 'text-white bg-warning hover:bg-warning/75 disabled:bg-warning aria-disabled:bg-warning focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning'
        },
        {
            color: 'info',
            variant: 'solid',
            class: 'text-white bg-info hover:bg-info/75 disabled:bg-info aria-disabled:bg-info focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info'
        },
        {
            color: 'muted',
            variant: 'solid',
            class: 'text-white bg-muted hover:bg-muted/75 disabled:bg-muted aria-disabled:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted'
        },
        {
            color: 'primary',
            variant: 'outline',
            class: 'ring ring-inset ring-primary/50 text-primary hover:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
        },
        {
            color: 'secondary',
            variant: 'outline',
            class: 'ring ring-inset ring-secondary/50 text-secondary hover:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary'
        },
        {
            color: 'success',
            variant: 'outline',
            class: 'ring ring-inset ring-success/50 text-success hover:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-success'
        },
        {
            color: 'danger',
            variant: 'outline',
            class: 'ring ring-inset ring-danger/50 text-danger hover:bg-danger/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-danger'
        },
        {
            color: 'warning',
            variant: 'outline',
            class: 'ring ring-inset ring-warning/50 text-warning hover:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-warning'
        },
        {
            color: 'info',
            variant: 'outline',
            class: 'ring ring-inset ring-info/50 text-info hover:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-info'
        },
        {
            color: 'muted',
            variant: 'outline',
            class: 'ring ring-inset ring-muted/50 text-muted hover:bg-muted/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-muted'
        },
        {
            color: 'primary',
            variant: 'soft',
            class: 'text-primary bg-primary/10 hover:bg-primary/15 focus:outline-none focus-visible:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10'
        },
        {
            color: 'secondary',
            variant: 'soft',
            class: 'text-secondary bg-secondary/10 hover:bg-secondary/15 focus:outline-none focus-visible:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10'
        },
        {
            color: 'success',
            variant: 'soft',
            class: 'text-success bg-success/10 hover:bg-success/15 focus:outline-none focus-visible:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10'
        },
        {
            color: 'danger',
            variant: 'soft',
            class: 'text-danger bg-danger/10 hover:bg-danger/15 focus:outline-none focus-visible:bg-danger/15 disabled:bg-danger/10 aria-disabled:bg-danger/10'
        },
        {
            color: 'warning',
            variant: 'soft',
            class: 'text-warning bg-warning/10 hover:bg-warning/15 focus:outline-none focus-visible:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10'
        },
        {
            color: 'info',
            variant: 'soft',
            class: 'text-info bg-info/10 hover:bg-info/15 focus:outline-none focus-visible:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10'
        },
        {
            color: 'muted',
            variant: 'soft',
            class: 'text-muted bg-muted/10 hover:bg-muted/15 focus:outline-none focus-visible:bg-muted/15 disabled:bg-muted/10 aria-disabled:bg-muted/10'
        },
        {
            color: 'primary',
            variant: 'subtle',
            class: 'text-primary ring ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
        },
        {
            color: 'secondary',
            variant: 'subtle',
            class: 'text-secondary ring ring-inset ring-secondary/25 bg-secondary/10 hover:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary'
        },
        {
            color: 'success',
            variant: 'subtle',
            class: 'text-success ring ring-inset ring-success/25 bg-success/10 hover:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-success'
        },
        {
            color: 'danger',
            variant: 'subtle',
            class: 'text-danger ring ring-inset ring-danger/25 bg-danger/10 hover:bg-danger/15 disabled:bg-danger/10 aria-disabled:bg-danger/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-danger'
        },
        {
            color: 'warning',
            variant: 'subtle',
            class: 'text-warning ring ring-inset ring-warning/25 bg-warning/10 hover:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-warning'
        },
        {
            color: 'info',
            variant: 'subtle',
            class: 'text-info ring ring-inset ring-info/25 bg-info/10 hover:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-info'
        },
        {
            color: 'muted',
            variant: 'subtle',
            class: 'text-muted ring ring-inset ring-muted/25 bg-muted/10 hover:bg-muted/15 disabled:bg-muted/10 aria-disabled:bg-muted/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-muted'
        },
        {
            color: 'primary',
            variant: 'ghost',
            class: 'text-primary hover:bg-primary/10 focus:outline-none focus-visible:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
        },
        {
            color: 'secondary',
            variant: 'ghost',
            class: 'text-secondary hover:bg-secondary/10 focus:outline-none focus-visible:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
        },
        {
            color: 'success',
            variant: 'ghost',
            class: 'text-success hover:bg-success/10 focus:outline-none focus-visible:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
        },
        {
            color: 'danger',
            variant: 'ghost',
            class: 'text-danger hover:bg-danger/10 focus:outline-none focus-visible:bg-danger/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
        },
        {
            color: 'warning',
            variant: 'ghost',
            class: 'text-warning hover:bg-warning/10 focus:outline-none focus-visible:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
        },
        {
            color: 'info',
            variant: 'ghost',
            class: 'text-info hover:bg-info/10 focus:outline-none focus-visible:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
        },
        {
            color: 'muted',
            variant: 'ghost',
            class: 'text-muted hover:bg-muted/10 focus:outline-none focus-visible:bg-muted/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
        },
        {
            color: 'primary',
            variant: 'link',
            class: 'text-primary hover:text-primary/75 disabled:text-primary aria-disabled:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary'
        },
        {
            color: 'secondary',
            variant: 'link',
            class: 'text-secondary hover:text-secondary/75 disabled:text-secondary aria-disabled:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary'
        },
        {
            color: 'success',
            variant: 'link',
            class: 'text-success hover:text-success/75 disabled:text-success aria-disabled:text-success focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success'
        },
        {
            color: 'danger',
            variant: 'link',
            class: 'text-danger hover:text-danger/75 disabled:text-danger aria-disabled:text-danger focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-danger'
        },
        {
            color: 'warning',
            variant: 'link',
            class: 'text-warning hover:text-warning/75 disabled:text-warning aria-disabled:text-warning focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning'
        },
        {
            color: 'info',
            variant: 'link',
            class: 'text-info hover:text-info/75 disabled:text-info aria-disabled:text-info focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info'
        },
        {
            color: 'muted',
            variant: 'link',
            class: 'text-muted hover:text-muted/75 disabled:text-muted aria-disabled:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-muted'
        },
        {
            size: 'xs',
            square: true,
            class: 'p-1'
        },
        {
            size: 'sm',
            square: true,
            class: 'p-1.5'
        },
        {
            size: 'md',
            square: true,
            class: 'p-1.5'
        },
        {
            size: 'lg',
            square: true,
            class: 'p-2'
        },
        {
            size: 'xl',
            square: true,
            class: 'p-2'
        },
        {
            loading: true,
            leading: true,
            class: {
                leadingIcon: 'animate-spin'
            }
        },
        {
            loading: true,
            leading: false,
            trailing: true,
            class: {
                trailingIcon: 'animate-spin'
            }
        }
    ],
    defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'md'
    }
})
