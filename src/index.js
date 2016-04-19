import React from 'react';
import {render} from 'react-dom';
import {AppContainer as HotLoaderContainer} from 'react-hot-loader';

import configureStore from 'store';
const store = configureStore();
import configureRoutes from 'routes';
const routes = configureRoutes(store);

import Root from './containers/Root';
const rootEl = document.getElementById('root');

render(
  <HotLoaderContainer
    component={Root}
    props={{store, routes}}
  />,
  rootEl
);

if (__DEV__ && module.hot) {
  console.warn('in!');
  module.hot.accept('./containers/Root', () => {
    console.warn('hot! ./containers/Root');
    const nextRoot = require('./containers/Root').default;
    render(
      <HotLoaderContainer
        component={nextRoot}
        props={{store, routes}}
      />,
      rootEl
    );
  });
}
