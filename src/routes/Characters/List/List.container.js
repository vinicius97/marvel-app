import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

// Component
import List from './List'

class ListContainer extends PureComponent {
  state = {
    list: [],
    total: 0
  }

  static defaultProps = {
    list: [],
    total: 0
  }

  loadCharactersList = (nameStartsWith = null, offset) => {
    this.props.find({ nameStartsWith })
  }

  handleChangePage = (offset) => {
    console.log(offset)
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

    return state
  }

  componentDidMount () {
    this.loadCharactersList()
  }

  render () {
    const { list, total } = this.state

    return (
      <>
        <List
          total={total}
          characters={list}
          onSearch={this.loadCharactersList}
          onNextPage={this.handleChangePage}
          onPreviousPage={this.handleChangePage} />
      </>
    )
  }
}

const mapState = state => ({
  list: state.character.list,
  total: state.character.total
})

const mapDispatch = ({ character: { find } }) => ({
  find
})

export default connect(mapState, mapDispatch)(ListContainer)
