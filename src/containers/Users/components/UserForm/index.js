import React, {Component, PropTypes} from 'react';
import style from './style';

import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';

import {decorate as decorateWithProgressBar} from 'components/ProgressBar';

class UserForm extends Component {

  static propTypes = {
    router: PropTypes.object,
    actions: PropTypes.object,
    params: PropTypes.object,
    users: PropTypes.shape({
      item: PropTypes.object,
      isFetchingItem: PropTypes.bool
    })
  };

  state = {
    name: '',
    username: '',
    email: ''
  }

  componentWillMount() {
    const {actions, params, users} = this.props;
    if (params.userId) {
      if (users.item && users.item._id.$oid === params.userId) {
        this.setState(users.item);
        return;
      }
      actions.fetchUser(params.userId).then(action => {
        this.setState(action.item);
      });
    }
  }

  handleInputChange(value, ev) {
    this.setState({[ev.target.name]: ev.target.value});
  }

  handleSubmit(ev) {
    console.warn('submit');
    ev.preventDefault();
    // const {router, actions} = this.props;
    // actions.createUser(this.state).then(() => {
    //   router.push('/users');
    // });
  }

  handleKeyPress(ev) {
    console.warn('keypress', ev);
  }

  handleCancel(ev) {
    const {router} = this.props;
    ev.preventDefault();
    router.goBack();
  }

  render() {
    return (
      <section className={style.root}>
        <form onSubmit={::this.handleSubmit} onKeyPress={::this.handleKeyPress}>
          <Input type="text" name="name" label="Name" icon="event" value={this.state.name} onChange={::this.handleInputChange} autoComplete="off" maxLength={32} />
          <Input type="text" name="username" label="Username" icon="event" value={this.state.username} onChange={::this.handleInputChange} autoComplete="off" maxLength={16} />
          <Input type="email" name="email" label="Email address" icon="email" value={this.state.email} onChange={::this.handleInputChange} autoComplete="off" />
          <footer>
            <Button type="submit" icon="check" label="Submit" raised primary />
            <Button type="button" icon="close" label="Cancel" onClick={::this.handleCancel} raised />
          </footer>
        </form>
      </section>
    );
  }
}

export default decorateWithProgressBar({
  shouldBeActive: props => {
    const {params, users} = props;
    return !!params.userId && (!users.item || users.item._id.$oid !== params.userId);
  },
  getProgress: props => {
    const {users} = props;
    if (users.item === null) {
      return 25;
    } else if (users.isFetchingItem) {
      return 50;
    }
    return 100;
  }
})(UserForm);
