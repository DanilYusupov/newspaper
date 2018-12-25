import React from 'react'
import {Container, Segment, Input, Header, Icon} from 'semantic-ui-react'

class SearchBar extends React.Component {

  render() {
    return (
      <Container>
        <Segment placeholder color='black'>
          <Header icon>
            <Icon name='newspaper outline'/>
            Find news by keyword
          </Header>
          <Input
            placeholder='Search...'
            icon={{name: 'search', circular: true, link: true}}
          />
        </Segment>
      </Container>
    )
  }
}

export default SearchBar
