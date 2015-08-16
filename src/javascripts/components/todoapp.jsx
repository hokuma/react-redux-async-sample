import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './todolist.jsx';

class TodoApp extends Component {
  render() {
    const { dispatch, todoList } = this.props;
    return (
      <div>
        <TodoList todoList={todoList} />
      </div>
    );
  }
}

function select(state) {
  return {
      todoList: state.todoList
  };
}

export default connect(select)(TodoApp);
