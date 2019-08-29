import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// Component
import Details from './Details'

class DetailsContainer extends PureComponent {
  state = {
    character: {}
  }

  static defaultProps = {
    character: {}
  }

  loadCharacterDetails = (id) => {
    this.props.loadById({ id })
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

    return (
      <Details character={character} />
    )
  }
}

const mapState = state => ({
  character: state.character.actual
})

const mapDispatch = ({ character: { loadById } }) => ({
  loadById
})

export default connect(mapState, mapDispatch)(DetailsContainer)
