import React from 'react'
import Loadable from 'react-loadable'
import LoadingComponent from '../components/LoadingComponent'
import {host, headliners, key, pageSize} from '../js/urls'

// Dynamics imports

const NewsList = Loadable({
  loader: () => import('../components/NewsList'),
  loading: () => <LoadingComponent/>
})

const Loading = Loadable({
  loader: () => import('../components/Loading'),
  loading: () => <LoadingComponent/>
})

const Error = Loadable({
  loader: () => import('../components/Error'),
  loading: () => <LoadingComponent/>
})

// Board container

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      news: [],
      count: 0,
      activePage: 1,
      loading: true,
      error: null
    }
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  componentDidMount() {
    this.getData(`${host}${headliners}?country=${this.props.country}&pageSize=${pageSize}&page=${this.state.activePage}&apiKey=${key}`)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props === nextProps) {
      return
    }
    this.setState({loading: true})
    this.getData(`${host}${headliners}?country=${nextProps.country}&pageSize=${pageSize}&page=${this.state.activePage}&apiKey=${key}`)
  }

  handlePageChange = (e, {activePage}) => {
    this.setState({activePage: activePage, loading: true})
    this.getData(`${host}${headliners}?country=${this.props.country}&pageSize=${pageSize}&page=${activePage}&apiKey=${key}`)
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
      .then(data => this.setState({news: data.articles, count: data.totalResults, loading: false}))
      .catch(e => this.setState({error: e.message()}))
  }

  render() {
    const {count, loading, error} = this.state
    const pages = count / pageSize
    return error === null ? (!loading ?
      <NewsList
        data={this.state}
        pageSize={pages}
        handlePageChange={this.handlePageChange}
      /> :
      <Loading/>) :
      <Error error={error}/>
  }
}

export default Board
