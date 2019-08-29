import React from 'react'

// Components
import { Card } from '../../../components'

export function Details ({ character }) {
  const { thumbnail, name, series } = character
  const thumbnailSrc = thumbnail && `${thumbnail.path}.${thumbnail.extension}`

  return (
    <div>
      <Card thumbnail={thumbnailSrc} title={name} />

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
