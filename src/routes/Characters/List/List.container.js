import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// Component
import { Loader } from '../../../components'
import List from './List'

class ListContainer extends PureComponent {
  state = {
    list: [],
    total: 0,
    loading: false
  }

  static defaultProps = {
    list: [],
    total: 0,
    loading: false
  }

  loadCharactersList = (nameStartsWith = null, offset = null) => {
    this.props.find({ nameStartsWith, offset })
  }

  handleResetSearch = () => {
    this.props.setSearchKey('')
    this.loadCharactersList()
  }

  handleNavigateTo = (location) => {
    this.props.history.push(location)
  }

  handleChangePage = (offset) => {
    this.loadCharactersList(null, offset)
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    let state = {}

    if (prevState.list !== nextProps.list) {
      state.list = nextProps.list
    }

    if (prevState.total !== nextProps.total) {
      state.total = nextProps.total
    }

    if (prevState.loading !== nextProps.loading) {
      state.loading = nextProps.loading
    }

    return state
  }

  componentDidMount () {
    this.loadCharactersList()
  }

  render () {
    const { list, total, loading } = this.state

    return (
      <>
        <Loader show={loading} />
        <List
          total={total}
          characters={list}
          onNavigateTo={this.handleNavigateTo}
          onSearch={this.loadCharactersList}
          onResetSearch={this.handleResetSearch}
          onNextPage={this.handleChangePage}
          onPreviousPage={this.handleChangePage} />
      </>
    )
  }
}

const mapState = state => ({
  list: state.character.list,
  total: state.character.total,
  loading: state.character.loading
})

const mapDispatch = ({ character: { find, setSearchKey } }) => ({
  find,
  setSearchKey
})

export default connect(mapState, mapDispatch)(ListContainer)
