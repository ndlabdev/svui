import { watch } from 'chokidar'
import { generateTheme } from './generate-theme.js'

const fileToWatch = 'src/ui.config.ts'

console.log(`[svui] 👀 Watching ${fileToWatch} for changes...`)

const watcher = watch(fileToWatch, {
    ignoreInitial: false
})

watcher.on('add', () => {
    console.log('[svui] 📄 ui.config.ts detected. Generating theme...')
    generateTheme().catch(console.error)
})

watcher.on('change', () => {
    console.log('[svui] ✨ ui.config.ts changed. Regenerating theme...')
    generateTheme().catch(console.error)
})
