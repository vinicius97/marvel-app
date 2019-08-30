import React, { PureComponent } from 'react'

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
      <form>
        Formulário
        <input
          onChange={this.handleFormChange}
          type='text'
          name='name'
          value={formData.name}
        />
        <textarea
          onChange={this.handleFormChange}
          type='text'
          name='description'
          value={formData.description}
        />
        <div role='button' onClick={this.handleSubmitForm}>
          Salvar
        </div>
      </form>
    )
  }
}

export default Form
