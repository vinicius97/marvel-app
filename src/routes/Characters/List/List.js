import React from 'react'

export function List ({ characters }) {
  return (
    <div>
      {characters.map(item => item.id)}
    </div>
  )
}

List.defaultProps = {
  characters: []
}

export default List
