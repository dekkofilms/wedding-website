import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class WeddingInfo extends Component {
  render() {
    return (
      <div className="main-container">
        <Row className="splash-text-container">
          <Col xs={12} style={{textAlign: 'center'}}>
            <div style={{marginBottom: 30}}>
              <p className="info-header">WHERE:</p>
              <p className="info-text">111 East St.</p>
              <p className="info-text">Hutto, Texas</p>
            </div>
            <div>
              <p className="info-header">WHEN:</p>
              <p className="info-text">Friday November 3rd, 2017</p>
              <p className="info-text">5:30pm</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default WeddingInfo;
