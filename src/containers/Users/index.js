
import UserList from './components/UserList';
import UserForm from './components/UserForm';
export {UserList, UserForm};

import React, {Component, PropTypes, cloneElement} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from './store/actions';
import {routeActions} from 'react-router-redux';

class UserContainer extends Component {

  static propTypes = {
    children: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object,
    actions: PropTypes.object,
    router: PropTypes.object,
    users: PropTypes.array
  };

  render() {
    const {children, actions, router, users} = this.props;
    return (
      <section className="content users-content">
        {cloneElement(children, {actions, router, users})}
      </section>
    );
  }

}

export default connect(
  state => ({users: state.users}),
  dispatch => ({
    actions: bindActionCreators({...userActions}, dispatch),
    router: bindActionCreators({...routeActions}, dispatch)
  })
)(UserContainer);
