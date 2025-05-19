import { tv } from 'tailwind-variants'

export const linkTheme = tv({
    slots: {
        base: 'focus-visible:outline-primary'
    },
    variants: {
        active: {
            true: 'text-primary',
            false: 'text-muted'
        },
        disabled: {
            true: 'cursor-not-allowed opacity-75'
        }
    },
    compoundVariants: [{
        active: false,
        disabled: false,
        class: 'hover:text-secondary-700 transition-colors'
    }]
})