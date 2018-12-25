import React from 'react'
import { Menu, Container, Dropdown, Flag } from 'semantic-ui-react'
import {countries} from '../countries';

const names = ['home', 'search', 'lottery', 'about']

class MenuBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'home',
    }
  }

  handleClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    return (
      <Container>
        <Menu pointing style={{ marginBottom: '1.5em' }}>
          {names.map(i => (
            <Menu.Item
              name={i}
              key={i}
              active={this.state.activeItem === i}
              onClick={this.handleClick}
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