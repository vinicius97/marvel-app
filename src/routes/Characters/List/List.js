import React from 'react'
import { Link } from 'react-router-dom'

// Constants
import { defaultRequestParameters } from '../../../constants/Endpoints'
import { CharactersRoutes } from '../../../constants/Routes'
import { prefix } from '../../../constants/Components'

// Components
import { Card, Paginator, Search } from '../../../components'

// Styles
import './List.scss'

export function List ({ characters, onSearch, onResetSearch, onNextPage, onPreviousPage, total }) {
  const hasCharacters = (characters.length > 0)

  return (
    <div className={`${prefix}-characters-list`}>
      <Search onSearch={onSearch} onResetSearch={onResetSearch} />

      <div className={`${prefix}-characters-list__cards`}>
        {hasCharacters && characters.map((item, key) => {
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

        {!hasCharacters && (
          'Não há resultados disponíveis para sua busca'
        )}
      </div>

      <Paginator
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        limit={defaultRequestParameters.limit}
        total={total}
      />
    </div>
  )
}

List.defaultProps = {
  characters: [],
  total: 0,
  onSearch: () => {},
  onResetSearch: () => {},
  onNextPage: () => {},
  onPreviousPage: () => {}
}

export default List
