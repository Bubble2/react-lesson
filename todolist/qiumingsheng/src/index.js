import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TaskBoard from './TaskBoard.js';
import TaskBoards from './TaskBoards.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TaskBoards />, document.getElementById('taskBoard'));
registerServiceWorker();
