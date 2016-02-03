import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import logoSvg from './logo.svg';

export default class Navbar extends Component {

  static propTypes = {
    title: PropTypes.string
  };

  render() {
    const {title} = this.props;
    return (
      <nav className="sidebar-expanded sidebar-wrapper">
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
      </nav>
    );
  }
}
        // <li clasName="separate-item"></li>
