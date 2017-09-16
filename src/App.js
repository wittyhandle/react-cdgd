import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import {Grid, Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import AuthHandler from './admin/auth-handler'
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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/admin" component={AuthHandler} />
            </Switch>
          </main>
        </div>
    );
  }
}

export default App;