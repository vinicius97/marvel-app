import React from 'react'
import { Card } from './Card'

// Constants
import { prefix } from '../../constants/Components'

describe('[Component][Card]', () => {
  const wrap = mount(<Card />)

  it('render with default props', async () => {
    expect(wrap.find(`.${prefix}-card`)).toBeDefined()
    expect(wrap.find(`.${prefix}-card__thumbnail`)).toEqual({})
    expect(wrap.find(`.${prefix}-card__title`)).toBeDefined()
  })

  it('has the correct className considering the prefix', async () => {
    expect(wrap.find(`${prefix}-card`)).toBeTruthy()
  })

  it('render with custom props', async () => {
    const customProperties = {
      title: 'title',
      thumbnail: 'http://test.dev/image.jpg'
    }

    await wrap.setProps(customProperties)

    // render thumbnail
    expect(wrap.find(`.${prefix}-card`)).toBeDefined()
    expect(wrap.find(`.${prefix}-card__thumbnail`)).toBeDefined()

    const thumbnailImage = wrap.find(`.${prefix}-card__thumbnail__img`)
    expect(thumbnailImage).toBeDefined()
    expect(thumbnailImage.getDOMNode()).toHaveProperty('src', customProperties.thumbnail)
    expect(thumbnailImage.getDOMNode()).toHaveProperty('alt', customProperties.title)

    // render title
    expect(wrap.find(`.${prefix}-card__title`)).toBeDefined()
    expect(wrap.find(`.${prefix}-card__title`).text()).toEqual(customProperties.title)
  })
})
