import React, {Component, PropTypes} from 'react';

import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import './styles/index.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object,
    routes: PropTypes.array
  };
  render() {
    const {children, routes} = this.props;
    return (
      <div>
        <Navbar title="Dashboard" routes={routes} />
        <div className="page-sidebar-expanded page-with-sidebar">
          <Sidebar title="GitLab"/>
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
