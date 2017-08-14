import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Photos extends Component {
  render() {
    return (
      <div className="main-container">
        <Row className="splash-text-container">
          <Col xs={12}>
            <div style={{textAlign: 'center'}}>
              <p>Photos coming soon!</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Photos;
