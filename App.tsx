import * as React from 'react'
import { render } from 'react-dom'

import Foo from './Foo'

declare const pug: any

const App = () => pug`
  Foo/
`

render(<App />, document.getElementById('root'))