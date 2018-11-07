export const addTodo = (text) => {
    return {
        type: 'ADD_TODO', 
        text
    }
}

export const delTodo = (id) => {
    return {
        type: 'DELETE_TODO', 
        id
    }
}

export const filterTodo = (id) => {
    return {
        type: 'FILTER_TODO', 
        id
    }
}

export const cancelFilterTodo = (id) => {
    return {
        type: 'CANCEL_FILTER_TODO', 
        id
    }
}