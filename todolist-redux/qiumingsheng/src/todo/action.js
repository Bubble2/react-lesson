import * as types from './constants';

export const addTask = task =>({type:types.ADD_TASK,task});
export const delTask = task =>({type:types.DEL_TASK,task});
export const handleTask = task =>({type:types.HANDLE_TASK,task});