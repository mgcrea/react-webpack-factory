import React from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';

import App from 'containers/App';
import todoRoutes from 'containers/Todos/routes';
import Counter from 'components/Counter';

const NotFoundView = () => (
  <div>Not Found!</div>
);

export default (store) => (
  <Router history={browserHistory}>
    <Route path="/404" component={NotFoundView} />
    <Route path="/" component={App}>
      {todoRoutes(store)}
      <Route path="issues" title="Issues" component={Counter} />
    </Route>
    <Redirect from="*" to="/404" />
  </Router>
);
