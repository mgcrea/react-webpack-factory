import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object,
    routes: PropTypes.object
  };

  render() {
    const {store, routes} = this.props;
    const DevTools = __DEV__ ? require('containers/DevTools').default : false; // eslint-disable-line global-require
    return (
      <Provider store={store}>
        <div>
          {routes}
          {DevTools ? <DevTools /> : ''}
        </div>
      </Provider>
    );
  }

}
