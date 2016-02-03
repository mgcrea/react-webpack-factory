import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import DevTools from 'containers/DevTools';

import configureStore from 'store';
const store = configureStore();
import configureRoutes from 'routes';
const routes = configureRoutes(store);

render(
  <Provider store={store}>
    <div>
      {routes}
      {__DEV__ ? <DevTools /> : ''}
    </div>
  </Provider>,
  document.getElementById('root')
);
