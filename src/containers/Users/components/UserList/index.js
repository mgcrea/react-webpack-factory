import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import UserListItem from './../UserListItem';
import style from './style';

// import Table from 'react-toolbox/lib/table';
import {List, ListItem, ListSubHeader, ListDivider, ListCheckbox, Button} from 'react-toolbox';
import {decorate as decorateWithProgressBar} from 'components/ProgressBar';

class UserList extends Component {

  static propTypes = {
    router: PropTypes.object,
    actions: PropTypes.object,
    users: PropTypes.shape({
      items: PropTypes.array,
      updatedAt: PropTypes.number
    })
  };

  state = {
    search: ''
  }

  componentDidMount() {
    const {actions} = this.props;
    actions.fetchUsers();
  }

  handleInputChange(ev) {
    this.setState({[ev.target.name]: ev.target.value});
  }

  add() {
    const {actions} = this.props;
    actions.addUser('foo');
  }

  render() {
    const {users, router, actions} = this.props;
    const {search} = this.state;

    const searchRegExp = new RegExp(search, 'i');
    const filteredUsers = users.items.filter(user => user.name.match(searchRegExp));

    return (
      <section className={style.root}>
        <Link to="/users/new" className={style.addUser}>
          <Button icon="add" floating accent mini />
        </Link>
        <List selectable ripple>
          <ListSubHeader caption="Admin users" />
          {filteredUsers.map(user => <UserListItem key={user.id} user={user} router={router} {...actions} />)}
        {/* <ListSubHeader caption="Configuration" />
          <ListCheckbox checked caption="Notify new comics" legend="You will receive a notification when a new one is published" />
          <ListItem caption="Contact the publisher" leftIcon="send" />
          <ListItem caption="Remove this publication" leftIcon="delete" /> */}
        </List>
      </section>
    );
  }
}

export default decorateWithProgressBar({shouldBeActive: props => !props.users.items.length, getProgress: props => {
  const {users} = props;
  if (users.items === null) {
    return 25;
  } else if (users.isFetching) {
    return 50;
  }
  return 100;
}})(UserList);
