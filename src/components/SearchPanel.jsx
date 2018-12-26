import React from 'react'
import NewsItem from './NewsItem'
import {Container, Segment, Header, Icon, Search} from 'semantic-ui-react'

const SearchPanel = ({callback, results}) => (
  <Container>
    <Segment placeholder color='black'>
      <Header icon>
        <Icon name='newspaper outline'/>
        Find news by keyword
      </Header>
      <Search
        onSearchChange={(e, d) => {
          callback(d.value)
        }}
        results={results}
        resultRenderer={SearchResultRenderer}
        input={{fluid: true}}
        fluid
       />
    </Segment>
  </Container>
)

const SearchResultRenderer = (data) => (
  <NewsItem data={data}/>
)

export default SearchPanel
