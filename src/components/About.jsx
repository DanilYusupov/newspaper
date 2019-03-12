import React from 'react'
import {Container, Segment, Header, Icon, Image, Label} from 'semantic-ui-react'
import ocajp from '../../images/ocajp.png'

const About = () => (
  <Container>
    <Segment>
      <Header as='h2' icon textAlign='center'>
        <Icon name='hand peace outline' circular/>
        <Header.Content>About</Header.Content>
      </Header>
      <h3>What is it?</h3>
      <p>
                This is isomorphic web application, which provides any requested news. It was made to improve my codding
                skills
                in React and understand interaction with external RESTful API.
      </p>
      <h3>What technologies I'm using here?</h3>
      <p>
                As the core technology I chose <strong>
          <Label as='a' size='tiny' basic image href='https://reactjs.org/'>
            <img src='../../images/react-logo.svg'/>
                    ReactJS
          </Label></strong>.
                Also, I'm using here such profit libraries as <strong>
          <Label as='a' size='tiny' basic image href='https://redux.js.org/'>
            <img src='../../images/redux.svg'/>
                    Redux
          </Label></strong> and
        <strong>
          <Label as='a' size='tiny' basic image href='https://github.com/ReactTraining/react-router'>
            <img src='../../images/react-router.png'/>
                        React Router
          </Label>
        </strong>.
                Maybe I'll add something new here soon...
      </p>
      <p>
                As external API I chose <a href='https://newsapi.org/'>this</a> API. It's pretty simple
                and have got a lot of endpoints, that makes my application more functionally.
      </p>
      <Header as='h3'>
                Who am I?
        <div>
          <div style={{display: 'inline'}}>
            <a href="https://www.youracclaim.com/badges/8a187163-966c-4a47-b1f2-5c0079f328af/public_url">
              <img style={{width: '80px', marginBottom: '-35px'}} src={ocajp}/>
            </a>
          </div>
          <Image style={{width: '80px', display: 'inline-block', marginLeft: '5px'}}
            circular src='../../images/Danil.jpg'/>
        </div>
      </Header>
      <p>
                My name is Danil Yusupov and I'm Junior Software developer and also Oracle Certified Associate,
                Java SE 8 Programmer. This is my educational task. I hope, that in future I'll return to this app
                and I'll be thankful to my past me...
      </p>
    </Segment>
  </Container>
)

export default About
