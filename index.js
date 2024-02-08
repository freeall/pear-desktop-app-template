import { createRoot } from 'react-dom/client'
import { html } from 'htm/react'
import styled from 'styled-components'
import App from './containers/App'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(html`<${App} />`)
