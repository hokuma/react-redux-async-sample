import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './todolist.jsx';
import TodoForm from './todoform.jsx';
import { createTodo } from '../actions.jsx';

class TodoApp extends Component {
  render() {
    const { createTodo, todoList } = this.props;
    return (
      <div>
        <TodoForm save={createTodo} />
        <TodoList todoList={todoList} />
      </div>
    );
  }
}

function actions(dispatch) {
    return {
        createTodo: (text) => dispatch(createTodo(text))
    };
}

function select(state) {
  return {
      todoList: state.todoList
  };
}

export default connect(select, actions)(TodoApp);
