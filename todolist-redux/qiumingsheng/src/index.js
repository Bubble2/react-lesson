import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from 'todo/reducers';
import './index.css';
import App from './App';
import TaskBoards from './todo/component/TaskBoards.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <TaskBoards />
    </Provider>
    , document.getElementById('taskBoard'));
registerServiceWorker();
