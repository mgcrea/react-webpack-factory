
import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import style from './style';

import SidebarHeader from './components/SidebarHeader';
import SidebarLink from './components/SidebarLink';

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
        <SidebarHeader title={title} expanded={expanded} />
        <ul className={style.list}>
          <SidebarLink to="/media" label="Library" icon="video_library" />
          <SidebarLink to="/devices" label="Devices" icon="important_devices" />
          <SidebarLink to="/users" label="Users" icon="account_circle" />
          <SidebarLink to="/issues" label="Issues" icon="report_problem" />
        </ul>
        <footer className={style.footer}>
          <a className="toggle-nav-collapse" title="Open/Close" onClick={toggle}>
            <i className="material-icons md-18">{`chevron_${expanded ? 'left' : 'right'}`}</i>
          </a>
        </footer>
      </nav>
    );
  }
}
        // <li clasName="separate-item"></li>
