import React, {Component, PropTypes} from 'react';

import {Link} from 'react-router';
import {ListItem} from 'react-toolbox/lib/list';
import {IconMenu, MenuItem, MenuDivider} from 'react-toolbox/lib/menu';
import {IconButton, Button} from 'react-toolbox/lib/button';

import style from './style';

export default class UserListItem extends Component {

  static propTypes = {
    router: PropTypes.object,
    deleteUser: PropTypes.func,
    user: PropTypes.object
  };

  handleDelete(foo, ev) {
    const {user, deleteUser} = this.props;
    // deleteUser(user.id, {confirm: ev.target.dataset.confirm});
    // showConfirm({text: ev.target.dataset.confirm}).then(() => {
    //   deleteUser(user.id, {confirm: ev.target.dataset.confirm});
    // });
  }

  handleSelect(value) {
    const {router, user, deleteUser} = this.props;
    switch (value) {
      case 'edit':
        router.push(`/users/${user.id}`);
        break;
      case 'delete':
        deleteUser(user.id, {confirm: `USER ${user.name} WILL BE REMOVED! Are you sure?`});
        break;
      default:
    }
  }

  render() {
    const {user} = this.props;
    return (
      <section className={style.root}>
        <ListItem className={style.listItem}
          avatar={`https://api.adorable.io/avatars/40/${user.email}.png`}
          caption={user.name}
          legend={user.email}
          rightIcon="star"
        />
        <Link to={`/users/${user.id}`} className={style.linkMenu}>
          <IconButton icon="edit" accent />
        </Link>
        <IconMenu className={style.iconMenu} icon="more_vert" position="topRight" onSelect={::this.handleSelect} menuRipple>
          <MenuItem value="edit" icon="edit" caption="Edit" />
          <MenuItem value="download" icon="get_app" caption="Download" />
          <MenuItem value="settings" icon="open_in_browser" caption="Open in app" disabled />
          <MenuDivider />
          <MenuItem value="delete" icon="delete" caption="Delete" />
        </IconMenu>
      </section>
    );
  }
}

/*
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
            <i className={cx("fa fa-fw", `fa-${user.completed ? "check" : 'remove'}`)}></i>
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
*/

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
