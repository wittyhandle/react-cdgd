import * as types from './action-types';
import { history } from '../store';

export const performRedirect = (redirectTo) => ({
    type: types.AUTH_PERFORM_REDIRECT,
    redirectTo,
  }
);

export const doLogin = (credentials) => ((dispatch) => {
    dispatch(loginStart());

    setTimeout(() => {

      if (credentials.username === 'mike' && credentials.password === 'password') {

        let user = {
          username: 'mike',
          password: 'password',
        };

        dispatch(loginSucceeded(user));
        sessionStorage.setItem('cdgd-jwt', 'fake');
        localStorage.setItem('user', JSON.stringify(user));
        history.push('/admin');

      } else {
        dispatch(loginFailed());
      }
    }, 500);
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
