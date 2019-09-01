import React from 'react'

// Components
import { Card } from '../../../components'

// Constants
import { CharactersRoutes } from '../../../constants/Routes'
import { prefix } from '../../../constants/Components'

// Styles
import './Details.scss'

export function Details ({ character, navigateTo }) {
  const { thumbnail, name, series, id } = character
  const thumbnailSrc = thumbnail && `${thumbnail.path}.${thumbnail.extension}`

  return (
    <div className={`${prefix}-character-details`}>
      <div
        className={`${prefix}-character-details__edit__button--back`}
        onClick={() => navigateTo(CharactersRoutes.list)}
        role='button'
      >
        Voltar
      </div>

      <div className={`${prefix}-character-details__header`}>
        <Card thumbnail={thumbnailSrc} title={name} />
      </div>

      <div className={`${prefix}-character-details__edit`}>
        <div
          className={`${prefix}-character-details__edit__button--edit`}
          onClick={() => navigateTo(`${CharactersRoutes.edit.replace(':id', id)}`)}
          role='button'
        >
          Editar
        </div>
      </div>

      <div className={`${prefix}-character-details__section`}>
        Séries com o personagem
      </div>

      <div className={`${prefix}-character-details__series`}>
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

Details.defaultProps = {
  character: [],
  navigateTo: () => {}
}

export default Details
