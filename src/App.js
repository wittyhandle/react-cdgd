import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Login from './admin/login';
import { PrivateRoute } from './components/privateRoute';
import Home from './components/home';
import Foo from './components/foo';
import Admin from './admin/admin';

class App extends Component {
  render() {
    return (
        <div>
          <Navbar inverse>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">CDGD</Link>
                  <Link to="/foo">foo</Link>
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
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/foo" component={Foo}/>
                <Route exact path="/login" component={Login}/>
                <PrivateRoute path="/admin" component={Admin} />
              </Switch>
            </Grid>
          </main>
        </div>
    );
  }
}

export default App;
