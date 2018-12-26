import React from 'react'
import {Container, Header, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export const Logo = () => {
  return (
    <Container>
      <Header as='h2' icon style={{
        marginLeft: 1.1 + 'em',
        marginTop: 1 + 'em'
      }}>
        <Icon as='a' name='newspaper' />
        Magic Newspaper
        <Header.Subheader>Only the most interesting news </Header.Subheader>
      </Header>
    </Container>
  )
}
