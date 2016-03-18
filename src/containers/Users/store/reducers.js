/* eslint-disable */
import * as types from './types';

const initialState = {
  isFetching: false,
  didInvalidate: true,
  lastUpdated: 0,
  items: [],
  item: null,
  isFetchingItem: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_USER:
      switch (action.status) {
        case 'pending':
          return Object.assign({}, state, {
            isCreating: true,
            items: [{
              id: state.items.reduce((maxId, user) => Math.max(user.id, maxId), -1) + 1,
              ...action.user
            }, ...state.items]
          });
        case 'resolved':
          return Object.assign({}, state, {
            isCreating: false
          });
        default:
          return;
      }

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

    case types.FETCH_USER:
      switch (action.status) {
        case 'pending':
          console.warn('pending');
          return Object.assign({}, state, {
            isFetchingItem: true
          });
        case 'resolved':
          console.warn('resolved');
          return Object.assign({}, state, {
            isFetchingItem: false,
            item: action.item
            // items: action.items,
            // lastUpdated: action.receivedAt
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
      switch (action.status) {
        case 'pending':
          return Object.assign({}, state, {
            isDeleting: true,
            items: state.items.filter(user => user.id !== action.id)
          });
        case 'resolved':
          return Object.assign({}, state, {
            isDeleting: false
          });
        default:
          return;
      }

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
