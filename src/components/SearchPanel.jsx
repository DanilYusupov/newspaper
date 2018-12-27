import React from 'react'
import {Container, Segment, Header, Icon, Search} from 'semantic-ui-react'
import Loadable from 'react-loadable'
import LoadingComponent from './LoadingComponent'

// Dynamic imports

const NewsItem = Loadable({
  loader: () => import('../components/NewsItem'),
  loading: () => <LoadingComponent/>,
})

// Search panel component

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
