/* eslint-disable */
import * as types from './types';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  lastUpdated: 0,
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_USER:
      return [{
        id: state.reduce((maxId, user) => Math.max(user.id, maxId), -1) + 1,
        ...action.user
      }, ...state.items];

    case types.FETCH_USERS:
      switch (action.status) {
        case 'pending':
          return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false
          });
        case 'resolved':
          return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            items: action.items,
            lastUpdated: action.receivedAt
          });
        default:
          return;
      }

    case types.UPDATE_USER:
      return state.map(user =>
        user.id === action.id ?
        Object.assign({}, user, action.user) :
        user
      );

    case types.DELETE_USER:
      return state.filter(user =>
        user.id !== action.id
      );

    // case types.COMPLETE_TODO:
    //   return state.map(user =>
    //     user.id === action.id ?
    //     Object.assign({}, user, {
    //       completed: !user.completed
    //     }) :
    //     user
    //   );
    //
    // case types.COMPLETE_ALL:
    //   const areAllMarked = state.every(user => user.completed);
    //   return state.map(user => Object.assign({}, user, {
    //     completed: !areAllMarked
    //   }));
    //
    // case types.CLEAR_COMPLETED:
    //   return state.filter(user => user.completed === false);

    default:
      return state;
  }
}
