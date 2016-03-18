/* eslint-disable no-unused-vars,spaced-comment */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
// http://squarespace.com/logo
import logoSvg from './logo.svg';
import cx from 'classnames';
import style from './style';

export default class Sidebar extends Component {

  static propTypes = {
    title: PropTypes.string,
    expanded: PropTypes.bool,
    toggle: PropTypes.func
  };

  render() {
    const props = this.props;
    const {title, expanded, toggle} = props;

    const rootClassName = cx(style.root, {
      [style.expanded]: props.expanded,
      [style.collapsed]: !props.expanded
    }, props.className);

    return (
      <nav className={rootClassName}>
        <header className={style.header}>
          <Link to="/" className={style.sidebarLink}>
            <span dangerouslySetInnerHTML={{__html: logoSvg}}></span>
            <h3>{title}</h3>
          </Link>
        </header>
        <ul className={style.list}>
          <li className={style.activeListItem}>
            <Link to="/users" activeClassName={style.activeListItem}>
              <i className="fa fa-user fa-fw"></i>
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/issues" activeClassName={style.activeListItem}>
              <i className="fa fa-exclamation-circle fa-fw"></i>
              <span>Issues<span className="count">0</span></span>
            </Link>
          </li>
          <li>
            <Link to="/counter" activeClassName={style.activeListItem}>
              <i className="material-icons md-18">account_balance_wallet</i>
              <span>Issues<span className="count">0</span></span>
            </Link>
          </li>
        </ul>
        <footer className={style.footer}>
          <a className="toggle-nav-collapse" title="Open/Close" onClick={toggle}>
            <i className={cx('fa', `fa-${expanded ? 'angle-left' : 'angle-right'}`)}></i>
          </a>
        </footer>
      </nav>
    );
  }
}
        // <li clasName="separate-item"></li>
