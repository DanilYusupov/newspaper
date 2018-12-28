import React from 'react'
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

const Footer = () => {
  return (
    <Container>
      <Segment vertical style={{ padding: '5em 0em', marginTop: '1.5em', marginLeft: '2em' }}>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as='h4' content='Partners'/>
              <List link>
                <List.Item as='a' href='https://newsapi.org/'>Powered by NewsAPI.org</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3} floated='right'>
              <List>
                <List.Item>Made by Danil Yusupov</List.Item>
                <List.Item>for educational purposes</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  )
}

export default Footer
