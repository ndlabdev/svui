<script lang="ts">
    import '../app.css'
    import { ModeWatcher, toggleMode } from 'mode-watcher'

    let { children } = $props()
</script>

<ModeWatcher lightClassNames={['light']} darkClassNames={['dark']} />
<button onclick={toggleMode}>Toggle Mode</button>

<div data-vaul-drawer-wrapper>
		{@render children()}
</div>
