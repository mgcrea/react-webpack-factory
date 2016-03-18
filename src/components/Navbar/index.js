/* eslint-disable no-unused-vars,spaced-comment */
import React, {Component, PropTypes} from 'react';
// import AppBar from 'react-toolbox/lib/app_bar';
import cx from 'classnames';
import style from './style';


export default class Navbar extends Component {

  static propTypes = {
    routes: PropTypes.array
  };

  render() {
    const props = this.props;
    const {routes} = props;
    const currentRoute = routes[routes.length - 1];

    const rootClassName = cx(style.root, {
      // [style.expanded]: props.expanded,
      // [style.collapsed]: !props.expanded
    }, props.className);

    // var currentRouteName = this.context.router.getCurrentPathname();
    // var currentRoutes = this.context.router.getCurrentRoutes();
    // console.log(currentRouteName, currentRoutes);
    return (
      <header className={rootClassName}>
        <h1 className={style.title}>{currentRoute.title}</h1>
        <ul className={style.nav}>
          <li className="visible-sm visible-xs">
            <a title="Search" data-toggle="tooltip" data-placement="bottom" data-container="body" href="/search">
              <i className="fa fa-search"></i>
            </a>
          </li>
          <li>
            <a title="Admin Area" data-toggle="tooltip" data-placement="bottom" data-container="body" href="/admin">
              <i className="fa fa-wrench fa-fw"></i>
            </a>
          </li>
          <li>
            <a title="New project" data-toggle="tooltip" data-placement="bottom" data-container="body" href="/projects/new">
              <i className="fa fa-plus fa-fw"></i>
            </a>
          </li>
          <li>
            <a className="logout" title="Sign out" data-toggle="tooltip" data-placement="bottom" data-container="body" rel="nofollow" data-method="delete" href="/users/sign_out">
              <i className="fa fa-sign-out"></i>
            </a>
          </li>
        </ul>
      </header>
    );
  }
}
