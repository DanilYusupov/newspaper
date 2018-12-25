import React from 'react'
import { Container, Segment, Dimmer, Loader, Image } from 'semantic-ui-react'

const Loading = () => (
  <Container>
    <Segment>
      <Dimmer active>
        <Loader indeterminate>Preparing Files</Loader>
      </Dimmer>
      <Image src='../../images/short-paragraph.png'/>
    </Segment>
  </Container>
)

export default Loading