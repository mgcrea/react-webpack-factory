import React from 'react';
import {Route, IndexRoute} from 'react-router';
import TodoContainer, {TodoList, TodoForm} from 'containers/Todos';

export default (store) => (
  <Route path="todos" title="TodoIndex" component={TodoContainer}>
    <IndexRoute title="TodosList" component={TodoList}/>
    <Route path="new" title="TodosForm" component={TodoForm} />
  </Route>
);
