import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './todos/Todos';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise'
import { Provider } from 'react-redux';
import todoApp from './store/reducers';

//Todos
let store = createStore(
    todoApp,
    applyMiddleware(promiseMiddleware)
);


ReactDOM.render(
    <Provider store={store}>
        <Todos/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();






