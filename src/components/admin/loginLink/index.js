import React from 'react';
import { isAuthenticated, signOut } from '../../../services/auth';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router-dom/es';

const LoginLink = withRouter(({ history }) => (
  isAuthenticated() ? (
    <LinkContainer to="/logout">
      <NavItem onSelect={ () => {
        signOut(() => {
          history.push('/');
        });
      }}
      >Logout</NavItem>
    </LinkContainer>
  ) : (
    <LinkContainer to="/login">
      <NavItem>Login</NavItem>
    </LinkContainer>
  )
));

export default LoginLink;
