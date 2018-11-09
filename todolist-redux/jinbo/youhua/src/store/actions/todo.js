import request from '../../api/request';
import {fromJS} from 'immutable' 


const fetchTodoData = (data) => ({
    type: 'INITIAL_TODO_INFO_ASYNC',
    data
})

const initialTodoInfoAsync = () => dispatch => {
    return request({type: 101, data: {}}).then((data) => {
        dispatch(fetchTodoData(fromJS(data.todo_info)))
    })
} 

const addInfo = (data) => {
    return {type: 'ADD_TODO_INFO', data}
}

const deleInfo = (data) => {
    return {type: 'DELETE_TODO_INFO', data}
}

const filterInfo = (data) => {
    return {type: 'FILTER_TODO_INFO', data}
}


export {
    initialTodoInfoAsync,
    addInfo,
    deleInfo,
    filterInfo,
}
