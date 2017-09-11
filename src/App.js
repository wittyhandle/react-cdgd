import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import {Grid, Navbar, Nav, Jumbotron, Button, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Admin from './admin'
import Home from './home'

class App extends Component {
  render() {
    return (
        <div>
          <Navbar inverse fixedTop>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">CDGD</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <LinkContainer to="/admin">
                    <NavItem eventKey={1}>Admin</NavItem>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Grid>
          </Navbar>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
          </main>
        </div>
    );
  }
}

export default App;