import assign from 'object-assign';
import { combineReducers } from 'redux';
import {
    FETCH_TODOS,
    RECEIVE_TODOS,
    ADD_TODO,
    SAVE_TODO,
    getTodosIfNeeded
} from './actions.jsx';

function todoList(state = {
    isFetching: false,
    todos: []
}, action) {
    switch(action.type) {
    case FETCH_TODOS:
        return assign({}, state, {isFetching: true});
    case RECEIVE_TODOS:
        return assign({}, state, {isFetching: false, todos: action.todos});
    case ADD_TODO:
        var currentTodos = state.todos;
        currentTodos.push(action.todo);
        return assign({}, state, {todos: currentTodos});
    case SAVE_TODO:
        return assign({}, state, {todos: state.todos});
    default:
        return state; 
    }
}

const rootReducer = combineReducers({
    todoList
});

export default rootReducer;
