import { tv } from 'tailwind-variants'

export const tooltipTheme = tv({
    slots: {
        content: 'flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2 py-1 text-xs select-none data-[state=delayed-open]:animate-scale-in data-[state=closed]:animate-scale-out pointer-events-auto',
        arrow: 'text-(--ui-border)',
        text: 'truncate'
    }
})