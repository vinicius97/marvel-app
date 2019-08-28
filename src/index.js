import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

// Redux and Rematch
import { Provider } from 'react-redux'
import store from './store'

// Application Routes
import Routes from './routes'

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, document.getElementById('root')
)

serviceWorker.unregister()
