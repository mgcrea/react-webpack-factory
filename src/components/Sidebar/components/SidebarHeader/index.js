import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import cx from 'classnames';
import style from './style.scss';

// http://squarespace.com/logo
import logoSvg from './logo.svg';

export default class SidebarHeader extends Component {

  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    to: PropTypes.string
  };

  render() {
    const props = this.props;

    const rootClassName = cx(style.root, {
      [style.expanded]: props.expanded,
      [style.collapsed]: !props.expanded
    }, props.className);

    return (
      <header className={rootClassName}>
        <Link to="/">
          <span dangerouslySetInnerHTML={{__html: logoSvg}}></span>
          <h3>{props.title}</h3>
        </Link>
      </header>
    );
  }
}
