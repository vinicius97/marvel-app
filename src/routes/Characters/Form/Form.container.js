import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// Component
import Form from './Form'

class FormContainer extends PureComponent {
  state = {
    character: {}
  }

  static defaultProps = {
    character: {}
  }

  loadCharacterDetails = (id) => {
    this.props.loadById({ id })
  }

  handleOnSave = (data) => {
    this.props.update(data)
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    let state = {}

    if (prevState.character !== nextProps.character) {
      state.character = nextProps.character
    }

    return state
  }

  componentDidMount () {
    const id = this.props.match.params.id
    this.loadCharacterDetails(id)
  }

  render () {
    const { character } = this.state

    console.log(character, 'character')

    return character && (
      <Form character={character} onSubmit={this.handleOnSave} />
    )
  }
}

const mapState = state => ({
  character: state.character.actual
})

const mapDispatch = ({ character: { loadById, update } }) => ({
  loadById,
  update
})

export default connect(mapState, mapDispatch)(FormContainer)
