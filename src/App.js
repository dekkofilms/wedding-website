import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Photos from './components/Photos/Photos';
import WeddingInfo from './components/WeddingInfo/WeddingInfo';
import Party from './components/WeddingParty/Party';
import Rsvp from './components/RSVP/Rsvp';

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

                <li role="presentation"><a href="https://www.blueprintregistry.com/registry/SamanthaandTaylor11.03.17" target="_blank">Registry</a></li>

                <LinkContainer className="nav-text" activeClassName="active-nav" to="/rsvp">
                  <NavItem eventKey={6}>RSVP</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact={true} path="/" component={Home}/>
          <Route path="/photos" component={Photos}/>
          <Route path="/info" component={WeddingInfo}/>
          <Route path="/party" component={Party}/>
          <Route path="/rsvp" component={Rsvp}/>
        </Grid>
      </Router>
    );
  }
}

export default App;
