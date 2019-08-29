import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import { Theme } from '../components'

// Sub-routes
import { CharactersRoutes } from './Characters'

function AppRouter () {
  return (
    <Theme>
      <Router>
        <Route path='/' component={CharactersRoutes} />
      </Router>
    </Theme>
  )
}

export default AppRouter
