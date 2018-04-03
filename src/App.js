import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';

import { PrivateRoute } from './components/privateRoute';
import Home from './components/home';
import Works from './components/works';
import Admin from './admin/admin';
import Login from './admin/login';
import LoginLink from './components/admin/loginLink';

class App extends Component {
  render() {
    return (
        <div id="cdgd">
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">CDGD</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <LinkContainer to="/works"><NavItem>Works</NavItem></LinkContainer>
            </Nav>
            <Nav pullRight>
              <LoginLink/>
            </Nav>
          </Navbar>

          <main>
            <Grid>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/works" component={Works}/>
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
