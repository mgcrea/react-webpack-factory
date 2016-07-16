
import {createResource} from 'redux-rest-resource';
// import {createResource} from 'redux-rest-resource/src';

const hostUrl = 'https://api.mlab.com:443/api/1/databases/sandbox/collections';
const apiKey = 'yvDjirE9MCIi800xMxi9EKETm8e9FUBR';

const isObject = maybeObj => typeof maybeObj === 'object';
const transformItem = item => {
  item.id = isObject(item._id) ? item._id.$oid : item._id; // eslint-disable-line no-param-reassign
  return item;
};
const transformItems = ({body, code}) => (
  {body: body.map(transformItem), code}
);

export const {types, actions, reducers} = createResource({
  name: 'user',
  url: `${hostUrl}/users/:id?apiKey=${apiKey}`,
  // params: {
  //   userId: '@_id'
  // },
  actions: {
    get: {
      transformResponse: transformItem
    },
    fetch: {
      transformResponse: transformItems
    }
  }
});
