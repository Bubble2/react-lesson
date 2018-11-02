import {todoReducer} from '../redux/reducer';
import {combineReducers} from 'redux';

const allReducer = combineReducers({
    todoReducer
})

export default allReducer