import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Photos from './components/Photos/Photos';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <Navbar className="center" collapseOnSelect>
            <Navbar.Header>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer className="nav-text" activeClassName="active-nav" exact={true} to="/">
                  <NavItem eventKey={1}>Home</NavItem>
                </LinkContainer>
                <LinkContainer className="nav-text" activeClassName="active-nav" to="/photos">
                  <NavItem eventKey={2}>Our Photos</NavItem>
                </LinkContainer>
                <LinkContainer className="nav-text" activeClassName="active-nav" to="/info">
                  <NavItem eventKey={3}>Wedding Info</NavItem>
                </LinkContainer>
                <LinkContainer className="nav-text" activeClassName="active-nav" to="/party">
                  <NavItem eventKey={4}>Wedding Party</NavItem>
                </LinkContainer>
                <LinkContainer className="nav-text" activeClassName="active-nav" to="/registry">
                  <NavItem eventKey={5}>Registry</NavItem>
                </LinkContainer>
                <LinkContainer className="nav-text" activeClassName="active-nav" to="/rsvp">
                  <NavItem eventKey={6}>RSVP</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact={true} path="/" component={Home}/>
          <Route path="/photos" component={Photos}/>
        </Grid>
      </Router>
    );
  }
}

export default App;
