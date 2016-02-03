/* eslint-disable */
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import logoSvg from './logo.svg';
import cx from 'classnames';

export default class Navbar extends Component {

  static propTypes = {
    title: PropTypes.string,
    expanded: PropTypes.bool,
    toggle: PropTypes.func
  };

  render() {
    const {title, expanded, toggle} = this.props;
    return (
      <nav className={cx('sidebar-wrapper', 'sidebar-' + (expanded ? 'expanded' : 'collapsed'))}>
        <div className="header-logo">
          <Link to="/" className="nav-link">
            <div dangerouslySetInnerHTML={{__html: logoSvg}}></div>
            <div className="gitlab-text-container">
              <h3>{title}</h3>
            </div>
          </Link>
        </div>
        <ul className="nav nav-sidebar">
          <li>
            <Link to="/todos" className="nav-link" activeClassName="active">
              <i className="fa fa-home fa-fw"></i>
              <span>
                Todos
              </span>
            </Link>
          </li>
          <li>
            <Link to="/issues" className="nav-link" activeClassName="active">
              <i className="fa fa-exclamation-circle fa-fw"></i>
              <span>
                Issues
                <span className="count">0</span>
              </span>
            </Link>
          </li>
        </ul>
        <div className="collapse-nav">
          <a className="toggle-nav-collapse" title="Open/Close" onClick={toggle}>
            <i className={cx('fa', 'fa-' + (expanded ? 'angle-left' : 'angle-right'))}></i>
          </a>
        </div>
      </nav>
    );
  }
}
        // <li clasName="separate-item"></li>
