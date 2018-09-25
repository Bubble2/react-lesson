import React from 'react';

function TodosItem(props){
    const {keys,content,hasFinsh,handleCheck,handleDelete} = props;
    return(
        <li>
            <input type="checkbox" checked={hasFinsh?'checked':''} onChange={()=>handleCheck(keys)}/>
            <p>{content}</p>
            <a onClick={()=>handleDelete(keys)}>-</a>
        </li>
    )
}
export default TodosItem;