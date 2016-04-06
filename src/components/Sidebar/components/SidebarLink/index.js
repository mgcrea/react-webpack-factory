/* eslint-disable no-unused-vars,spaced-comment */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import style from './style.scss';

export default class SidebarLink extends Component {

  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    to: PropTypes.string
  };

  render() {
    const props = this.props;
    return (
      <li className={style.root}>
        <Link to={props.to} className={style.navLink} activeClassName={style.isActive}>
          <i className="material-icons md-18">{props.icon}</i>
          <span>{props.label}</span>
        </Link>
      </li>
    );
  }
}
