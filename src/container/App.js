import React from 'react'
import Board from './Board'
import MenuBar from '../components/MenuBar'
import {Header, Icon, Container, Grid, Divider} from 'semantic-ui-react'

class App extends React.Component {

  render() {
    return (
      <div>
        <Container>

          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header as='h2' icon style={{
                  marginLeft: 1.1 + 'em',
                  marginTop: 1 + 'em'
                }}>
                  <Icon name='newspaper'/>
                  Magic Newspaper
                  <Header.Subheader>Only the most interesting news </Header.Subheader>
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid>
            <Grid.Row>
                <MenuBar/>
            </Grid.Row>

            <Grid.Row>
                <Board/>
            </Grid.Row>

            <Divider/>

            <Grid.Row>
              Powered by NewsAPI.org
            </Grid.Row>
          </Grid>

        </Container>
      </div>
    )
  }

}

export default App