import React from 'react'
import Board from './Board'
import SearchBar from './SearchBar'
import {Logo} from '../components/Logo'
import {Footer} from '../components/Footer'
import MenuBar from '../components/MenuBar'
import Lottery from '../components/Lottery'
import {Route, BrowserRouter as Router} from 'react-router-dom'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      country: 'us'
    };
    this.selectCountry = this.selectCountry.bind(this)
  }

  selectCountry = country => {
    this.setState({country})
  }

  render() {
    return (
      <Router>
        <Logo/>
        <MenuBar selectCountry={this.selectCountry} country={this.state.country} active={window.location.pathname}/>
        <Route exact={true} path={['/', '/home']} render={() => (<Board country={this.state.country}/>)}/>
        <Route path='/search' component={SearchBar}/>
        <Route path='/lottery' component={Lottery}/>
        <Footer/>
      </Router>
    )
  }

}

export default App
