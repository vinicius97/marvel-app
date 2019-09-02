import React, { useState } from 'react'
import { prefix } from '../../constants/Components'

// Styles
import './Search.scss'

// Assets
import SearchIcon from '../../assets/images/search.svg'

export const Search = ({ onSearch, onResetSearch }) => {
  const [searchValue, setSearchValue] = useState('')
  const handleSearchValue = (value) => {
    // Check for reset page search key
    if (value !== null && value !== '') {
      onSearch(value)
    } else {
      onResetSearch()
      setSearchValue('')
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchValue(searchValue)
    }
  }

  return (
    <div className={`${prefix}-search`}>
      <input
        className={`${prefix}-search__input`}
        type='text'
        name='search'
        value={searchValue}
        onKeyPress={handleKeyPress}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {(searchValue !== '') && (
        <div
          className={`${prefix}-search__button--reset`}
          onClick={() => handleSearchValue(null)}
          role='button'
        >
          X
        </div>
      )}
      <div
        className={`${prefix}-search__button--submit`}
        onClick={() => handleSearchValue(searchValue)}
        role='button'
      >
        <img className={`${prefix}-search__button--submit__img`} src={SearchIcon} alt='Buscar' />
      </div>
    </div>
  )
}
