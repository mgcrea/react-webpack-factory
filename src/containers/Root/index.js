import React, {Component, PropTypes} from 'react';

import {Provider} from 'react-redux';
import DevTools from 'containers/DevTools';

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object,
    routes: PropTypes.array
  };

  render() {
    const {store, routes} = this.props;
    return (
      <Provider store={store}>
        <div>
          {routes}
          {__DEV__ ? <DevTools /> : ''}
        </div>
      </Provider>
    );
  }

}
