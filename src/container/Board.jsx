import React from 'react'
import NewsItem from '../components/NewsItem'
import { host, headliners } from '../urls';
import { Container, Grid, Segment, Dimmer, Loader, Image } from 'semantic-ui-react'

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      news: [],
      count: 0,
      loading: true,
    }
  }

  componentDidMount() {
    const country = 'us'
    fetch(`${host}${headliners}${country}&apiKey=44e86b33c2e34200be71cd982fb9d981`)
      .then(response => response.json())
      .then(data => this.setState({ news: data.articles, count: data.totalResults, loading: false }))
  }

  render() {
    const { news, loading } = this.state
    return !loading ? (
      <div>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                {
                  news.map((i, index) => (
                    <NewsItem key={index} data={i}/>
                  ))
                }
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    ) : (
      <Container>
        <Segment>
          <Dimmer active>
            <Loader indeterminate>Preparing Files</Loader>
          </Dimmer>

          <Image src='../../images/short-paragraph.png'/>
        </Segment>
      </Container>
    );
  }
}


export default Board