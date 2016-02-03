/* eslint-disable */
import React, {Component, PropTypes} from 'react';
// import './style.scss';

export default class Navbar extends Component {

  static propTypes = {
    routes: PropTypes.array
  };

  render() {
    const {routes} = this.props;
    const currentRoute = routes[routes.length - 1];
    console.warn('currentRoute', currentRoute);
    // var currentRouteName = this.context.router.getCurrentPathname();
    // var currentRoutes = this.context.router.getCurrentRoutes();
    // console.log(currentRouteName, currentRoutes);
    return (
      <header className="header-expanded navbar navbar-fixed-top navbar-gitlab">
        <div className="container-fluid">
          <div className="header-content">
            {/* <button className="btn btn-link navbar-toggle" type="button"></button> */}
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav pull-right">
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
            </div>
            <h1 className="title">{currentRoute.title}</h1>
          </div>
        </div>
      </header>
    );
  }
}
