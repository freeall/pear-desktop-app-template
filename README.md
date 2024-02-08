# Pear Desktop App

This example app tries to use standard component for writing a React app.

This project use `react`, `htm`, `styled-components`, and `normalize.css`, but Pear does not require you to use React or any other frameworks, so pick and choose as you wish.

## Transpilation or "why is there no babel?"

There is no transpilation step as this does not use Webpack. That means there is no JSX support, but instead uses [htm](https://github.com/developit/htm).

To still have highlighting, you can use a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html) or a [vim plugin](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html).

In general it's a simple change from

``` js
import React from 'react'
import AnotherComponent from './AnotherComponent'

const SomeComponent = ({ someProp }) => {
  return (
    <div>
      <AnotherComponent someProp={someProp}>
        Here is some text
      </AnotherComponent>
    </div>
  )
}
```

to

``` js
import { html } from 'htm/react'
import AnotherComponent from './AnotherComponent'

const SomeComponent = ({ someProp }) => {
  return html`
    <div>
      <${AnotherComponent} someProp=${someProp}>
        Here is some text
      <//>
    </div>
  `
}

```
