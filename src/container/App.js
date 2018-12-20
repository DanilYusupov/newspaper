import React from 'react'
import Board from './Board'
import MenuBar from '../components/MenuBar'
import {Header, Icon, Menu, Button, Grid} from 'semantic-ui-react'

class App extends React.Component {

  render() {
    return (
      <div>
        <Grid celled='internally'>
          <Grid.Row textAlign='center'>
            <Grid.Column>
              <Header as='h2' icon>
                <Icon name='newspaper'/>
                Magic Newspaper
                <Header.Subheader>Only the most interesting news </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <MenuBar/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Board/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }

}

export default App