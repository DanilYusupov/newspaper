import React from 'react'
import NewsList from '../components/NewsList'
import Loading from '../components/Loading'
import { host, headliners, key, pageSize } from '../urls';

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      news: [],
      count: 0,
      activePage: 1,
      loading: true,
    }
  }

  componentDidMount() {
    this.getData(`${host}${headliners}?country=us&pageSize=${pageSize}&page=${this.state.activePage}&apiKey=${key}`)
  }

  handlePageChange = (e, { activePage }) => {
    this.setState({activePage: activePage, loading: true })
    this.getData(`${host}${headliners}?country=us&pageSize=${pageSize}&page=${this.state.activePage}&apiKey=${key}`)
  }

  getData = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ news: data.articles, count: data.totalResults, loading: false }))
  }

  render() {
    const {news} = this.state
    console.log(`active page ${this.state.activePage}\n last title ${news ? news[9] : 'none'}`)
    const pages = this.state.count / pageSize
    return !this.state.loading ? <NewsList
      data={this.state}
      pageSize={pages}
      handlePageChange={this.handlePageChange}
    /> : <Loading/>
  }
}

export default Board