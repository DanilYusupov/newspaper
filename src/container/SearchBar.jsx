import React from 'react'
import Loadable from 'react-loadable'
import LoadingComponent from '../components/LoadingComponent'
import {host, everything, key, pageSize} from '../js/urls'

// Dynamic imports

const SearchPanel = Loadable({
  loader: () => import('../components/SearchPanel'),
  loading: () => <LoadingComponent/>
})

const Error = Loadable({
  loader: () => import('../components/Error'),
  loading: () => <LoadingComponent/>
})

// SearchBar container

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      news: [],
      count: 0,
      activePage: 1,
      error: null
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(keyword) {
    const urlEncoded = encodeURIComponent(keyword)
    this.getData(`${host}${everything}?q=${urlEncoded}&pageSize=${pageSize}&page=1&sortBy=relevancy&apiKey=${key}`)
  }

  getData = url => {
    fetch(url)
      .then(response => {
        switch (response.status) {
          case 500:
            this.setState({error: 'There is a problems in external API. Call https://newsapi.org/ support.'})
            return Promise.reject(response.body)
          case 401:
            this.setState({error: 'You have no access to https://newsapi.org/ Check Your API key.'})
            return Promise.reject(response.body)
          default:
            return response.json()
        }
      })
      .then(data => this.setState({news: data.articles, count: data.totalResults}))
      .catch(e => this.setState({error: e.message()}))
  }

  render() {
    const {news, error} = this.state
    return error === null ?
      <SearchPanel
        callback={this.handleSearch}
        results={news}
      /> :
      <Error error={error}/>
  }
}

export default SearchBar
