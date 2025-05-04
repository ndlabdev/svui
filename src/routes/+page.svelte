<script>
	import Button from '$lib/components/button/Button.svelte';
	const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>`;
</script>

<div class="flex flex-col gap-4">
	<Button label="Primary Label">Primary Label</Button>
	<Button>Primary</Button>
	<Button variant="outline" color="danger">Outline Danger</Button>
	<Button variant="ghost" color="success">Ghost Success</Button>
	<Button size="lg" iconLeft={arrowIcon}>With Icon Left</Button>
	<Button iconRight={arrowIcon}>Icon Right</Button>
	<Button as="a" href="https://svelte.dev" target="_blank">Link Button</Button>
	<Button loading={true}>Loading</Button>
</div>