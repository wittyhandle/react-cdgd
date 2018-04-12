import * as types from './action-types';
import { doLogin } from '../services/auth';
import { history } from '../store';

export const performRedirect = (redirectTo) => ({
    type: types.AUTH_PERFORM_REDIRECT,
    redirectTo,
  }
);

export const login = (credentials) => (

  dispatch => {
    dispatch(loginStart());
    doLogin(credentials.username, credentials.password)
      .then(
        user => {
          dispatch(loginSucceeded(user));
          history.push('/admin');
        },
        error => {
          dispatch(loginFailed(error));
        }
      );
  }

);

export const loginStart = () => ({
    type: types.AUTH_LOGIN_START,
  }
);

export const loginFailed = () => ({
    type: types.AUTH_LOGIN_FAILED,
  }
);

/***
 * Succeeded
 */
export const loginSucceeded = (user) => ({
    type: types.AUTH_LOGIN_SUCCEEDED,
    user,
  }
);
