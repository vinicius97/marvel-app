import React from 'react'
import { prefix } from '../../constants/Components'

// Styles
import './Search.scss'

export const Search = ({ onSearch }) => {
  return (
    <div className={`${prefix}-search`}>
      <input
        className={`${prefix}-search__input`}
        type='text'
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}
