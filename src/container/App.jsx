import React from 'react'
import Board from './Board'
import { Logo } from '../components/Logo'
import { Footer } from '../components/Footer'
import MenuBar from '../components/MenuBar'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      country: 'us',
    }
    this.selectCountry = this.selectCountry.bind(this)
  }

  selectCountry = country => {
    this.setState({ country })
  }

  render() {
    return (
      <div>
        <Logo/>
        <MenuBar
          selectCountry={this.selectCountry}
          country={this.state.country}
        />
        <Board
          country={this.state.country}
        />
        <Footer/>
      </div>
    )
  }

}

export default App