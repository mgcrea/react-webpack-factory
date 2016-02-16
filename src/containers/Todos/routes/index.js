/* eslint-disable */

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import TodoContainer, {TodoList, TodoForm} from 'containers/Todos';
console.warn('in');

export default (store) => {
console.warn('in2');
return (
  <Route path="todos" title="TodoIndex" component={TodoContainer}>
    <IndexRoute title="TodosList" component={TodoList}/>
    <Route path="new" title="TodosForm" component={TodoForm} />
  </Route>
);
}

/*
      <Route path='/404' component={NotFoundView} />
      <Redirect from='*' to='/404' />
*/
