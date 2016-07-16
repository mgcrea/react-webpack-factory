import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {reducers as users} from 'containers/Users/store';

export default combineReducers({
  routing: routerReducer,
  users
});
