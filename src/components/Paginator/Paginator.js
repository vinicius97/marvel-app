import React, { PureComponent } from 'react'

// Constants
import { prefix } from '../../constants/Components'

// Styles
import './Paginator.scss'

export class Paginator extends PureComponent {
  state = {
    page: 0,
    totalPages: 0,
    total: 0,
    limit: 0
  }

  static defaultProps = {
    page: 0,
    total: 0,
    limit: 0,
    onNextPage: () => {},
    onPreviousPage: () => {}
  }

  handleNextPage = async () => {
    const { page, limit, totalPages } = this.state
    let nextPage =  page + 1
    let offset = limit * nextPage
    let maximumOffset = totalPages * limit

    if(offset > maximumOffset) {
      offset = maximumOffset
    }

    await this.setState({
      page: nextPage
    })

    this.props.onNextPage(offset)
  }

  handlePreviousPage = async () => {
    const { page, limit } = this.state
    let previousPage =  page - 1
    let offset = limit * previousPage

    if(previousPage < 0) {
      previousPage = 0
      offset = 0
    }

    await this.setState({
      page: previousPage
    })

    this.props.onPreviousPage(offset)
  }

  handleProperties = () => {
    const { page, total, limit } = this.props

    this.setState({
      page,
      total,
      limit,
      totalPages: Math.ceil(total/limit)
    })
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    let state = {}

    if (prevState.total !== nextProps.total) {
      state.total = nextProps.total
      state.totalPages = Math.ceil(nextProps.total/nextProps.limit)
    }

    return state
  }

  componentDidMount () {
    this.handleProperties()
  }

  render () {
    const { page, totalPages } = this.state
    const actualPage = page + 1

    return (
      <div className={`${prefix}-paginator`}>
        {(actualPage > 1) && (
          <div className={`${prefix}-paginator__nav-button--previous`} onClick={this.handlePreviousPage} role='button'>
            Anterior
          </div>
        )}
        <div className={`${prefix}-paginator__actual-page`}>
          {actualPage}
        </div>
        {(actualPage < totalPages) && (
          <div className={`${prefix}-paginator__nav-button--next`} onClick={this.handleNextPage} role='button'>
            Próxima
          </div>
        )}
      </div>
    )
  }
}
