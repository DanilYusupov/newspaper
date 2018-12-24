import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

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
        </Menu>
      </Container>
    )
  }
}

export default MenuBar