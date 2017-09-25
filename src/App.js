import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import {Grid, Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import AuthHandler from './admin/auth-handler'
import Home from './home'
import Login from './admin/login'

class App extends Component {
  render() {
    return (
        <div>
          <Navbar inverse>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">CDGD</Link>
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
            <Grid>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/admin" component={AuthHandler} />
              </Switch>
            </Grid>
          </main>
        </div>
    );
  }
}

export default App;