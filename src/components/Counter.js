import { html } from 'htm/react'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 1.3rem;
`
const Number = styled.span`
  font-weight: bold;
  color: red;
  padding-left: 10px;
`

export default ({ counter }) => {
  return html`
    <${Wrapper}>
      Counter:
      <${Number}>
        ${counter}
      <//>
    <//>
  `
}
