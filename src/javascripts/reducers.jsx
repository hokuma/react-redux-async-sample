import assign from 'object-assign';
import { combineReducers } from 'redux';
import {
    FETCH_TODOS,
    RECEIVE_TODOS,
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
    default:
        return state; 
    }
}

const rootReducer = combineReducers({
    todoList
});

export default rootReducer;
