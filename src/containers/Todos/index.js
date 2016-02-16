
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
export {TodoList, TodoForm};

import React, {Component, PropTypes, cloneElement} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as todoActions from './store/actions';

class TodoContainer extends Component {

  static propTypes = {
    children: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object,
    todos: PropTypes.array
  };

  render() {
    const {children, todos} = this.props;
    return (
      <div className="content">
        {cloneElement(children, {todos})}
      </div>
    );
  }

}

export default connect(
  state => ({todos: state.todos}),
  dispatch => ({actions: bindActionCreators({...todoActions}, dispatch)})
)(TodoContainer);
