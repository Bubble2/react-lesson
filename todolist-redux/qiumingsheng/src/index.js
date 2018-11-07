import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TaskBoards from './TaskBoards.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TaskBoards />, document.getElementById('taskBoard'));
registerServiceWorker();
