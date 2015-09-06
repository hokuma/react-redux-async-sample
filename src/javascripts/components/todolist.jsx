import React, { Component } from 'react';
import TodoItem from './todoitem.jsx';
export default class TodoList extends Component {
    render() {
        console.log(this.props.todoList.todos);
        return (
            <ul>
            {
                this.props.todoList.todos.map(function(todo, index) {
                    return <TodoItem todo={todo} key={index} id={todo.id}/>
                })
            }
            </ul>
        );
    }
}

