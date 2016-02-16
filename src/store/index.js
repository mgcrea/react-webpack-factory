import {createStore, applyMiddleware, compose} from 'redux';
import {browserHistory} from 'react-router';
import {syncHistory} from 'react-router-redux';

import DevTools from 'containers/DevTools';
import rootReducer from './reducer';

const reduxRouterMiddleware = syncHistory(browserHistory);

export default function configureStore(initialState) {
  // const store = compose(DevTools.instrument(), applyMiddleware(reduxRouterMiddleware))(createStore)(rootReducer, initialState);
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(reduxRouterMiddleware),
      DevTools.instrument()
    )
  );

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
