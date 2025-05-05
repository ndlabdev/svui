<script>
    import Loader from '@lucide/svelte/icons/loader'
    import Button from '../lib/components/button/Button.svelte'
</script>

<div class="flex m-4 gap-2">
    <Button label="Primary Label" />
    <Button>Primary</Button>
    <Button variant="outline" color="danger">Outline Danger</Button>
    <Button variant="ghost" color="success">Ghost Success</Button>
    <Button size="lg">
        <Loader slot="leading" />
        With Icon Left
    </Button>
    <Button href="https://svelte.dev" target="_blank">Link Button</Button>
    <Button loading={true}>Loading</Button>
</div>
