import React, { Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class Rsvp extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      attending: 'Yes'
    }

    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleRadioChange(attending) {
    this.setState({ attending });
  }

  render() {
    return (
      <div className="rsvp-wrapper">
        <form action="https://docs.google.com/forms/d/e/1FAIpQLSdgY2K-cxWk4KEO9Nd6TkhZjLqlA0qbKNbw2hCpkImLCCqyqQ/formResponse" target="_blank">
          <Row className="form-row">
            <Col md={8} mdOffset={2} xs={12}>
              <FormGroup controlId="formBasicText">
                <ControlLabel className="form-label">What is your name?</ControlLabel>
                <FormControl
                  className="short-input-field"
                  name="entry.794282248"
                  type="text"
                  autoFocus={true}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="form-row">
            <Col md={8} mdOffset={2} xs={12}>
              <FormGroup controlId="formBasicText">
                <ControlLabel className="form-label">What is your email?</ControlLabel>
                <FormControl
                  className="short-input-field"
                  name="entry.1982348805"
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="form-row">
            <Col md={8} mdOffset={2} xs={12}>
              <FormGroup>
                <ControlLabel className="form-label">Will you be attending?</ControlLabel>
                <div style={{paddingLeft: 42, paddingRight: 42}}>
                  <RadioGroup onChange={this.handleRadioChange} horizontal>
                    <RadioButton rootColor="#E0E0E0" pointColor="#212121" value="Yes">
                      Yes
                    </RadioButton>
                    <RadioButton rootColor="#E0E0E0" pointColor="#212121" value="No">
                      No
                    </RadioButton>
                    <input type="hidden" name="entry.1106972459" value={this.state.attending} />
                  </RadioGroup>
                </div>
              </FormGroup>
            </Col>
          </Row>
          <Row className="form-row">
            <Col md={8} mdOffset={2} xs={12}>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel className="form-label">How many in party?</ControlLabel>
                <FormControl className="short-input-field styled-select" name="entry.1078287513" componentClass="select" placeholder="select">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                </FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2} xs={12}>
              <Button bsClass="custom-button" className="pull-right" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default Rsvp;

// <FormGroup>
//   <ControlLabel className="form-label">Will you be attending?</ControlLabel>
//   <Row style={{paddingLeft: 42}}>
//     <Col xs={12}>
//       <Radio name="entry.1106972459" value="Yes" inline>
//         Yes
//       </Radio>
//     </Col>
//   </Row>
//   <Row style={{paddingLeft: 42}}>
//     <Col xs={12}>
//       <Radio name="entry.1106972459" value="No" inline>
//         No
//       </Radio>
//     </Col>
//   </Row>
// </FormGroup>
