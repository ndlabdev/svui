import { tv } from 'tailwind-variants'

export const buttonGroupVariant = {
    buttonGroup: {
        horizontal: 'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none',
        vertical: 'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none'
    }
}

export const buttonGroupTheme = tv({
    slots: {
        base: 'relative'
    },
    variants: {
        size: {
            xs: '',
            sm: '',
            md: '',
            lg: '',
            xl: ''
        },
        orientation: {
            horizontal: 'inline-flex -space-x-px',
            vertical: 'flex flex-col -space-y-px'
        }
    }
})