import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import cx from 'classnames';

export default class UserItem extends Component {

  static propTypes = {
    deleteUser: PropTypes.func,
    user: PropTypes.object
  };

  delete(ev) {
    const {user, deleteUser} = this.props;
    deleteUser(user.id, {confirm: ev.target.dataset.confirm});
  }

  render() {
    const {user} = this.props;
    console.warn('actions', this.props);
    return (
      <li className="project-row">
        <Link to={`/users/${user.id}`} className="user">
          <div className="dash-project-avatar">
            <div className="avatar project-avatar s46 identicon">N</div>
          </div>
          <span className="user-name">
            {user.name}
          </span>
          &nbsp;(<span className="user-email">
            {user.email}
          </span>)
        </Link>
        <div className="project-controls">
          <a className="ci-status-link ci-status-icon-success">
            <i className={cx('fa fa-fw', `fa-${user.completed ? 'check' : 'remove'}`)}></i>
          </a>
          &nbsp;
          <div className="btn-toolbar" role="toolbar">
            <div className="btn-group" role="group">
              <a className="btn btn-sm btn-primary" href="/admin/users/alorho/edit">Edit</a>
              <a className="btn btn-sm btn-danger" data-confirm={`USER ${user.name} WILL BE REMOVED! Are you sure?`} onClick={::this.delete}>Destroy</a>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

/*
      <tr>
        <td>{user.id}</td>
        <td>{user.text}</td>
        <td>{user.completed ? 'V' : 'X'}</td>
        <td>
          <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
            <button type="button" className="btn btn-secondary">Left</button>
            <button type="button" className="btn btn-secondary">Middle</button>
            <button type="button" className="btn btn-secondary">Right</button>
          </div>
        </td>
      </tr>
      */
