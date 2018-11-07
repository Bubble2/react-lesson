let datas ={
    value:'',
    data:[]
}
let nextTodoId = 0;

export const TodoList = function(state = datas, action) {
  switch (action.type) {
      case 'ADD_TODO': 
         return  Object.assign({}, state, {data:[...state.data,{
            id: nextTodoId++,
            text: action.text,
            completed: false
        }]}); 
         
      case 'DELETE_TODO':
        const removeTodo = state.data.filter(item => {
           if(item.id !== action.id){
                return item
           }
        })
          return Object.assign({}, state, {
              data: removeTodo
            })

        case 'FILTER_TODO':
          const filterInfo = state.data.map(item => {
            return (item.id === action.id) 
                  ? {...item, completed: !item.completed}
                  : item
          })
          return Object.assign({}, state, {
              data: filterInfo
          })

        case 'CANCEL_FILTER_TODO':
          const cancelFilterInfo = state.data.map(item => {
              return (item.id === action.id) 
                  ? {...item, completed: !item.completed}
                  : item
          })
          return Object.assign({}, state, {
              data: cancelFilterInfo
          })
      default: 
          return state
  }
} 