import React from 'react'
import {connect} from 'react-redux'
import * as authActions from '../actions/auth'
import {Grid, Jumbotron } from 'react-bootstrap'
import {bindActionCreators} from 'redux'


/***
 * Acts as a gateway to ensure routes defined below are protected against
 * users not logged in
 */
class Login extends React.Component {

  render() {

    return (
        <Jumbotron>
          <Grid>
            <h1>Login</h1>
          </Grid>
        </Jumbotron>
    )

  }

}

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: false,
    currentUrl: ownProps.location.pathname
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)