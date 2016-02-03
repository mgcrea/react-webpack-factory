import {createStore, compose} from 'redux';

import DevTools from 'containers/DevTools';
import rootReducer from './reducer';

export default function configureStore(initialState) {
  const store = compose(DevTools.instrument())(createStore)(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
