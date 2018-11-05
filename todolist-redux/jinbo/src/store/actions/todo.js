export const addInfo = (data) => {
    return {type: 'ADD_TODO_INFO', data}
}

export const deleInfo = (data) => {
    return {type: 'DELETE_TODO_INFO', data}
}

export const filterInfo = (data) => {
    return {type: 'FILTER_TODO_INFO', data}
}

export const cancelFilterInfo = (data) => {
    return {type: 'CANCEL_FILTER_INFO', data}
}

