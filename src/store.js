import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExt = window.devToolsExtension

  if (typeof devToolsExt === 'function') {
    enhancers.push(devToolsExt())
  }
}

export const history = createHistory()

const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(
          thunk,
          createLogger()
      ),
      ...enhancers
  )
);

export default store;