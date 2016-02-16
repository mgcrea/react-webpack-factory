
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
export {TodoList, TodoForm};

import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as todoActions from './store/actions';

class TodoContainer extends Component {

  static propTypes = {
    children: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object
  };

  render() {
    const {children} = this.props;
    return (
      <div className="content">
        {children}
      </div>
    );
  }

}

export default connect(
  state => ({todos: state.todos}),
  dispatch => ({actions: bindActionCreators({...todoActions}, dispatch)})
)(TodoContainer);
