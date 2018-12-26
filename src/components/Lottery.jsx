import React from 'react'
import {Container, Segment, Grid} from 'semantic-ui-react'
import Anime from 'react-anime'
import anime from 'animejs'
import logo from '../../images/react-logo.svg'

const Lottery = () => (
  <Container>
    <Segment inverted>
      <Grid centered>
        <Grid.Row>
          <h2>Watch for my animation!</h2>
        </Grid.Row>
        <Grid.Row style={{height: '30em'}}>
          <Anime
            translateX={ function (el) {
              let r = anime.random(-1, 1);
              r = (r > 0) ? 1 : -1;
              return el.getAttribute('data-x') * r;
            }}
            translateY={ function (el, i) {
              return (-10 * i) + el.getAttribute('data-y') / 10;
            }}
            scale={function (el, i, l) {
              return (l - i) / 1.8;
            }}
            rotate={ function () {
              return anime.random(-180, 450);
            }}
            duration={function () {
              return anime.random(1200, 1800);
            }}
            delay={function () {
              return anime.random(0, 1000);
            }}
            direction='alternate'
            loop={true}
          >
            <img src={logo} data-x='190' data-y='220' className="App-logo" alt="logo"/>
            <img src={logo} data-x='120' data-y='350' className="App-logo" alt="logo"/>
            <img src={logo} data-x='300' data-y='500' className="App-logo" alt="logo"/>
          </Anime>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>
)

export default Lottery
