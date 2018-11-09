import Immutable from 'immutable';

const initialState = {
    todoInfo: []
}
const getFilterInfo = function (stateInfo, stateId) {
    return stateInfo.map(item => {
        return (item.get('id') === stateId) 
            ?  Immutable.Map({text: item.get('text'), id: item.get('id'), isFinish: !item.get('isFinish')})
            : item
    })
}
let nextTodoId = 3;

export const updateTodoInfo = (state = Immutable.fromJS(initialState), action) => {
    switch (action.type) {
        case 'INITIAL_TODO_INFO_ASYNC':
            return state.set('todoInfo', action.data);
        case 'ADD_TODO_INFO': 
            const nextTodoInfo = Immutable.Map({text: action.data, id: nextTodoId++, isFinish: false})
            return state.set('todoInfo', Immutable.List([...state.get('todoInfo'), nextTodoInfo]));
        case 'DELETE_TODO_INFO':
            const removeReturnTodoInfo = state.get('todoInfo').filter(item => {
                return item.get('id') !== action.data
            })
            return state.set('todoInfo', removeReturnTodoInfo);
        case 'FILTER_TODO_INFO':
            return state.set('todoInfo', getFilterInfo(state.get('todoInfo'), action.data));
        default: 
            return state
    }
} 