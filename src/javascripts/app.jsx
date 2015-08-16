import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { getTodosIfNeeded } from './actions.jsx';
import rootReducer from './reducers.jsx';
import TodoApp from './components/todoapp.jsx';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

store.dispatch(getTodosIfNeeded());
React.render(
   <Provider store={store}>
     {function() { return <TodoApp /> }}
   </Provider>,
   document.getElementById('todo-app')
);
