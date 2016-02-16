import React, {Component, PropTypes} from 'react';

export default class TodoForm extends Component {

  static propTypes = {
    actions: PropTypes.object,
    todos: PropTypes.array
  };

  render() {
    // const {todos, actions} = this.props;
    return (
      <div className="content">
        Hey you!
      </div>
    );
  }
}
