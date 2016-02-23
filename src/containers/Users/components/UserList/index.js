
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import UserItem from './../UserItem';

export default class UserList extends Component {

  static propTypes = {
    actions: PropTypes.object,
    users: PropTypes.array
  };

  // static defaultProps = {
  //   users: [
  //     {id: '0123', title: 'foo', isDone: false}
  //   ]
  // };

  state = {
    search: ''
  }

  handleInputChange(ev) {
    this.setState({[ev.target.name]: ev.target.value});
  }

  add() {
    const {actions} = this.props;
    actions.addUser('foo');
  }

  render() {
    const {users, actions} = this.props;
    const {search} = this.state;

    const searchRegExp = new RegExp(search, 'i');
    const filteredUsers = users.filter(user => user.name.match(searchRegExp));

    return (
      <div>

        <div className="top-area">
          <ul className="nav-links">
            <li className="active">
              <a title="Home" className="shortcuts-activity" data-placement="right" href="/dashboard/users">Your Projects
              </a>
            </li>
            <li className="">
              <a title="Starred Projects" data-placement="right" href="/dashboard/users/starred">Starred Projects
              </a>
            </li>
            <li className="hidden-xs">
              <a title="Explore" data-placement="right" href="/explore">Explore Projects
              </a>
            </li>
          </ul>
          <div className="users-search-form">
            <input className="users-list-filter form-control hidden-xs" type="search" name="search" value={search} onChange={::this.handleInputChange} placeholder="Filter by name..." spellCheck="false" />
            <Link to="/users/new" className="btn btn-green" activeClassName="active">
              <i className="fa fa-plus"></i>
              New Project
            </Link>
          </div>
        </div>

        <div className="users-list-holder">
          <ul className="users-list">
            {filteredUsers.map(user => <UserItem key={user.id} user={user} {...actions} />)}
            <li className="bottom center">
              <div className="light">
                {filteredUsers.length} of {users.length} users displayed.
                <a className="js-expand" href="#">Show all</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
