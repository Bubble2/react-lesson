import React from 'react';
import Item from './Item.js' ;

function TaskBoard(props) {

    let handleCheck = (task)=>{
        props.handleCheck(task);
    };
    let deleteTask = (task)=>{
        props.deleteTask(task);
    };

    return (
        <table>
            <caption>{props.boardName}({props.unFinishNum})</caption>
            <thead>
            <tr>
                <th>全选</th>
                <th>序号</th>
                <th>任务名称</th>
                <th>完成状态</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>{
                props.tasks.map((task,index)=>
                    <Item key={"pending_" + index} {...task} handleCheck={handleCheck}
                          deleteTask={deleteTask}/>
                )
            }
            </tbody>
        </table>
    );
}

export default TaskBoard;
