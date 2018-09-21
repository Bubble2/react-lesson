import React from 'react';

const AddTodo = props => {
    const {value, handleInputChange, handleAdd} = props;
    return(
        <header>
            <section>
                <label htmlFor="title">ToDoList</label>
                <input type="text" placeholder="添加ToDo" onChange={handleInputChange} onKeyDown={handleAdd} value={value} autoComplete="off" />
            </section>
        </header>
    )
}

export default AddTodo;