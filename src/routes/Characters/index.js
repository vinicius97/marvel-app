import React from 'react'
import { Route } from 'react-router-dom'

// Constants
import { routes } from '../../constants'

// Routes
import Details from './Details'
import Form from './Form'
import List from './List'

function CharactersRoutes () {
  return (
    <>
      <Route path={routes.characters.details} exact component={Details} />
      <Route path={routes.characters.edit} exact component={Form} />
      <Route path={routes.characters.list} exact component={List} />
    </>
  )
}

export { CharactersRoutes }
