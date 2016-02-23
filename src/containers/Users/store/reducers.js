/* eslint-disable */

import * as types from './types';

const initialState = [{
  name: 'Olivier Louvignes',
  username: 'mgcrea',
  email: 'olivier@mg-crea.com',
  id: 0
}];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_USER:
      return [{
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: action.text
      }, ...state];

    case types.UPDATE_USER:
      return state.map(todo =>
        todo.id === action.id ?
        Object.assign({}, todo, {
          text: action.text
        }) :
        todo
      );

    case types.DELETE_USER:
      return state.filter(todo =>
        todo.id !== action.id
      );

    // case types.COMPLETE_TODO:
    //   return state.map(todo =>
    //     todo.id === action.id ?
    //     Object.assign({}, todo, {
    //       completed: !todo.completed
    //     }) :
    //     todo
    //   );
    //
    // case types.COMPLETE_ALL:
    //   const areAllMarked = state.every(todo => todo.completed);
    //   return state.map(todo => Object.assign({}, todo, {
    //     completed: !areAllMarked
    //   }));
    //
    // case types.CLEAR_COMPLETED:
    //   return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
}
