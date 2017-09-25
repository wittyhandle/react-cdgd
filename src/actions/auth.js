import * as types from './action-types'
import { history } from '../store'



export const performRedirect = (redirectTo) => {
  return {
    type: types.AUTH_PERFORM_REDIRECT,
    redirectTo
  }
}

export const doLogin = (credentials) => {
  return (dispatch) => {
    dispatch(loginStart())

    setTimeout(() => {

      if (credentials.username === 'mike' && credentials.password === 'password') {

        dispatch(loginSucceeded())
        sessionStorage.setItem('cdgd-jwt', 'fake')
        history.push('/admin')

      } else {
        dispatch(loginFailed())
      }

    }, 500)

  }
}

export const loginStart = () => {
  return {
    type: types.AUTH_LOGIN_START
  }
}

export const loginFailed = () => {
  return {
    type: types.AUTH_LOGIN_FAILED
  }
}

/***
 * Succeeded
 */
export const loginSucceeded = () => {
  return {
    type: types.AUTH_LOGIN_SUCCEEDED
  }
}