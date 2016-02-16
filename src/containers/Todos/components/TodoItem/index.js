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
      <li className="project-row">
        <a className="project" href="/carlipa/node-player">
          <div className="dash-project-avatar">
            <div className="avatar project-avatar s46 identicon">N</div>
          </div>
          <span className="project-full-name">
            <span className="namespace-name">
              carlipa /
            </span>
            <span className="project-name filter-title">
              node-player
            </span>
          </span>
        </a>
        <div className="project-controls">
          <a className="ci-status-link ci-status-icon-success" title="Build passed" data-toggle="tooltip" data-placement="left" href="/carlipa/node-player/commit/7f882499e46ece2f377ff2f858a27577bd8bedd4/builds">
            <i className="fa fa-check fa-fw"></i>
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
      */
