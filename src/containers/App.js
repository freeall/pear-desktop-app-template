import { html } from 'htm/react'
import { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Counter from '../components/Counter'

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`
const Controls = styled.div`
  display: flex;
  gap: 20px;
`

export default () => {
  const [counter, setCounter] = useState(0)

  return html`
    <${Wrapper}>
      <${Counter} counter=${counter} />
      <${Controls}>
        <${Button} onClick=${() => setCounter(counter - 1)}>
          👇
        <//>
        <${Button} onClick=${() => setCounter(counter + 1)}>
          👆
        <//>
      <//>
    <//>
  `
}
