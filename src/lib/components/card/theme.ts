import { tv } from 'tailwind-variants'

export const cardTheme = tv({
    slots: {
        root: 'rounded-lg',
        header: 'p-4 sm:px-6',
        body: 'p-4 sm:p-6',
        footer: 'p-4 sm:px-6'
    },
    variants: {
        variant: {
            outline: {
                root: 'bg-white ring ring-secondary-200 divide-y divide-secondary-200'
            }
        }
    },
    defaultVariants: {
        variant: 'outline'
    }
})