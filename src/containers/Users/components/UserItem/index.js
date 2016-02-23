import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

export default class UserItem extends Component {

  static propTypes = {
    actions: PropTypes.object,
    user: PropTypes.object
  };

  render() {
    const {user} = this.props;
    console.warn('user', user, this.props.actions);
    return (
      <li className="project-row">
        <a className="project" href="/carlipa/node-player">
          <div className="dash-project-avatar">
            <div className="avatar project-avatar s46 identicon">N</div>
          </div>
          <span className="user-name">
            {user.name}
          </span>
          &nbsp;(<span className="user-email">
            {user.email}
          </span>)
        </a>
        <div className="project-controls">
          <a className="ci-status-link ci-status-icon-success">
            <i className={cx('fa fa-fw', `fa-${user.completed ? 'check' : 'remove'}`)}></i>
          </a>
          &nbsp;
          <span>
            <i className="fa fa-star"></i>
            1
          </span>
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
