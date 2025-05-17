<script>
    import Link from '$lib/components/link/Link.svelte'
</script>

<div class="grid grid-cols-12">
    <div class="col-span-12">
        <!--        <Link href="/" exactQuery raw class="text-2xl" activeClass="font-bold" inactiveClass="text-muted">-->
        <!--            Home-->
        <!--        </Link>-->

        <!--        <Link href="/about?type=1&search=2" exactQuery raw class="text-2xl" activeClass="font-bold" inactiveClass="text-muted">-->
        <!--            About-->
        <!--        </Link>-->

        <Link href="/">
            Home
        </Link>

        <Link href="/about?type=1&search=2" exactQuery>
            About
        </Link>
    </div>
</div>