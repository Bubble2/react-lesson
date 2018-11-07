import React from 'react';
function Item(props){

    let handleCheck = ()=>{
        props.handleCheck({
            index:props.index,
            isFinished:props.isFinished
        });
    };
    let handleDelete = ()=>{
        props.deleteTask({
            index:props.index,
            isFinished:props.isFinished
        });
    };
    return (
        <tr className="item" >
            <td><input type="checkbox" onChange={handleCheck} checked={props.isFinished}/></td>
            <td>{props.index + 1}</td>
            <td>{props.name}</td>
            <td>{props.isFinished ? "已完成":"未完成"}</td>
            <td><button onClick={handleDelete}>删除</button></td>
        </tr>
    );
}

export default Item;
