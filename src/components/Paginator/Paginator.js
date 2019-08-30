import React, { PureComponent } from 'react'

export class Paginator extends PureComponent {
  state = {
    page: 1,
    totalPages: 0,
    total: 0,
    limit: 0
  }

  static defaultProps = {
    page: 1,
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
    let page

    await this.setState(state => {
      page = state.page - 1
      if(page <= 0) {
        page = 1
      }
      return {
        page
      }
    })

    this.props.onPreviousPage(page)
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

  componentDidMount () {
    this.handleProperties()
  }

  render () {
    const { page } = this.state

    return (
      <div>
        <div onClick={this.handlePreviousPage}> Anterior </div>
        <div> {page} </div>
        <div onClick={this.handleNextPage}> Próxima </div>
      </div>
    )
  }
}
