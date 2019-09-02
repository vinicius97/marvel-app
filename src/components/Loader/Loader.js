import React from 'react'

// Constants
import { prefix } from '../../constants/Components'

// Assets
import LoadIcon from '../../assets/images/load.svg'

// Styles
import './Loader.scss'

export const Loader = ({ mode = 'wrap', show = false }) => {
  return show && (
    <div className={`${prefix}-loader__${mode}`}>
      <img className={`${prefix}-loader__${mode}__img`} src={LoadIcon} alt='Carregando' />
    </div>
  )
}
