import { tv } from 'tailwind-variants'

export const paginationTheme = tv({
    slots: {
        root: '',
        list: 'flex items-center gap-1',
        ellipsis: 'pointer-events-none',
        label: 'min-w-5 text-center',
        prev: '',
        item: '',
        next: ''
    }
})