import React from 'react'
import { Link } from 'react-router-dom'

// Constants
import { defaultRequestParameters } from '../../../constants/Endpoints'
import { CharactersRoutes } from '../../../constants/Routes'
import { prefix } from '../../../constants/Components'

// Components
import { Card, Paginator } from '../../../components'

// Styles
import './List.scss'

export function List ({ characters, onSearch, onNextPage, onPreviousPage, total }) {
  return (
    <div className={`${prefix}-characters-list`}>
      <input
        className={`${prefix}-characters-list__search-input`}
        type='text'
        onChange={(e) => onSearch(e.target.value)}
      />

      <div className={`${prefix}-characters-list__cards`}>
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
      </div>
      <Paginator onNextPage={onNextPage} onPreviousPage={onPreviousPage} limit={defaultRequestParameters.limit} total={total} />
    </div>
  )
}

List.defaultProps = {
  characters: [],
  total: 0
}

export default List
