import React from 'react';
import {Route, IndexRoute} from 'react-router';
import UserContainer, {UserList, UserForm} from 'containers/Users';

export default (store) => (
  <Route path="users" title="UserIndex" component={UserContainer}>
    <IndexRoute title="Users" component={UserList} />
    <Route path="new" title="Create User" component={UserForm} />
    <Route path=":userId" title="Edit User" component={UserForm} />
  </Route>
);
