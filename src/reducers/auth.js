import assign from 'lodash/assign'
import * as types from '../actions/action-types'


const initialState = {
  redirectTo: '',
  isLoggedIn: false
}

export default (state = initialState, action) => {

  switch (action.type) {
    case types.AUTH_PERFORM_REDIRECT:
      return assign({}, state, { redirectTo: action.to })
    default:
      return state
  }

}