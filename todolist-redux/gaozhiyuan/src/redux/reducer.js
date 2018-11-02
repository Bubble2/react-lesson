//reducer
let datas ={
    value:'',
    lists:[]
}
export const todoReducer = function(state=datas,action){
   switch(action.type){
      case 'HANDLE_CHANGE' :
        return  Object.assign({}, state, {value:action.data});
      case 'HANDLE_ADD' :
        return  Object.assign({}, state, {value:''},{lists:[...state.lists,{
            keys: (new Date()).getTime(),
            content: action.data,
            hasFinsh: false
        }]});  
      case 'HANDLE_CHECK' :
        let oldLists = state.lists;
        let newLists = [];
        for(let index in oldLists){
            if(oldLists[index].keys === action.data){
                oldLists[index].hasFinsh = !oldLists[index].hasFinsh;
            }
            newLists.push(oldLists[index])
        }
        return  Object.assign({},state,{lists:newLists});
      case 'HANDLE_DELETE' :
        let oldListss = state.lists;
        let newListss = [];
        for(let index in oldListss){
            if(oldListss[index].keys === action.data){
                continue;
            }
            newListss.push(oldListss[index])
        }
        return  Object.assign({},state,{lists:newListss});
      default:
        return state; 
   }
       
}