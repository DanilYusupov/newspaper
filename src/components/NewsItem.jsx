import React from 'react'
import {Item, Label} from 'semantic-ui-react'

class NewsItem extends React.Component {
  render() {
    const {data} = this.props
    return (
      <Item>
        <Item.Image size='small' src={data.urlToImage}/>

        <Item.Content>
        <Item.Header>{data.title}</Item.Header>
          <Item.Meta>
            <span className='cinema'>{data.source.name}</span>
          </Item.Meta>
          <Item.Description>{data.description}</Item.Description>
          <Item.Extra>
            { data.author !== null && <Label icon='user' content={data.author}/>}
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

export default NewsItem