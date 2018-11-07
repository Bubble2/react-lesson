import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './todos/Todos';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import { Provider } from 'react-redux';


//创建store

let store = createStore(todoApp)


ReactDOM.render(
    <Provider store={store}>
        <Todos/>
    </Provider>,
    document.getElementById('root'));

