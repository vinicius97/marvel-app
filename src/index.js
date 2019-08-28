import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

// Application Routes
import Routes from './routes'

ReactDOM.render(<Routes />, document.getElementById('root'))

serviceWorker.unregister()
