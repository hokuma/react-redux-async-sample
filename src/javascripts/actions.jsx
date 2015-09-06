import $ from 'jquery';
export const FETCH_TODOS = 'FETCH_TODOS';
export function fetchTodos() {
    return {
        type: FETCH_TODOS,
    };
}

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export function receiveTodos(todos) {
    return {
        type: RECEIVE_TODOS,
        todos: todos
    };
}

export const ADD_TODO = 'ADD_TODO';
export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo: todo
    };
}
export const SAVE_TODO = 'SAVE_TODO';
export function saveTodo(todo) {
    return {
        type: SAVE_TODO,
        todo: todo
    };
}
export function createTodo(text) {
    var todo = {status: 0, text: text};
    return (dispatch, getState) => {
        dispatch(addTodo(todo));
        return $.post(
            'http://127.0.0.1:3000/todos',
            {text: text}
        ).then(data => {
            todo.id = data.todo.id;
            dispatch(saveTodo(todo));
        });
    }
}

export const FINISH_TODO = 'FINISH_TODO';
export function finishTodo(id) {
    return {
        type: FINISH_TODO,
        id: id
    };
}

function getTodos(store) {
   return dispatch => {
       dispatch(fetchTodos());
       return $.getJSON('http://127.0.0.1:3000/todos')
         .then(data => dispatch(receiveTodos(data.todos)));
   };
}

export function getTodosIfNeeded() {
    return (dispatch, getState) => {
        if(getState().isFetching) {
            return Promise.resolve();
        } else {
            return dispatch(getTodos());
        }
    };
}
