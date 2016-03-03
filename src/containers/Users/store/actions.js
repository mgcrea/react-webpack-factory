import * as types from './types';
import fetch from 'isomorphic-fetch';

// Config related
const collection = 'users';
const apiKey = 'yvDjirE9MCIi800xMxi9EKETm8e9FUBR';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

// Data related
const isObject = maybeObj => typeof maybeObj === 'object';
const mapItems = items => items.map(item => {
  if (isObject(item._id)) {
    item.id = item._id.$oid;
  }
  return item;
});

// Interface related
const confirmAsync = (text) => new Promise((resolve, reject) => {
  return confirm(text) ? resolve() : reject();
});

export function createUser(user) {
  return dispatch => {
    dispatch({type: types.CREATE_USER, status: 'pending', user});
    return fetch(`https://api.mlab.com/api/1/databases/sandbox/collections/${collection}?apiKey=${apiKey}`, {
      method: 'post',
      headers,
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(body => dispatch({type: types.CREATE_USER, status: 'resolved', body, receivedAt: Date.now()}))
      .catch(err => dispatch({type: types.CREATE_USER, status: 'rejected', err, receivedAt: Date.now()}));
  };
}

export function fetchUsers() {
  return (dispatch, getState) => {
    if (!shouldFetchUsers(getState())) return Promise.resolve();
    dispatch({type: types.FETCH_USERS, status: 'pending'});
    return fetch(`https://api.mlab.com/api/1/databases/sandbox/collections/${collection}?apiKey=${apiKey}`)
      .then(res => res.json())
      .then(items => dispatch({type: types.FETCH_USERS, status: 'resolved', items: mapItems(items), receivedAt: Date.now()}))
      .catch(err => dispatch({type: types.FETCH_USERS, status: 'rejected', err, receivedAt: Date.now()}));
  };
}

export function updateUser(id, user) {
  return {type: types.UPDATE_USER, id, user};
}

export function deleteUser(id, {confirm}) {
  return dispatch => {
    return (confirm ? confirmAsync(confirm) : Promise.resolve())
      .then(() => {
        dispatch({type: types.DELETE_USER, status: 'pending', id});
        return fetch(`https://api.mlab.com/api/1/databases/sandbox/collections/${collection}/${id}?apiKey=${apiKey}`, {
          method: 'delete',
          headers
        });
      })
      .then(res => res.json())
      .then(body => dispatch({type: types.DELETE_USER, status: 'resolved', body, receivedAt: Date.now()}))
      .catch(err => dispatch({type: types.DELETE_USER, status: 'rejected', err, receivedAt: Date.now()}));
  };
}

function shouldFetchUsers(state) {
  const users = state.users;
  if (!users) {
    return true;
  } else if (users.isFetching) {
    return false;
  }
  return users.didInvalidate;
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
