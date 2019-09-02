import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// Component
import { Loader } from '../../../components'
import List from './List'

class ListContainer extends PureComponent {
  state = {
    list: [],
    total: 0,
    loading: false,
    searchKey: '',
    page: 0
  }

  static defaultProps = {
    list: [],
    total: 0,
    loading: false,
    searchKey: ''
  }

  loadCharactersList = (nameStartsWith = null, offset = null) => {
    if(nameStartsWith !== this.state.searchKey) {
      this.setState({
        page: 0
      })
    }

    this.props.find({ nameStartsWith, offset })
  }

  handleResetSearch = () => {
    this.props.setSearchKey('')
    this.loadCharactersList()
  }

  handleNavigateTo = (location) => {
    this.props.history.push(location)
  }

  handleChangePage = (offset, page) => {
    this.loadCharactersList(null, offset)
    this.setState({
      page
    })
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

    if (prevState.searchKey !== nextProps.searchKey) {
      state.searchKey = nextProps.searchKey
    }

    return state
  }

  componentDidMount () {
    this.loadCharactersList()
  }

  render () {
    const { list, total, loading, page } = this.state

    return (
      <>
        <Loader show={loading} />
        <List
          total={total}
          characters={list}
          page={page}
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
  loading: state.character.loading,
  searchKey: state.character.searchKey
})

const mapDispatch = ({ character: { find, setSearchKey } }) => ({
  find,
  setSearchKey
})

export default connect(mapState, mapDispatch)(ListContainer)
