<script>
    import Loader from '@lucide/svelte/icons/loader'
    import Activity from '@lucide/svelte/icons/activity'

    import Button from '$lib/components/button/Button.svelte'
</script>

<div class="grid grid-cols-12 gap-2">
    <div class="col-span-3">
        <Button label="Primary Label" />
    </div>

    <div class="col-span-3">
        <Button label="Primary Disabled" color="danger" disabled />
    </div>

    <div class="col-span-3">
        <Button>Primary</Button>
    </div>

    <div class="col-span-3">
        <Button variant="outline" color="danger">Outline Danger</Button>
    </div>

    <div class="col-span-3">
        <Button variant="ghost" color="success">Ghost Success</Button>
    </div>

    <div class="col-span-3">
        <Button size="md" leading={Activity} label="With Icon Left" />
    </div>

    <div class="col-span-3">
        <Button size="md" trailing={Activity} label="With Icon Right" />
    </div>

    <div class="col-span-3">
        <Button href="https://svelte.dev" target="_blank">Link Button</Button>
    </div>

    <div class="col-span-3">
        <Button loading>Loading</Button>
    </div>

    <div class="col-span-3">
        <Button loading label="Waiting..." />
    </div>

    <div class="col-span-3">
        <Button loading label="Waiting..." loadingIcon={Loader} />
    </div>

    <div class="col-span-3">
        <Button label="Button block" block />
    </div>
</div>