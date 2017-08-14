import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class DingusCounter extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const self = this;

    setInterval(() => {
      self.setState({count: self.state.count + 1});
    }, 1000*10)
  }

  render() {
    return (
      <div className="dingus-container">
        <Row>
          <Col xs={12}>
            <div>
              <h4 className="body-accent" style={{color: '#a8b6bf'}}>Dingus Counter</h4>
              <h2 className="body-header">
                AMOUNT OF TIMES TAYLOR HAS SAID IT SINCE YOU HAVE BEEN HERE
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div>
              <p className="dingus-number">{this.state.count}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DingusCounter;
