import React from 'react'
import SearchPanel from '../components/SearchPanel'
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
    const {count, news} = this.state
    const pages = count / pageSize
    return <SearchPanel
      callback={this.handleSearch}
      results={news}
    />
  }
}

export default SearchBar
