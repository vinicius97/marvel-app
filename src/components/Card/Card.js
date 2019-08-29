import React from 'react'
import PropTypes from 'prop-types'

// Constants
import { prefix } from '../../constants/Components'

function Card ({ title, thumbnail }) {
  return (
    <div className={`${prefix}-card`}>
      {thumbnail && (
        <div className={`${prefix}-card__thumbnail`}>
          <img src={thumbnail} alt={title} className={`${prefix}-card__thumbnail__img`} />
        </div>
      )}
      <span className={`${prefix}-card__title`}>
        {title}
      </span>
    </div>
  )
}

Card.defaultProps = {
  title: '',
  thumbnail: null
}

Card.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string
}

export { Card }
