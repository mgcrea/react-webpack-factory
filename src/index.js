import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import DevTools from 'containers/DevTools';
import RedBox from 'redbox-react';

import configureStore from 'store';
const store = configureStore();
import configureRoutes from 'routes';
const rootEl = document.getElementById('root');

let render = () => {
  // const configureRoutes = require('./routes').default;
  const routes = configureRoutes(store);
  ReactDOM.render(
    <Provider store={store}>
      <div>
        {routes}
        {__DEV__ ? <DevTools /> : ''}
      </div>
    </Provider>,
    rootEl
  );
};

if (false && module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render;
  const renderError = (error) => {
    ReactDOM.render(
      <RedBox error={error} />,
      rootEl
    );
  };
  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };
  // module.hot.accept('./containers/App', render);
  module.hot.accept('./routes', render);
}

render();
