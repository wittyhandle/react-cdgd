import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Grid, Navbar, Nav } from 'react-bootstrap';

import { PrivateRoute } from './components/privateRoute';
import Home from './components/home';
import Admin from './admin/admin';
import Login from './admin/login';
import LoginLink from './components/admin/loginLink';

class App extends Component {
  render() {
    return (
        <div id="cdgd">
          <Navbar>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">CDGD</Link>
                </Navbar.Brand>
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <LoginLink/>
                </Nav>
              </Navbar.Collapse>
            </Grid>
          </Navbar>
          <main>
            <Grid>
              <Switch>
                <Route exact path="/" component={Home}/>
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
