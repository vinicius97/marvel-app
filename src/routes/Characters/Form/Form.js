import React, { PureComponent } from 'react'

// Constants
import { prefix } from '../../../constants/Components'
import { formErrorMessages } from '../../../constants/ErrorMessages'
// Styles
import './Form.scss'

class Form extends PureComponent {
  state = {
    formData: {
      name: '',
      description: ''
    },
    errorMessages: []
  }

  static fieldNames = {
    name: 'nome',
    description: 'descrição'
  }

  static defaultProps = {
    character: {
      name: '',
      description: ''
    },
    onSubmit: () => {}
  }

  handleEmptyErrorMessages = () => {
    this.setState({
      errorMessages: []
    })
  }

  handleErrorMessage = (message) => {
    this.setState(
      state => ({
        errorMessages: [ ...state.errorMessages, message ]
      })
    )
  }

  handleFormChange = (e) => {
    e.persist()

    let { name, value } = e.target

    this.setState(
      state => ({
        formData: {
          ...state.formData,
          [name]: value
        }
      })
    )
  }

  handleFormDataValidation = (formData) => {
    const { name, description } = formData
    this.handleEmptyErrorMessages()

    if(name === '' || name === null) {
      this.handleErrorMessage(formErrorMessages(Form.fieldNames.name).emptyField)
      return false
    }
    if(description === '' || name === description) {
      this.handleErrorMessage(formErrorMessages(Form.fieldNames.description).emptyField)
      return false
    }

    return true
  }

  handleLoadFormData = (formData) => {
    this.setState({
      formData
    })
  }

  handleSubmitForm = () => {
    const formData = this.state.formData
    const isValid = this.handleFormDataValidation(formData)
    if (isValid) {
      this.props.onSubmit(formData)
    }
  }

  componentDidMount () {
    const formData = this.props.character
    this.handleLoadFormData(formData)
  }

  render () {
    const { formData, errorMessages } = this.state

    return (
      <form className={`${prefix}-character-form`}>
        <h2 className={`${prefix}-character-form__title`}>
          Formulário de edição
        </h2>
        {errorMessages.map(message => message)}
        <input
          className={`${prefix}-character-form__input`}
          onChange={this.handleFormChange}
          type='text'
          name='name'
          value={formData.name}
        />
        <textarea
          className={`${prefix}-character-form__text-area`}
          onChange={this.handleFormChange}
          type='text'
          name='description'
          value={formData.description}
        />
        <div
          className={`${prefix}-character-form__submit`}
          role='button'
          onClick={this.handleSubmitForm}>
          Salvar
        </div>
      </form>
    )
  }
}

export default Form
