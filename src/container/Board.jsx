import React from 'react'
import {Grid, Item} from 'semantic-ui-react'
import NewsItem from '../components/NewsItem'
import {host, headliners} from "../urls";

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      news: [],
      count: 0,
    }
  }

  componentDidMount() {
    const country = 'us'
    fetch(`${host}${headliners}${country}&apiKey=44e86b33c2e34200be71cd982fb9d981`)
      .then(response => response.json())
      .then(data => this.setState({news: data.articles, count: data.totalResults}))
  }

  render() {
    const {news} = this.state
    return (
      <div>
        <Grid columns={4} divided>
          <Grid.Row>
            <Item.Group divided>
              {news.map((i, index) => (
                <NewsItem key={index} data={i}/>
              ))}
            </Item.Group>
          </Grid.Row>
        </Grid>
      </div>
    )
  }

}

export default Board