import React from 'react'
import SearchPanel from '../components/SearchPanel'
import Error from '../components/Error'
import {host, everything, key, pageSize} from '../urls'

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      news: [],
      count: 0,
      activePage: 1
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(keyword) {
    const urlEncoded = encodeURIComponent(keyword)
    this.getData(`${host}${everything}?q=${urlEncoded}&pageSize=${pageSize}&page=1&sortBy=relevancy&apiKey=${key}`)
  }

  getData = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({news: data.articles, count: data.totalResults}))
  }

  render() {
    const {news} = this.state
    const {error} = this.props
    return error === null ?
      <SearchPanel
        callback={this.handleSearch}
        results={news}
      /> :
      <Error error={error}/>
  }
}

export default SearchBar
