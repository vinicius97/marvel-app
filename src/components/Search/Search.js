import React, { useState } from 'react'
import { prefix } from '../../constants/Components'

// Styles
import './Search.scss'

// Assets
import SearchIcon from '../../assets/images/search.svg'

export const Search = ({ onSearch, onResetSearch }) => {
  const [searchValue, setSearchValue] = useState('')
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Check for reset page search key
      if (searchValue !== null && searchValue !== '') {
        onSearch(searchValue)
      } else {
        onResetSearch()
      }
    }
  }

  return (
    <div className={`${prefix}-search`}>
      <input
        className={`${prefix}-search__input`}
        type='text'
        onKeyPress={handleKeyPress}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div
        className={`${prefix}-search__button`}
        onClick={() => onSearch(searchValue)}
        role='button'
      >
        <img className={`${prefix}-search__button__img`} src={SearchIcon} alt='Buscar' />
      </div>
    </div>
  )
}
