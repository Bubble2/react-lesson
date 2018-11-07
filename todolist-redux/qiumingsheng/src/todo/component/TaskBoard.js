import React from 'react';
import Item from './Item.js' ;

const TaskBoard = (boardName,tasks, actions)=>(
    <table>
        <caption>{boardName}({tasks.length})</caption>
        <thead>
        <tr>
            <th>全选</th>
            <th>序号</th>
            <th>任务名称</th>
            <th>完成状态</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        {
            tasks.map((task,index)=>
                <Item key={"pending_" + index} task={task} {...actions} />
            )
        }
        </tbody>
    </table>
);

export default TaskBoard;
