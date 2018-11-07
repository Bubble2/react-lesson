import * as types from './constants'

const initialState = {
  pendingTasks:[],
  finishedTasks:[]
};

function addTask(state, task){
    task.index = state.pendingTasks.length;
    task.isFinished = false;
    return {
        pendingTasks:[...state.pendingTasks, task],
    }
}

function deleteTask(task){
    let index = 0;
    let obj = {};
    let key = task.isFinished?"finishedTasks":"pendingTasks";
    obj[key] = this.state[key].filter((elem, i) => {
        if(task.index !== i){
            elem.index = index++;
        }
        return task.index !== i
    });
    return obj
}

function handleCheck(task){
    let isFinished = task.isFinished;
    let index = 0;
    let obj = {};
    let sourceKey = isFinished?"finishedTasks":"pendingTasks";
    let targetKey = isFinished?"pendingTasks":"finishedTasks";
    task = this.state[sourceKey][task.index];
    obj[sourceKey] = this.state[sourceKey].filter((elem, i) => {
        if(task.index !== i){
            elem.index = index++;
        }
        return task.index !== i
    });
    task.index = this.state[targetKey].length;
    task.isFinished = !isFinished;
    obj[targetKey] = [...this.state[targetKey], task];
    return obj;
}
export default function todos(state=initialState,action) {
    switch (action.type) {
        case types.ADD_TASK:return addTask(state,action.task);
        case types.DEL_TASK:return deleteTask(state,action.task);
        case types.HANDLE_TASK:return handleCheck(state,action.task);
        default: return state;
    }
}