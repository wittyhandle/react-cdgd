import * as types from './action-types'

export const performRedirect = (to) => {
  return {
    type: types.AUTH_PERFORM_REDIRECT,
    to
  }
}