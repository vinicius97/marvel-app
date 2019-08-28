import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

// Sub-routes
import { CharactersRoutes } from './Characters'

function AppRouter() {
  return (
    <Router>
      <Route path="/" component={CharactersRoutes} />
    </Router>
  );
}

export default AppRouter
