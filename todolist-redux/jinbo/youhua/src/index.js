import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './todos/Todos';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import todoApp from './store/reducers';


//Todos
let store = createStore(
    todoApp,
    applyMiddleware(thunk)
);


ReactDOM.render(
    <Provider store={store}>
        <Todos/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();






