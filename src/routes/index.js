import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import App from 'containers/App';
import userRoutes from 'containers/Users/routes';
import Counter from 'components/Counter';

const NotFoundView = props => (
  <div>Not Found!</div>
);

export default (store) => {
  const history = syncHistoryWithStore(browserHistory, store);
  return (
    <Router history={history}>
      <Route path="/404" component={NotFoundView} />
      <Redirect from="/" to="/users" />
      <Route path="/" component={App}>
        {userRoutes(store)}
        <Route path="issues" title="Issues" component={Counter} />
      </Route>
      <Redirect from="*" to="/404" />
    </Router>
  );
};
