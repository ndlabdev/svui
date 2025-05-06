<script>
    import Loader from '@lucide/svelte/icons/loader'
    import Activity from '@lucide/svelte/icons/activity'

    import Button from '$lib/components/button/Button.svelte'
</script>

<div class="flex m-4 gap-2">
    <Button label="Primary Label" />
    <Button label="Primary Disabled" color="danger" disabled />
    <Button>Primary</Button>
    <Button variant="outline" color="danger">Outline Danger</Button>
    <Button variant="ghost" color="success">Ghost Success</Button>
    <Button size="md">
        {#snippet leading()}
            <Loader class="animate-spin" />
        {/snippet}

        With Icon Left
    </Button>

    <Button size="md">
        {#snippet trailing()}
            <Activity />
        {/snippet}

        With Icon Right
    </Button>
    <Button href="https://svelte.dev" target="_blank">Link Button</Button>
    <Button loading>Loading</Button>
</div>
