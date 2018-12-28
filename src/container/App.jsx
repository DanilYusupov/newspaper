import React from 'react'
import Loadable from 'react-loadable'
import LoadingComponent from '../components/LoadingComponent'
import {Route, BrowserRouter as Router} from 'react-router-dom'

// Initializing components with dynamic import

const Logo = Loadable({
  loader: () => import('../components/Logo'),
  loading: () => <LoadingComponent/>,
})

const MenuBar = Loadable({
  loader: () => import('../components/MenuBar'),
  loading: () => <LoadingComponent/>,
})

const Board = Loadable({
  loader: () => import('./Board'),
  loading: () => <LoadingComponent/>,
})

const SearchBar = Loadable({
  loader: () => import('./SearchBar'),
  loading: () => <LoadingComponent/>,
})

const Lottery = Loadable({
  loader: () => import('../components/Lottery'),
  loading: () => <LoadingComponent/>,
})

const About = Loadable({
  loader: () => import('../components/About'),
  loading: () => <LoadingComponent/>,
})

const Footer = Loadable({
  loader: () => import('../components/Footer'),
  loading: () => <LoadingComponent/>,
})

// Main App component

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      country: 'us',
    }
    this.selectCountry = this.selectCountry.bind(this)
  }

  selectCountry = country => {
    this.setState({country})
  }

  render() {
    const {country} = this.state
    return (
      <Router>
        <Logo/>
        <MenuBar selectCountry={this.selectCountry} country={country} active={window.location.pathname}/>
        <Route exact={true} path={['/', '/home']} render={() => (<Board country={country}/>)}/>
        <Route path='/search' component={() => (<SearchBar/>)}/>
        <Route path='/lottery' component={Lottery}/>
        <Route path='/about' component={About}/>
        <Footer/>
      </Router>
    )
  }

}

export default App
