import { tv } from 'tailwind-variants';
import { defaultColors } from '../../../themes'
const colors = Object.keys(defaultColors)

export const button = tv ({
	slots: {
		base: ['rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75', 'transition-colors'],
		label: 'truncate',
		leadingIcon: 'shrink-0',
		leadingAvatar: 'shrink-0',
		leadingAvatarSize: '',
		trailingIcon: 'shrink-0'
	},
	variants: {
		color: {
			...Object.fromEntries((colors || []).map((color: string) => [color, ''])),
			neutral: ''
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
	compoundVariants: [...(colors || []).map((color: string) => ({
		color,
		variant: 'solid',
		class: `text-inverted bg-${color} hover:bg-${color}/75 disabled:bg-${color} aria-disabled:bg-${color} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}`
	})), ...(colors || []).map((color: string) => ({
		color,
		variant: 'outline',
		class: `ring ring-inset ring-${color}/50 text-${color} hover:bg-${color}/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-${color}`
	})), ...(colors || []).map((color: string) => ({
		color,
		variant: 'soft',
		class: `text-${color} bg-${color}/10 hover:bg-${color}/15 focus:outline-none focus-visible:bg-${color}/15 disabled:bg-${color}/10 aria-disabled:bg-${color}/10`
	})), ...(colors || []).map((color: string) => ({
		color,
		variant: 'subtle',
		class: `text-${color} ring ring-inset ring-${color}/25 bg-${color}/10 hover:bg-${color}/15 disabled:bg-${color}/10 aria-disabled:bg-${color}/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-${color}`
	})), ...(colors || []).map((color: string) => ({
		color,
		variant: 'ghost',
		class: `text-${color} hover:bg-${color}/10 focus:outline-none focus-visible:bg-${color}/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent`
	})), ...(colors || []).map((color: string) => ({
		color,
		variant: 'link',
		class: `text-${color} hover:text-${color}/75 disabled:text-${color} aria-disabled:text-${color} focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}`
	})), {
		size: 'xs',
		square: true,
		class: 'p-1'
	}, {
		size: 'sm',
		square: true,
		class: 'p-1.5'
	}, {
		size: 'md',
		square: true,
		class: 'p-1.5'
	}, {
		size: 'lg',
		square: true,
		class: 'p-2'
	}, {
		size: 'xl',
		square: true,
		class: 'p-2'
	}, {
		loading: true,
		leading: true,
		class: {
			leadingIcon: 'animate-spin'
		}
	}, {
		loading: true,
		leading: false,
		trailing: true,
		class: {
			trailingIcon: 'animate-spin'
		}
	}],
	defaultVariants: {
		color: 'primary',
		variant: 'solid',
		size: 'md'
	}
})
