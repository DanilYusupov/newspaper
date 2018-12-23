import React from 'react'
import {Segment, Container, Grid, List, Header} from 'semantic-ui-react'

export const Footer = () => {
  return (
    <Segment inverted vertical style={{padding: '5em 0em', marginTop: '1.5em'}}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Partners' />
              <List link inverted>
                <List.Item as='a' href='https://newsapi.org/'>Powered by NewsAPI.org</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <List inverted>
                <List.Item>Made by Danil Yusupov</List.Item>
                <List.Item>for educational purposes</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}