import { html } from 'htm/react'
import { styled } from 'styled-components'

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  cursor: pointer;
  border-radius: 5px;
  margin: 3px;
  user-select: none;
  background-color: #007bff;
`

export default ({ title, children, ...props }) => {
  return html`
    <${Button} ...${props}>
      ${children}
    <//>
  `
}
