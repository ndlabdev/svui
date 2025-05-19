import { tv } from 'tailwind-variants'

export const badgeTheme = tv({
    slots: {
        base: 'font-medium inline-flex items-center',
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
            subtle: ''
        },
        size: {
            xs: {
                base: 'text-[8px]/3 px-1 py-0.5 gap-1 rounded-sm',
                leadingIcon: 'size-3',
                leadingAvatarSize: '3xs',
                trailingIcon: 'size-3'
            },
            sm: {
                base: 'text-[10px]/3 px-1.5 py-1 gap-1 rounded-sm',
                leadingIcon: 'size-3',
                leadingAvatarSize: '3xs',
                trailingIcon: 'size-3'
            },
            md: {
                base: 'text-xs px-2 py-1 gap-1 rounded-md',
                leadingIcon: 'size-4',
                leadingAvatarSize: '3xs',
                trailingIcon: 'size-4'
            },
            lg: {
                base: 'text-sm px-2 py-1 gap-1.5 rounded-md',
                leadingIcon: 'size-5',
                leadingAvatarSize: '2xs',
                trailingIcon: 'size-5'
            },
            xl: {
                base: 'text-base px-2.5 py-1 gap-1.5 rounded-md',
                leadingIcon: 'size-6',
                leadingAvatarSize: '2xs',
                trailingIcon: 'size-6'
            }
        },
        square: {
            true: ''
        }
    },
    compoundVariants: [
        {
            color: 'primary',
            variant: 'solid',
            class: 'bg-primary text-white'
        },
        {
            color: 'secondary',
            variant: 'solid',
            class: 'bg-secondary text-white'
        },
        {
            color: 'success',
            variant: 'solid',
            class: 'bg-success text-white'
        },
        {
            color: 'danger',
            variant: 'solid',
            class: 'bg-danger text-white'
        },
        {
            color: 'warning',
            variant: 'solid',
            class: 'bg-warning text-white'
        },
        {
            color: 'info',
            variant: 'solid',
            class: 'bg-info text-white'
        },
        {
            color: 'muted',
            variant: 'solid',
            class: 'bg-muted text-white'
        },
        {
            color: 'primary',
            variant: 'outline',
            class: 'text-primary ring ring-inset ring-primary/50'
        },
        {
            color: 'secondary',
            variant: 'outline',
            class: 'text-secondary ring ring-inset ring-secondary/50'
        },
        {
            color: 'success',
            variant: 'outline',
            class: 'text-success ring ring-inset ring-success/50'
        },
        {
            color: 'danger',
            variant: 'outline',
            class: 'text-danger ring ring-inset ring-danger/50'
        },
        {
            color: 'warning',
            variant: 'outline',
            class: 'text-warning ring ring-inset ring-warning/50'
        },
        {
            color: 'info',
            variant: 'outline',
            class: 'text-info ring ring-inset ring-info/50'
        },
        {
            color: 'muted',
            variant: 'outline',
            class: 'text-muted ring ring-inset ring-muted/50'
        },
        {
            color: 'primary',
            variant: 'soft',
            class: 'bg-primary/10 text-primary'
        },
        {
            color: 'secondary',
            variant: 'soft',
            class: 'bg-secondary/10 text-secondary'
        },
        {
            color: 'success',
            variant: 'soft',
            class: 'bg-success/10 text-success'
        },
        {
            color: 'danger',
            variant: 'soft',
            class: 'bg-danger/10 text-danger'
        },
        {
            color: 'warning',
            variant: 'soft',
            class: 'bg-warning/10 text-warning'
        },
        {
            color: 'info',
            variant: 'soft',
            class: 'bg-info/10 text-info'
        },
        {
            color: 'muted',
            variant: 'soft',
            class: 'bg-muted/10 text-muted'
        },
        {
            color: 'primary',
            variant: 'subtle',
            class: 'bg-primary/10 text-primary ring ring-inset ring-primary/25'
        },
        {
            color: 'secondary',
            variant: 'subtle',
            class: 'bg-secondary/10 text-secondary ring ring-inset ring-secondary/25'
        },
        {
            color: 'success',
            variant: 'subtle',
            class: 'bg-success/10 text-success ring ring-inset ring-success/25'
        },
        {
            color: 'danger',
            variant: 'subtle',
            class: 'bg-danger/10 text-danger ring ring-inset ring-danger/25'
        },
        {
            color: 'warning',
            variant: 'subtle',
            class: 'bg-warning/10 text-warning ring ring-inset ring-warning/25'
        },
        {
            color: 'info',
            variant: 'subtle',
            class: 'bg-info/10 text-info ring ring-inset ring-info/25'
        },
        {
            color: 'muted',
            variant: 'subtle',
            class: 'bg-muted/10 text-muted ring ring-inset ring-muted/25'
        },
        {
            size: 'xs',
            square: true,
            class: 'p-0.5'
        },
        {
            size: 'sm',
            square: true,
            class: 'p-1'
        },
        {
            size: 'md',
            square: true,
            class: 'p-1'
        },
        {
            size: 'lg',
            square: true,
            class: 'p-1'
        },
        {
            size: 'xl',
            square: true,
            class: 'p-1'
        }
    ],
    defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'md'
    }
})