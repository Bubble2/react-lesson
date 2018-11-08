import {
    ADD_TODO,
    CHECK_TODO,
    DELETE_TODO
} from './constants';

const addTodo = text => ({
    type:ADD_TODO,
    text
})

const checkTodo = id => ({
    type:CHECK_TODO,
    id
})

const deleteTodo = id => ({
    type:DELETE_TODO,
    id
})

export {
    addTodo,
    checkTodo,
    deleteTodo
}