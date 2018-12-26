import React from 'react'
import Board from './Board'
import SearchBar from './SearchBar'
import {Logo} from '../components/Logo'
import {Footer} from '../components/Footer'
import MenuBar from '../components/MenuBar'
import Lottery from '../components/Lottery'
import About from '../components/About'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {host, headliners, key} from '../urls'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      country: 'us',
      error: null
    }
    this.selectCountry = this.selectCountry.bind(this)

    // Checking API availability
    this.checkApi()
  }

  selectCountry = country => {
    this.setState({country})
  }

  checkApi = () => {
    fetch(`${host}${headliners}?country=${this.state.country}&pageSize=1&page=1&apiKey=${key}`)
      .then(response => {
        console.log(response.status)
        switch (response.status) {
          case 500:
            this.setState({error: 'There is a problems in external API. Call https://newsapi.org/ support.'})
            break
          case 401:
            this.setState({error: 'You have no access to https://newsapi.org/ Check Your API key.'})
            console.log(`initiating state: ${this.state.error}`)
            break
        }
      })
      .catch(e => this.setState({error: e.message()}))
  }

  render() {
    const {error, country} = this.state
    return (
      <Router>
        <Logo/>
        <MenuBar selectCountry={this.selectCountry} country={country} active={window.location.pathname}/>
        <Route exact={true} path={['/', '/home']} render={() => (<Board country={country} error={error}/>)}/>
        <Route path='/search' component={() => (<SearchBar error={error}/>)}/>
        <Route path='/lottery' component={Lottery}/>
        <Route path='/about' component={About}/>
        <Footer/>
      </Router>
    )
  }

}

export default App
