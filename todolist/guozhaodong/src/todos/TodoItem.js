import React from 'react';

const TodoItem = props => {
    const {id, text, isFinished, handleCheck, handleDelete} = props;
    return(
        <li>
            <input type="checkbox" checked={isFinished?'checked':''} onChange={() => handleCheck(id)} />
            <p>{text}</p>
            <a onClick={() => handleDelete(id)}>-</a>
        </li>
    )
}

export default TodoItem;