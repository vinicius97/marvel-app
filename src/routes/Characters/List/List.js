import React from 'react'
import { Link } from 'react-router-dom'

// Constants
import { CharactersRoutes } from '../../../constants/Routes'
import { prefix } from '../../../constants/Components'

// Components
import { Card } from '../../../components'

// Styles
import './List.scss'

export function List ({ characters, onSearch }) {
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
    </div>
  )
}

List.defaultProps = {
  characters: []
}

export default List
