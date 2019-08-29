import React from 'react'

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

        return <Card {...properties} key={key} />
      })}
    </>
  )
}

List.defaultProps = {
  characters: []
}

export default List
