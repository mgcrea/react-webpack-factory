import React, {Component, PropTypes} from 'react';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import style from './style';

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
    const {children, routes} = this.props;
    return (
      <section className={style.root}>
        <Sidebar className={style.sidebar} title="Sandbox" expanded={this.state.sidebarExpanded} toggle={this.toggleSidebar} />
        <section className={style.main}>
          <Navbar title="Dashboard" routes={routes} className={style.navbar} />
          <section className={style.content}>
            {children}
          </section>
        </section>
      </section>
    );
  }

}
