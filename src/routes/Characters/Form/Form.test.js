import React from 'react'
import { shallow, mount } from 'enzyme'

// Components
import Form from './Form'

// Constants
import { prefix } from '../../../constants/Components'
import { CharactersRoutes } from '../../../constants/Routes'

// Data
import CharacterMock from '../../../services/Character/Character.mock'

describe('[Route][Character][Form]', () => {
  const characterMock = CharacterMock.details.data.results[0]
  const onSubmitMock = jest.fn().mockImplementation(value => value)

  const properties = {
    character: characterMock,
    onSubmit: onSubmitMock
  }

  const wrap = mount(<Form {...properties} />)
  const wrapEmpty = shallow(<Form />)

  it('render form with empty state', () => {
    expect(wrapEmpty.find(`.${prefix}-character-form`)).toBeDefined()
    expect(wrapEmpty.find(`.${prefix}-character-form__input`)).toBeDefined()
    expect(wrapEmpty.find(`.${prefix}-character-form__text-area`)).toBeDefined()
    expect(wrapEmpty.find(`.${prefix}-character-form__submit`)).toBeDefined()
  })

  it('render form with data', () => {
    expect(wrap.find(`.${prefix}-character-form`)).toBeDefined()
    expect(wrap.find(`.${prefix}-character-form__input`)).toBeDefined()
    expect(wrap.find(`.${prefix}-character-form__text-area`)).toBeDefined()
    expect(wrap.find(`.${prefix}-character-form__submit`)).toBeDefined()
  })

  it('load data into form', () => {
    expect(wrap.find(`.${prefix}-character-form__input`).instance().value).toEqual(characterMock.name)
    expect(wrap.find(`.${prefix}-character-form__text-area`).instance().value).toEqual(characterMock.description)
  })

  it('edit data at form', () => {
    const inputName = wrap.find(`.${prefix}-character-form__input`)
    const textareaDescrption = wrap.find(`.${prefix}-character-form__text-area`)

    inputName.simulate('change', { target: { name: 'name', value: 'New name' } })
    expect(inputName.instance().value).toEqual('New name')

    textareaDescrption.simulate('change', { target: { name: 'description', value: 'New description' } })
    expect(textareaDescrption.instance().value).toEqual('New description')
  })

  it('invalidate submit for empty input name', () => {
    const submitButton = wrap.find(`.${prefix}-character-form__submit`)
    const inputName = wrap.find(`.${prefix}-character-form__input`)

    inputName.simulate('change', { target: { name: 'name', value: '' } })
    submitButton.simulate('click')

    expect(onSubmitMock).toHaveBeenCalledTimes(0)
  })

  it('invalidate submit for empty textarea description', () => {
    const submitButton = wrap.find(`.${prefix}-character-form__submit`)
    const textareaDescrption = wrap.find(`.${prefix}-character-form__text-area`)

    textareaDescrption.simulate('change', { target: { name: 'description', value: 'New description' } })
    submitButton.simulate('click')

    expect(onSubmitMock).toHaveBeenCalledTimes(0)
  })

  it('invalidate submit for empty form data', () => {
    const submitButton = wrap.find(`.${prefix}-character-form__submit`)
    const inputName = wrap.find(`.${prefix}-character-form__input`)
    const textareaDescrption = wrap.find(`.${prefix}-character-form__text-area`)

    inputName.simulate('change', { target: { name: 'name', value: '' } })
    textareaDescrption.simulate('change', { target: { name: 'description', value: 'New description' } })
    submitButton.simulate('click')

    expect(onSubmitMock).toHaveBeenCalledTimes(0)
  })

  it('save data from form and redirect to details page from character', () => {
    const submitButton = wrap.find(`.${prefix}-character-form__submit`)
    const detailsRoute = CharactersRoutes.details.replace(':/id', characterMock.id)
    const inputName = wrap.find(`.${prefix}-character-form__input`)
    const textareaDescrption = wrap.find(`.${prefix}-character-form__text-area`)

    inputName.simulate('change', { target: { name: 'name', value: 'New name' } })
    textareaDescrption.simulate('change', { target: { name: 'description', value: 'New description' } })

    submitButton.simulate('click')

    expect(onSubmitMock).toHaveBeenCalled()
    expect(onSubmitMock.mock.calls[0][0] === detailsRoute)
  })
})
