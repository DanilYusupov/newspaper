import React from 'react'
import Board from './Board'
import {Logo} from '../components/Logo'
import {Footer} from '../components/Footer'
import MenuBar from '../components/MenuBar'

// todo: Create eslint check from airbnb code style!
class App extends React.Component {

  render() {
    return (
      <div>
        <Logo/>
        <MenuBar/>
        <Board/>
        <Footer/>
      </div>
    )
  }

}

export default App