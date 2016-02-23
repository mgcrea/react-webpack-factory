import * as types from './types';

export function addTodo(text) {
  return {type: types.ADD_USER, text};
}

export function deleteTodo(id) {
  return {type: types.DELETE_USER, id};
}

export function editTodo(id, text) {
  return {type: types.EDIT_USER, id, text};
}

// export function completeTodo(id) {
//   return {type: types.COMPLETE_USER, id};
// }
//
// export function completeAll() {
//   return {type: types.COMPLETE_ALL};
// }
//
// export function clearCompleted() {
//   return {type: types.CLEAR_COMPLETED};
// }
