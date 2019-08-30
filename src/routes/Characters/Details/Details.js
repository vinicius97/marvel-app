import React from 'react'
import { Link } from 'react-router-dom'

// Components
import { Card } from '../../../components'

// Constants
import { CharactersRoutes } from '../../../constants/Routes'

export function Details ({ character }) {
  const { thumbnail, name, series, id } = character
  const thumbnailSrc = thumbnail && `${thumbnail.path}.${thumbnail.extension}`

  return (
    <div>
      <Card thumbnail={thumbnailSrc} title={name} />

      <Link to={`${CharactersRoutes.edit.replace(':id', id)}`}>
        <div> Editar </div>
      </Link>

      Series
      {series && series.items.map((serie, key) => (
        <div key={key}>
          <span>{serie.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Details
