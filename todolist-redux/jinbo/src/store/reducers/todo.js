const initialState = {
    todoInfo: []
}
let nextTodoId = 0;

export const updateTodoInfo = function(state = initialState, action) {
  switch (action.type) {
      case 'ADD_TODO_INFO': 
          const nextTodoInfo = {text: action.data, id: nextTodoId++, isFinish: false}
          return Object.assign({}, state, {todoInfo: [...state.todoInfo, nextTodoInfo]})
      case 'DELETE_TODO_INFO':
        const removeTodoInfo = state.todoInfo.filter(item => {
           if(item.id !== action.data){
                return item
           }
        })
          return Object.assign({}, state, {todoInfo: removeTodoInfo})
      case 'FILTER_TODO_INFO':
          const filterInfo = state.todoInfo.map(item => {
            return (item.id === action.data) 
                  ? {...item, isFinish: !item.isFinish}
                  : item
          })
          return Object.assign({}, state, {todoInfo: filterInfo})
      case 'CANCEL_FILTER_INFO':
            const cancelFilterInfo = state.todoInfo.map(item => {
                return (item.id === action.data) 
                    ? {...item, isFinish: !item.isFinish}
                    : item
            })
            return Object.assign({}, state, {todoInfo: cancelFilterInfo})
      default: 
          return state
  }
} 