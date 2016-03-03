/* eslint-disable */

import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
import DevTools from 'containers/DevTools';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from './reducer';
import {browserHistory} from 'react-router';

// const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(routerMiddleware(browserHistory), thunkMiddleware),
      __DEV__ ? DevTools.instrument() : undefined
      // __DEV__ ? applyMiddleware(loggerMiddleware) : undefined
    )
  );

  if (__DEV__ && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
