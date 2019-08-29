import React from 'react'
import './Theme.scss'
import { Link } from 'react-router-dom'

// Constants
import { prefix } from '../../constants/Components'
import { CharactersRoutes } from '../../constants/Routes'
// Assets
import Logo from '../../assets/images/logo.svg'

export const Theme = (props) => (
  <div className={prefix}>
    <div className={`${prefix}__logo`}>
      <Link to={CharactersRoutes.list}>
        <img height={50} src={Logo} alt='Marvel' />
      </Link>
    </div>
    <div className={`${prefix}__page`}>
      {props.children}
    </div>
  </div>
)
