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

export const CREATE_TODO = 'CREATE_TODO';
export function createTodo(text) {
    return {
        type: CREATE_TODO,
        text: text
    };
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
