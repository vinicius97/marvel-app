import React, { PureComponent } from 'react'

// Constants
import { prefix } from '../../../constants/Components'

// Styles
import './Form.scss'

class Form extends PureComponent {
  state = {
    formData: {
      name: '',
      description: ''
    }
  }

  handleFormChange = (e) => {
    e.persist()

    const { name, value } = e.target
    this.setState(
      state => ({
        formData: {
          ...state.formData,
            [name]: value
        }
      })
    )
  }

  handleLoadFormData = (formData) => {
    this.setState({
      formData
    })
  }

  handleSubmitForm = () => {
    this.props.onSubmit(this.state.formData)
  }

  componentDidMount () {
    const formData = this.props.character
    this.handleLoadFormData(formData)
  }

  render () {
    const { formData } = this.state

    return (
      <form className={`${prefix}-character-form`}>
        <h2 className={`${prefix}-character-form__title`}>
          Formulário de edição
        </h2>
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
