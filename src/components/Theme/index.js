import React from 'react'
import './Theme.scss'

// Constants
import { prefix } from '../../constants/Components'

export const Theme = (props) => <div className={prefix}> {props.children} </div>
