import React from 'react'
import {Grid} from 'semantic-ui-react'
import Item from '../components/Item'

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      news : [],
    }
  }

  componentDidMount() {

  }

  render() {
    const {news} = this.state
    return (
      <div>
        <Grid columns={4} divided>
          <Grid.Row>
            {news.map(i => (
              <Item data={i}/>
            ))}
          </Grid.Row>
        </Grid>
      </div>
    )
  }

}

export default Board