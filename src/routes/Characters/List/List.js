import React from 'react'
import { Link } from 'react-router-dom'

// Constants
import { CharactersRoutes } from '../../../constants/Routes'

// Components
import { Card } from '../../../components'

export function List ({ characters }) {
  return (
    <>
      {characters.map((item, key) => {
        const { thumbnail, name, id, series } = item
        const properties = {
          thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
          title: name,
          id,
          series
        }

        return (
          <Link to={`${CharactersRoutes.details.replace(':id', id)}`} key={key}>
            <Card {...properties} />
          </Link>
        )
      })}
    </>
  )
}

List.defaultProps = {
  characters: []
}

export default List
