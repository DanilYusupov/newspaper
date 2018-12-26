import React from 'react'
import {Menu, Container, Dropdown, Flag, Button} from 'semantic-ui-react'
import {countries} from '../countries'
import {Link} from 'react-router-dom'

const names = ['home', 'search', 'lottery', 'about']

class MenuBar extends React.Component {

  constructor(props) {
    super(props)
    const {active} = this.props

    this.state = {
      activeItem: active === '/' ? 'home' : active.replace(/\//g, '')
    }
  }

  render() {
    const {activeItem} = this.state
    return (
      <Container>
        <Menu
          pointing
          style={{marginBottom: '1.5em'}}
          inverted={activeItem === 'lottery'}
        >
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
            {activeItem === 'lottery' ? <Button
                inverted
                color='blue'
                onClick={() => location.reload()}
              >Refresh</Button> :
              <Dropdown
                button
                className='icon'
                icon='world'
                trigger={<Flag name={this.props.country}/>}
                options={countries}
                onChange={(e, data) => this.props.selectCountry(data.value)}
                style={{backgroundColor: '#ffffff'}}
              />
            }
          </Menu.Menu>
        </Menu>
      </Container>
    )
  }
}

export default MenuBar
