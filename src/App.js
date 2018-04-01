import React, { Component } from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Login from './admin/login';
import { PrivateRoute } from './components/privateRoute';
import Home from './components/home';
import Admin from './admin/admin';
import { history } from './components/history';

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
                <Navbar.Toggle/>
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
              <Router history={history}>
                <div>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/login" component={Login}/>
                  <PrivateRoute exact path="/admin" component={Admin}/>
                </div>
              </Router>
            </Grid>
          </main>
        </div>
    );
  }
}

export default App;
