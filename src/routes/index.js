import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import { Theme } from '../components'

// Sub-routes
import { CharactersRoutes } from './Characters'

function AppRouter () {
  return (
    <Router>
      <Theme>
        <Route path='/' component={CharactersRoutes} />
      </Theme>
    </Router>
  )
}

export default AppRouter
