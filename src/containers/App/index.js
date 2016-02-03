import React, {Component, PropTypes} from 'react';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import cx from 'classnames';
import './styles/index.scss';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object,
    routes: PropTypes.array
  };

  state = {
    sidebarExpanded: true
  };

  toggleSidebar() {
    this.setState({sidebarExpanded: !this.state.sidebarExpanded});
  }

  render() {
    // const {sidebarExpanded} = this.state;
    const {children, routes} = this.props;
    return (
      <div>
        <Navbar title="Dashboard" routes={routes} />
        <div className={cx('page-with-sidebar', 'page-sidebar-' + (this.state.sidebarExpanded ? 'expanded' : 'collapsed'))}>
          <Sidebar title="GitLab" expanded={this.state.sidebarExpanded} toggle={::this.toggleSidebar}/>
          <div className="content-wrapper">
            <div className="container-fluid container-limited">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }

}
