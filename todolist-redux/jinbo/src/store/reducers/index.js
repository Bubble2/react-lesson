import {combineReducers} from 'redux-immutable';
import { updateTodoInfo } from './todo';

const todoApp = combineReducers({
  updateTodoInfo
})
  
export default todoApp
