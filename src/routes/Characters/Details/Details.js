import React from 'react'
import { Link } from 'react-router-dom'

// Components
import { Card } from '../../../components'

// Constants
import { CharactersRoutes } from '../../../constants/Routes'
import { prefix } from '../../../constants/Components'

// Styles
import './Details.scss'

export function Details ({ character }) {
  const { thumbnail, name, series, id } = character
  const thumbnailSrc = thumbnail && `${thumbnail.path}.${thumbnail.extension}`

  return (
    <div className={`${prefix}-details`}>
      <div className={`${prefix}-details__header`}>
        <Card thumbnail={thumbnailSrc} title={name} />
      </div>

      <div className={`${prefix}-details__edit`}>
        <Link
          className={`${prefix}-details__edit__button`}
          to={`${CharactersRoutes.edit.replace(':id', id)}`}
        >
          Editar
        </Link>
      </div>

      <div className={`${prefix}-details__section`}>
        Séries com o personagem
      </div>

      <div className={`${prefix}-details__series`}>
        <ul>
          {series && series.items.map((serie, key) => (
            <li key={key}>
              <span>{serie.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Details
