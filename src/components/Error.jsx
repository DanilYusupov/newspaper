import React from 'react'
import {Container, Message, Icon} from 'semantic-ui-react'

const Error = ({error}) => (
  <Container>
    <Message negative>
      <Message.Header>
        <Icon name='warning'/> Something went wrong.
      </Message.Header>
      <p>{error}</p>
    </Message>
  </Container>
)

export default Error
