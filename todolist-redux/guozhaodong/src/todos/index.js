import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import rootReducer from './redux/reducer';
import Todos from './Todos';

export default () =>{
    const store = createStore(rootReducer);

    ReactDOM.render(
        <Provider store={store}>
            <Todos />
        </Provider>,
        document.getElementById('root')
    )
}