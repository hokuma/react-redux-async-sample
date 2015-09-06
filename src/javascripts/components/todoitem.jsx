import React, { Component } from 'react';
export default class TodoItem extends Component {
    render() {
        const {todo, key, id} = this.props;
        if (todo.status == 0) {
            return (
                <li key={key} id={id}>
                    <input type="checkbox" />
                    {todo.text}
                </li>
            )
        } else {
            <li><s>{todo.label}</s></li>        
        }
    }
}
