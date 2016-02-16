
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class TodoList extends Component {

  static propTypes = {
    actions: PropTypes.object,
    todos: PropTypes.array
  };

  // static defaultProps = {
  //   todos: [
  //     {id: '0123', title: 'foo', isDone: false}
  //   ]
  // };

  add() {
    const {actions} = this.props;
    actions.addTodo('foo');
  }

  render() {
    // const {todos, actions} = this.props;
    return (
      <div className="content">

        <div className="top-area">
          <ul className="nav-links">
            <li className="active">
              <a title="Home" className="shortcuts-activity" data-placement="right" href="/dashboard/projects">Your Projects
              </a>
            </li>
            <li className="">
              <a title="Starred Projects" data-placement="right" href="/dashboard/projects/starred">Starred Projects
              </a>
            </li>
            <li className="hidden-xs">
              <a title="Explore" data-placement="right" href="/explore">Explore Projects
              </a>
            </li>
          </ul>
          <div className="projects-search-form">
            <input type="search" name="filter_projects" id="filter_projects" placeholder="Filter by name..." className="projects-list-filter form-control hidden-xs" spellCheck="false" />
            <Link to="/todos/new" className="btn btn-green" activeClassName="active">
              <i className="fa fa-plus"></i>
              New Project
            </Link>
          </div>
        </div>

        <div className="projects-list-holder">
          <ul className="projects-list">
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
            <li className="bottom center">
              <div className="light">
                22 of 119 projects displayed.
                <a className="js-expand" href="#">Show all
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
