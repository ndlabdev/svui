<script>
	export let as = 'button';
	export let href = '';
	export let type = 'button';
	export let variant = 'solid';
	export let size = 'md';
	export let color = 'primary';
	export let disabled = false;
	export let loading = false;
	export let iconLeft = null;
	export let iconRight = null;


	const base = `inline-flex items-center justify-center font-medium rounded-xl transition-all duration-150 whitespace-nowrap`;

	const variants = {
		solid: {
			primary: 'bg-primary-600 hover:bg-primary-700 text-white dark:bg-primary-500 dark:hover:bg-primary-600',
			danger: 'bg-red-600 hover:bg-red-700 text-white dark:bg-red-500 dark:hover:bg-red-600',
			success: 'bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600'
		},
		outline: {
			primary: 'border border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-900/20',
			danger: 'border border-red-600 text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-300 dark:hover:bg-red-900/20',
			success: 'border border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-300 dark:hover:bg-green-900/20'
		},
		ghost: {
			primary: 'text-blue-600 hover:bg-blue-50 dark:text-blue-300 dark:hover:bg-blue-900/20',
			danger: 'text-red-600 hover:bg-red-50 dark:text-red-300 dark:hover:bg-red-900/20',
			success: 'text-green-600 hover:bg-green-50 dark:text-green-300 dark:hover:bg-green-900/20'
		}
	};

	const sizes = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-5 py-2.5 text-lg'
	};

	const classes = `${base} ${variants[variant][color]} ${sizes[size]} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}`;
</script>

{#if as === 'a'}
	<a
		href={href}
		class={classes}
		aria-disabled={disabled || loading}
	>
		{#if loading}
			<svg class="animate-spin h-4 w-4 mr-2 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
				<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
			</svg>
		{/if}

		{#if iconLeft}
			<span class="mr-2" use:html>{@html iconLeft}</span>
		{/if}

		<slot />

		{#if iconRight}
			<span class="ml-2" use:html>{@html iconRight}</span>
		{/if}
	</a>
{:else}
	<button
		type={type}
		class={classes}
		disabled={disabled || loading}
	>
		{#if loading}
			<svg class="animate-spin h-4 w-4 mr-2 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
				<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
			</svg>
		{/if}

		{#if iconLeft}
			<span class="mr-2" use:html>{@html iconLeft}</span>
		{/if}

		<slot />

		{#if iconRight}
			<span class="ml-2" use:html>{@html iconRight}</span>
		{/if}
	</button>
{/if}
