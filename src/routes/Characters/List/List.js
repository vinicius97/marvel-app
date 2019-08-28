import React from 'react'

export function List ({ list }) {
  return (
    <div>
      {list.map(item => item.id)}
    </div>
  )
}

List.defaultProps = {
  list: []
}

export default List
