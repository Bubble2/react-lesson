import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import mixReducer from './redux/mixReducer';
import { Provider } from 'react-redux';
import Todos from './todos/Todos';


//创建store
const store = createStore(mixReducer)

ReactDOM.render(
   <Provider store = {store}>
       <Todos/>
   </Provider>,
document.getElementById('root'));
registerServiceWorker();


