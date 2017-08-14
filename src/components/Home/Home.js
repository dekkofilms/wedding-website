import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import DingusCounter from './DingusCounter';

const {SparkScroll, SparkProxy} = require('../../App-Spark');

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Row className="splash-text-container">
          <Col xs={12}>
            <div style={{textAlign: 'center'}}>
              <h1>Samantha & Taylor</h1>
            </div>
          </Col>
        </Row>
        <Row className="center-items-middle-screen">
          <Col xs={12} sm={6} md={6} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <SparkScroll.span
              timeline={{
                topBottom: { marginLeft: '-500px', opacity: 0 },
                centerCenter: { marginLeft: '0px', opacity: 1, ease: 'bouncePast' }
              }}
            >
              <img className="us-image" src={require('../../assets/images/samantha.jpg')} alt="" />
            </SparkScroll.span>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <div>
              <h4 className="body-accent" style={{color: '#c9d8c5'}}>Bride</h4>
              <h2 className="body-header">SAMANTHA SPILLMAN</h2>
              <p className="body-text">Samantha has lived in Austin nearly her whole life. She was born in Denver, Colorado and her family moved to Austin when she was less than a year old. After graduating from Texas State University in 2010, she pursued a career in social work and currently works for Austin Oaks Hospital educating the community about mental health services.</p>
            </div>
          </Col>
        </Row>
        <Row className="center-items-middle-screen">
          <Col xs={12} sm={6} md={6}>
            <div>
              <h4 className="body-accent" style={{color: '#a8b6bf'}}>Groom</h4>
              <h2 className="body-header">TAYLOR KING</h2>
              <p className="body-text">Born in raised in the Amazon forest by wolves ... it took me a while to figure out how to bathe without licking myself. Soon after meeting Sam I realized that according to her I needed to actually bathe with water and soap. Oh, and that soap for your body is different than soap for you face. Even though it's all just skin?</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <SparkScroll.span
              timeline={{
                topBottom: { marginRight: '-500px', opacity: 0 },
                centerCenter: { marginRight: '0px', opacity: 1, ease: 'bouncePast' }
              }}
            >
              <img className="us-image" src={require('../../assets/images/taylor.jpg')} alt="" />
            </SparkScroll.span>
          </Col>
        </Row>
        <Row className="center-items-middle-screen">
          <Col xs={12} sm={6} md={6} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <SparkScroll.span
              timeline={{
                topBottom: { marginLeft: '-500px', opacity: 0 },
                centerCenter: { marginLeft: '0px', opacity: 1, ease: 'bouncePast' }
              }}
            >
              <img className="us-image" src={require('../../assets/images/us.jpg')} alt="" />
            </SparkScroll.span>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <div>
              <h4 className="body-accent" style={{color: '#edd9c0'}}>Together</h4>
              <h2 className="body-header">HOW WE MET</h2>
              <p className="body-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </Col>
        </Row>
        <div>
          <DingusCounter />
        </div>
      </div>
    );
  }
}

export default App;
