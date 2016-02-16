import {combineReducers} from 'redux';
import {routeReducer} from 'react-router-redux';

import todos from 'containers/Todos/store/reducers';

export default combineReducers({
  routing: routeReducer,
  todos
});
