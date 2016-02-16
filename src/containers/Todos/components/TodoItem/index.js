import React, {Component, PropTypes} from 'react';

export default class TodoItem extends Component {

  static propTypes = {
    actions: PropTypes.object,
    todo: PropTypes.object
  };

  render() {
    const {todo} = this.props;
    console.warn('todo', todo, this.props.actions);
    return (
      <tr>
        <td>{todo.id}</td>
        <td>{todo.text}</td>
        <td>{todo.completed ? 'V' : 'X'}</td>
        <td>
          <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
            <button type="button" className="btn btn-secondary">Left</button>
            <button type="button" className="btn btn-secondary">Middle</button>
            <button type="button" className="btn btn-secondary">Right</button>
          </div>
        </td>
      </tr>
    );
  }
}
