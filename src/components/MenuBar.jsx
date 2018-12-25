import React from 'react'
import {Menu, Container, Dropdown, Flag} from 'semantic-ui-react'
import {countries} from '../countries'
import {Link} from 'react-router-dom'

const names = ['home', 'search', 'lottery', 'about']

class MenuBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'home'
    }
  }

  render() {
    const {activeItem} = this.state
    return (
      <Container>
        <Menu pointing style={{marginBottom: '1.5em'}}>
          {names.map(i => (
            <Link
              key={i}
              children={i}
              to={`/${i}`}
              className={activeItem === i ? 'item active' : 'item'}
              onClick={() => {this.setState({activeItem: i})}}
            />
          ))}
          <Menu.Menu position='right'>
            <Dropdown
              button
              className='icon'
              icon='world'
              trigger={<Flag name={this.props.country}/>}
              options={countries}
              onChange={(e, data) => this.props.selectCountry(data.value)}
              style={{backgroundColor: '#ffffff'}}
            />
          </Menu.Menu>
        </Menu>
      </Container>
    )
  }
}

export default MenuBar
