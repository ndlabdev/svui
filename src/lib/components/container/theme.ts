import { tv } from 'tailwind-variants'

export const containerTheme = tv({
    slots: {
		base: 'w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8'
	}
})