import * as types from './types';
import fetch from 'isomorphic-fetch';

export function createUser(user) {
  return {type: types.CREATE_USER, user};
}

export function fetchUsers() {
  return dispatch => {
    dispatch({type: types.FETCH_USERS, status: 'pending'});
    const collection = 'users';
    const apiKey = 'yvDjirE9MCIi800xMxi9EKETm8e9FUBR';
    return fetch(`https://api.mlab.com/api/1/databases/sandbox/collections/${collection}?apiKey=${apiKey}`)
      .then(res => res.json())
      .then(items => dispatch({type: types.FETCH_USERS, status: 'resolved', items, receivedAt: Date.now()}))
      .catch(err => dispatch({type: types.FETCH_USERS, status: 'rejected', err, receivedAt: Date.now()}));
  };
}

export function updateUser(id, user) {
  return {type: types.UPDATE_USER, id, user};
}

export function deleteUser(id) {
  return {type: types.DELETE_USER, id};
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
