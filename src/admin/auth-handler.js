import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route, Switch} from 'react-router-dom'
import Admin from './admin'
import * as authActions from '../actions/auth'
import {bindActionCreators} from 'redux'


/***
 * Acts as a gateway to ensure routes defined below are protected against
 * users not logged in
 */
class AuthHandler extends React.Component {

  componentDidMount() {
    const {isLoggedIn, currentUrl} = this.props
    if (!isLoggedIn) {
      this.props.actions.performRedirect(currentUrl)
    }
  }

  render() {

    const {isLoggedIn} = this.props

    if (isLoggedIn) {
      return (
          <Switch>
            <Route exact path='/admin' component={Admin}/>
          </Switch>
      )
    } else {
      return (
          <Redirect to="/" />
      )
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(AuthHandler)