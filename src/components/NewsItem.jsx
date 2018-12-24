import React from 'react'
import { Item, Label, Segment} from 'semantic-ui-react'

class NewsItem extends React.Component {

  render() {
    const { data } = this.props
    const img = data.urlToImage ? data.urlToImage : '../../images/square-image.png'
    return (
      <div>
        <Segment raised>
          <Item.Group>
            <Item style={{
              marginBottom: 2 + 'em',
              backgroundColor: '#ffffff',
            }}>
              <Item.Image src={img} onClick={this.handleOpen}
                          style={{
                            minHeight: '100%',
                            overflow: 'hidden',
                            objectFit: 'cover',
                          }}/>
              <Item.Content>
                <Item.Header as='a' href={data.url}>{data.title}</Item.Header>
                <Item.Meta>
                  <span className='cinema'>{data.source.name}</span>
                </Item.Meta>
                <Item.Description>{data.description}</Item.Description>
                <Item.Extra>
                  {data.author !== null && <Label icon='user' content={data.author}/>}
                  {data.publishedAt !== null &&
                  <Label icon='time' content={`published at: ${date(data.publishedAt)}`}/>}
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </div>
    )
  }
}

function date(jsonDate) {
  const d = new Date(jsonDate)
  return `${d.getUTCDate()}.${d.getUTCMonth()}.${d.getUTCFullYear()} at ${d.getHours()}:${d.getUTCMinutes()}`
}

export default NewsItem