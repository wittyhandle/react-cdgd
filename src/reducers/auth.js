import assign from 'lodash/assign'
import * as types from '../actions/action-types'


const token = sessionStorage.getItem('cdgd-jwt')

const initialState = {
  redirectTo: '',
  isLoggedIn: !!token,
  loginInProgress: false,
  loginSucceeded: false,
  loginFailed: false
}

export default (state = initialState, action) => {

  switch (action.type) {

    case types.AUTH_PERFORM_REDIRECT:
      return assign({}, state,
          {
            redirectTo: action.redirectTo
          })

    case types.AUTH_LOGIN_START:
      return assign({}, state,
          {
            loginInProgress: true,
            loginFailed: false,
            loginSucceeded: false
          })

    case types.AUTH_LOGIN_FAILED:
      return assign({}, state,
          {
            loginInProgress: false,
            isLoggedIn: false,
            loginFailed: true,
            loginSucceeded: false
          })

    case types.AUTH_LOGIN_SUCCEEDED:
      // will also set the jwt token to state as well
      return assign({}, state,
          {
            loginInProgress: false,
            isLoggedIn: true,
            loginFailed: false,
            loginSucceeded: true
          })
    default:
      return state
  }

}
