<script>
    import { Button } from '$lib/components/button/index.js'
    import Link from '$lib/components/link/Link.svelte'
</script>

<div class="grid grid-cols-12">
    <div class="col-span-12">
        <Link href="/">
            Home
        </Link>

        <Link href="/about">
            About
        </Link>

        <Button label="Label" />
    </div>
</div>