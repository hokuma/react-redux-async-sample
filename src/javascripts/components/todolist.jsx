import React, { Component } from 'react';
import TodoItem from './todoitem.jsx';
export default class TodoList extends Component {
    render() {
        return (
            <ul>
            {
                this.props.todoList.todos.map(function(todo, index) {
                    return <TodoItem todo={todo} key={index}/>
                })
            }
            </ul>
        );
    }
}

