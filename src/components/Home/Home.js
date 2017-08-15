import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import DingusCounter from './DingusCounter';

// eslint-disable-next-line
const {SparkScroll, SparkProxy} = require('../../App-Spark');

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Row className="splash-text-container">
          <Col xs={12}>
            <div style={{textAlign: 'center'}}>
              <h1>Taylor & Samantha</h1>
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
              <p className="body-text" style={{marginBottom: 20}}>Taylor is truly my best friend. He has the kindest heart and extends so much grace to me in my messiest moments. He is the person who makes me laugh the most, but also the person who tells me truth when I need to hear it. From the beginning I’ve admired his leadership, humility and desire to love others well. I couldn’t dream of a better adventure partner for the rest of my life.</p>
              <h4 className="fact-accent-title" style={{color: '#a8b6bf'}}>FUN FACTS ABOUT TAYLOR</h4>
              <ul>
                <li className="bullet-color">
                  <span className="bullet-text">His favorite word to say is Dingus. If he calls you a Dingus it means he thinks very highly of you</span>
                </li>
                <li className="bullet-color">
                  <span className="bullet-text">He always keeps crochet hooks in his backpack just in case he meets an old lady who will teach him how to crochet</span>
                </li>
                <li className="bullet-color">
                  <span className="bullet-text">He loves Russian fairytales</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="center-items-middle-screen">
          <Col xs={12} sm={6} md={6}>
            <div>
              <h4 className="body-accent" style={{color: '#a8b6bf'}}>Groom</h4>
              <h2 className="body-header">TAYLOR KING</h2>
              <p className="body-text">I really got to know Sam when she was on a trip with me in Turkey, and I immediately knew she was far far FAR out of my league. She is one of the most patient and servant-hearted people I have ever met. She has always been supportive, encouraging, and very sacrificial in her love towards me. I can't wait to spend the rest of my life with someone like her! I'm so lucky!</p>
              <h4 className="fact-accent-title" style={{color: '#c9d8c5'}}>FUN FACTS ABOUT SAMANTHA</h4>
              <ul>
                <li className="bullet-color" style={{color: '#a8b6bf'}}>
                  <span className="bullet-text">Her favorite movie genre is b-level horror movies</span>
                </li>
                <li className="bullet-color" style={{color: '#a8b6bf'}}>
                  <span className="bullet-text">She is not competitive UNLESS you are playing her in ping-pong</span>
                </li>
                <li className="bullet-color" style={{color: '#a8b6bf'}}>
                <span className="bullet-text">She is an amazing esthetician!</span>
                </li>
              </ul>
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
              <p className="body-text">If you asked us when we first met you would get two different stories. We attended the same church service for over a year and had several mutual friends, but only knew each other as acquaintances. Fast forward to June 2015, Taylor was leading a short term mission trip to Turkey and Samantha was on the team. We both conveniently ended up in the same prayer group and got to spend 10 days adventuring through Turkey together. This trip was very special to both of us as we got to learn a lot about each other and about God. Once we got home from Turkey, our friendship quickly grew into more. We finally went on our first date on July 14, 2015. We went to our favorite coffee shop to “read” together but ended up talking for hours about life, books, movies, God and our hopes for the future. The rest is history and we are so excited to start our lives together as husband and wife!</p>
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
