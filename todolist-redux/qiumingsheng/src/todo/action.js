import * as types from './constants';

export const addTask = () =>({type:types.ADD_TASK});
export const delTask = task =>({type:types.DEL_TASK,task});
export const handleTask = task =>({type:types.HANDLE_TASK,task});
export const handleEnter = task =>({type:types.HANDLE_ENTER,task});
export const changeText = event =>({type:types.CHANGE_TEXT,event});
