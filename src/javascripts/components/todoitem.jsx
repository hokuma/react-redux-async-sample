import React, { Component } from 'react';
export default class TodoItem extends Component {
    render() {
        const {todo, key} = this.props;
        if (todo.status == 0) {
            return (
                <li key={key}>
                    <input type="checkbox" />
                    {todo.text}
                </li>
            )
        } else {
            <li><s>{todo.label}</s></li>        
        }
    }
}
