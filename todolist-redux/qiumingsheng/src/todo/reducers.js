import * as types from './constants'

const initialState = {
  pendingTasks:[],
  finishedTasks:[],
  input:""
};

function append(state){
    let task = {
        name: state.input,
        index: state.pendingTasks?state.pendingTasks.length:0,
        isFinished: false
    };
    return Object.assign({}, state, {
        pendingTasks:[...state.pendingTasks, task],
        input:""
    });
}
function addTask(state){
    return append(state);
}
function handleEnter(state,event){
    if(event.keyCode === 13){
        return append(state);
    }
}

function deleteTask(state,task){
    let index = 0;
    let obj = {};
    let key = task.isFinished?"finishedTasks":"pendingTasks";
    obj[key] = state[key].filter((elem, i) => {
        if(task.index !== i){
            elem.index = index++;
        }
        return task.index !== i
    });
    return Object.assign({}, state, obj);
}

function handleCheck(state,task){
    let isFinished = task.isFinished;
    let index = 0;
    let obj = {};
    let sourceKey = isFinished?"finishedTasks":"pendingTasks";
    let targetKey = isFinished?"pendingTasks":"finishedTasks";
    task = state[sourceKey][task.index];
    obj[sourceKey] = state[sourceKey].filter((elem, i) => {
        if(task.index !== i){
            elem.index = index++;
        }
        return task.index !== i
    });
    task.index = state[targetKey].length;
    task.isFinished = !isFinished;
    obj[targetKey] = [...state[targetKey], task];
    return Object.assign({}, state, obj);
}

function changeText(state,event){
    return Object.assign({}, state, {
        input:event.target.value
    });
}

export default function todos(state=initialState,action) {
    switch (action.type) {
        case types.ADD_TASK:return addTask(state);
        case types.DEL_TASK:return deleteTask(state,action.task);
        case types.HANDLE_TASK:return handleCheck(state,action.task);
        case types.CHANGE_TEXT:return changeText(state,action.event);
        case types.HANDLE_ENTER:return handleEnter(state,action.event);
        default: return state;
    }
}