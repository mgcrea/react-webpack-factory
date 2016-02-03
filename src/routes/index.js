import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import App from 'containers/App';
import Todos from 'containers/Todos';
import Counter from 'components/Counter';

export default (store) => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route title="Todos" path="todos" component={Todos} />
      <Route title="Issues" path="issues" component={Counter} />
    </Route>
  </Router>
);

/*
      <Route path='/404' component={NotFoundView} />
      <Redirect from='*' to='/404' />
*/
