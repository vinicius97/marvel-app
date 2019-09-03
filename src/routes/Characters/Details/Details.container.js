import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// Component
import Details from './Details'
import { Loader } from '../../../components/Loader'

export class DetailsContainer extends PureComponent {
  state = {
    character: {},
    loading: false
  }

  static defaultProps = {
    findById: () => {},
    character: {},
    loading: false,
    history: [],
    match: {
      params: {
        id: null
      }
    }
  }

  loadCharacterDetails = (id) => {
    this.props.findById({ id })
  }

  handleNavigateTo = (location) => {
    this.props.history.push(location)
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    let state = {}

    if (prevState.character !== nextProps.character) {
      state.character = nextProps.character
    }

    if (prevState.loading !== nextProps.loading) {
      state.loading = nextProps.loading
    }

    return state
  }

  componentDidMount () {
    const id = this.props.match.params.id
    this.loadCharacterDetails(parseInt(id))
  }

  render () {
    const { character, loading } = this.state

    return character && (
      <>
        <Loader show={loading} />
        <Details character={character} navigateTo={this.handleNavigateTo} />
      </>
    )
  }
}

const mapState = state => ({
  character: state.character.actual,
  loading: state.character.loading
})

const mapDispatch = ({ character: { findById } }) => ({
  findById
})

export default connect(mapState, mapDispatch)(DetailsContainer)
