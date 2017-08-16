import React, { Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Radio, Button } from 'react-bootstrap';

class Rsvp extends Component {
  constructor(props, context) {
    super(props, context);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="main-container">
      </div>
    );
  }
}

export default Rsvp;

// <form action="https://docs.google.com/forms/d/e/1FAIpQLSdgY2K-cxWk4KEO9Nd6TkhZjLqlA0qbKNbw2hCpkImLCCqyqQ/formResponse" onSubmit={this.onFormSubmit}>
//   <Row>
//     <Col md={8} mdOffset={2} xs={12}>
//       <FormGroup controlId="formBasicText">
//         <ControlLabel>What is your name?</ControlLabel>
//         <FormControl
//           name="entry.794282248"
//           type="text"
//           placeholder="Enter text"
//         />
//       </FormGroup>
//     </Col>
//   </Row>
//   <Row>
//     <Col md={8} mdOffset={2} xs={12}>
//       <FormGroup controlId="formBasicText">
//         <ControlLabel>What is your email address?</ControlLabel>
//         <FormControl
//           name="entry.1982348805"
//           type="text"
//           placeholder="Enter text"
//         />
//       </FormGroup>
//     </Col>
//   </Row>
//   <Row>
//     <Col md={8} mdOffset={2} xs={12}>
//       <FormGroup>
//         <ControlLabel>Will you be attending?</ControlLabel>
//         <Row style={{paddingLeft: 10}}>
//           <Col xs={12}>
//             <Radio name="entry.1106972459" value="Yes" inline>
//               Yes
//             </Radio>
//           </Col>
//         </Row>
//         <Row style={{paddingLeft: 10}}>
//           <Col xs={12}>
//             <Radio name="entry.1106972459" value="No" inline>
//               No
//             </Radio>
//           </Col>
//         </Row>
//       </FormGroup>
//     </Col>
//   </Row>
//   <Row>
//     <Col md={8} mdOffset={2} xs={12}>
//       <FormGroup controlId="formControlsSelect">
//         <ControlLabel>How many in your party?</ControlLabel>
//         <FormControl name="entry.1078287513" componentClass="select" placeholder="select">
//           <option value="select">Choose number...</option>
//           <option value="1">One</option>
//           <option value="2">Two</option>
//           <option value="3">Three</option>
//           <option value="4">Four</option>
//           <option value="5">Five</option>
//           <option value="6">Six</option>
//         </FormControl>
//       </FormGroup>
//     </Col>
//   </Row>
//   <Row>
//     <Col md={8} mdOffset={2} xs={12}>
//       <Button className="pull-right" type="submit">
//         Submit
//       </Button>
//     </Col>
//   </Row>
// </form>
