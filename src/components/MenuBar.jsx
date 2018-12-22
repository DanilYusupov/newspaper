import React from 'react'
import {Menu} from 'semantic-ui-react'

const names = ['home', 'search', 'lottery', 'about']

const MenuBar = () => (
  <Menu pointing>
    {names.map(i => (
      <Menu.Item name={i} key={i} onClick={() => console.log(i)} />
    ))}
  </Menu>
)

export default MenuBar