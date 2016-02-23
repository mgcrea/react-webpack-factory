import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import users from 'containers/Users/store/reducers';

export default combineReducers({
  routing: routerReducer,
  users
});
