<script lang="ts">
    import '../app.css'
    import { Tooltip } from 'bits-ui'
    import { ModeWatcher, toggleMode } from 'mode-watcher'

    let { children } = $props()
</script>

<ModeWatcher lightClassNames={['light']} darkClassNames={['dark']} />
<button onclick={toggleMode}>Toggle Mode</button>

<Tooltip.Provider>
    {@render children()}
</Tooltip.Provider>
