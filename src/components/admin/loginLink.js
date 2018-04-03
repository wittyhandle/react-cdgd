import React, { Component } from 'react';
import { isAuthenticated, signOut } from '../../services/auth';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom/es';

class LoginLink extends Component {

  render() {

    const history = this.props.history;

    return (
      isAuthenticated() ? (
        <LinkContainer to="/logout">
          <NavItem onSelect={ () => {
            signOut(() => {
              history.push('/');
            });
          }}
          >Logout</NavItem>
        </LinkContainer>
      ) : null
    );
  }

}

export default withRouter(LoginLink);
