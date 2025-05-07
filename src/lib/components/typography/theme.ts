import { tv } from 'tailwind-variants'

export const headingTheme = tv({
    slots: {
        base: 'text-dark-900 dark:text-white',
        label: ''
    },
    variants: {
        tag: {
            h1: 'scroll-m-20 text-4xl font-extrabold text-balance tracking-tight lg:text-5xl',
            h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold text-balance tracking-tight first:mt-0',
            h3: 'scroll-m-20 text-2xl font-semibold text-balance tracking-tight',
            h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
            h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
            h6: 'scroll-m-20 text-base font-semibold tracking-tight',
            p: 'leading-7 [&:not(:first-child)]:mt-6',
            blockquote: 'mt-6 border-l-2 pl-6 italic'
        },
        variant: {
            lead: 'text-xl text-muted-foreground',
            large: 'text-lg font-semibold',
            small: 'text-sm font-medium leading-none',
            muted: 'text-muted'
        }
    },
    defaultVariants: {
        tag: 'h1'
    }
})