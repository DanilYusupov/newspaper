import React from 'react'
import { Container, Grid, Pagination } from 'semantic-ui-react'
import Loadable from 'react-loadable'
import LoadingComponent from './LoadingComponent'

// Dynamic imports

const NewsItem = Loadable({
  loader: () => import('../components/NewsItem'),
  loading: () => <LoadingComponent/>,
})

// NewsList component

class NewsList extends React.Component {
  render() {
    const { news, activePage } = this.props.data
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              {
                news.map((i) => (
                  <NewsItem key={i.url} data={i}/>
                ))
              }
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Pagination
                activePage={activePage}
                onPageChange={this.props.handlePageChange}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                totalPages={this.props.pageSize}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default NewsList
