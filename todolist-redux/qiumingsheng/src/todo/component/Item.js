import React from 'react';
function Item(props){

   const {task,delTask,handleTask} = props;
    return (
        <tr className="item" >
            <td><input type="checkbox" onChange={()=>handleTask(task)} checked={task.isFinished}/></td>
            <td>{task.index + 1}</td>
            <td>{task.name}</td>
            <td>{task.isFinished ? "已完成":"未完成"}</td>
            <td><button onClick={()=>delTask(task)}>删除</button></td>
        </tr>
    );
}

export default Item;
