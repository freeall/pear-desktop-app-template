import { createRoot } from 'react-dom/client'
import { html } from 'htm/react'
import App from './src/containers/App'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(html`<${App} />`)
