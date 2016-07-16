import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {AppContainer as HotLoaderContainer} from 'react-hot-loader';
import style from './styles/index';

import configureStore from 'store';
const store = configureStore();
import configureRoutes from 'routes';
const routes = configureRoutes(store);

import Root from './containers/Root';
const rootEl = document.getElementById('root');
render(
  <HotLoaderContainer>
    <Root store={store} routes={routes} />
  </HotLoaderContainer>,
  rootEl
);

if (__DEV__ && module.hot) {
  module.hot.accept('./routes', () => {
    console.warn('hot! ./routes');
    const _configureRoutes = require('./routes').default;
    const nextRoutes = _configureRoutes(store);
    // setTimeout(() => {
      // ReactDOM.unmountComponentAtNode(rootEl);
    render(
      <HotLoaderContainer>
        <Root store={store} routes={nextRoutes} />
      </HotLoaderContainer>,
      rootEl
    );
    // });
  });
  module.hot.accept('./containers/Root', () => {
    console.warn('hot! ./containers/Root');
    // If you use Webpack 2 in ES modules mode, you can
    // use <Root /> here rather than require() a <NextRoot />.
    const NextRoot = require('./containers/Root').default;
    render(
      <HotLoaderContainer>
        <NextRoot store={store} routes={routes} />
      </HotLoaderContainer>,
      rootEl
    );
  });
}

/*


import {Provider} from 'react-redux';

import DevTools from 'containers/DevTools';
import RedBox from 'redbox-react';

import configureStore from 'store';
const store = configureStore();
import configureRoutes from 'routes';
// const routes = configureRoutes(store);
const rootEl = document.getElementById('root');

const renderApp = () => {
  // const configureRoutes = require('./routes').default;
  const routes = configureRoutes(store);
  ReactDOM.render(
    <HotLoaderContainer>
      <Provider store={store}>
        <div>
          {routes}
          {__DEV__ ? <DevTools /> : ''}
        </div>
      </Provider>
    </HotLoaderContainer>,
    rootEl
  );
};

if (__DEV__ && module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  // const renderApp = render;
  // const renderError = (error) => {
  //   render(
  //     <RedBox error={error} />,
  //     rootEl
  //   );
  // };
  // render = () => {
  //   try {
  //     renderApp();
  //   } catch (error) {
  //     renderError(error);
  //   }
  // };
  // module.hot.accept('./containers/App', render);
  module.hot.accept('./routes', renderApp);
}

renderApp();
*/
