import '@testing-library/jest-dom/vitest'

// eslint-disable-next-line import/named
import { render, screen } from '@testing-library/svelte'
import { describe, test, expect } from 'vitest'
import Page from './+page.svelte'

describe('/+page.svelte', () => {
    test('should render h1', () => {
        render(Page)
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    })
})
