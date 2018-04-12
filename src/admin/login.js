import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';
import { Button, Col, FormControl, FormGroup, PageHeader, Panel, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';

/***
 * Acts as a gateway to ensure routes defined below are protected against
 * users not logged in
 */
class Login extends React.Component {

  constructor(props) {
    super(props);

    // The Login component keeps an internal state for the collected credentials from the form.
    // This will get passed onto the login action and reflected in the redux store
    this.state = {
      credentials: {
        username: '',
        password: '',
      },
    };

    this.onChange = this.onChange.bind(this);
    this.doLogin = this.doLogin.bind(this);
  }

  onChange(event) {
    let credState = this.state;
    credState.credentials[event.target.id] = event.target.value;
    return this.setState(credState);
  }

  doLogin(event) {
    event.preventDefault();
    this.props.actions.login(this.state.credentials);
  }

  render() {

    let feedback = this.props.loginFailed ?
        <Panel style={ { marginTop: '20px' } } header={ 'Failed Login' } bsStyle="danger"/> :
        null;

    return (
        <div>
          <Row>
            <Col>
              <PageHeader>Login</PageHeader>
            </Col>
          </Row>
          <Row>
            <Col lg={6} lgOffset={3}>
              <div>
                <form>
                  <FormGroup controlId="username">
                    <FormControl
                        type="text"
                        placeholder="Enter username"
                        onChange={this.onChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="password">
                    <FormControl
                        type="password"
                        placeholder="Enter password"
                        onChange={this.onChange}
                    />
                  </FormGroup>
                  <Button
                      type="submit"
                      onClick={this.doLogin}
                  >Submit</Button>
                </form>
              </div>
              {feedback}
            </Col>
          </Row>
        </div>
    );

  }

}

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    currentUrl: ownProps.location.pathname,
    loginFailed: state.auth.loginFailed,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
