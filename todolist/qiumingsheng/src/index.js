import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TaskBoard from './TaskBoard.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TaskBoard />, document.getElementById('taskBoard'));
registerServiceWorker();
