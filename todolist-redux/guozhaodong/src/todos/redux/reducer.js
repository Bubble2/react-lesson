import {combineReducers} from 'redux'
import {
    ADD_TODO,
    CHECK_TODO,
    DELETE_TODO
} from './constants';

const todos = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state, {
                id: (new Date()).getTime(),
                text: action.text,
                isFinished: false
            }];
        case CHECK_TODO:
            return state.map((item) => {
                if(item.id === action.id){
                    item.isFinished = !item.isFinished;
                }
                return item;
            })
        case DELETE_TODO:
            return state.filter((item) => {
                return item.id !== action.id;
            })
        default:
            return state;
    }
}

export default combineReducers({
    todos
})



