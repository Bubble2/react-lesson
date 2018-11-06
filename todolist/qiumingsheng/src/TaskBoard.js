import React, { Component } from 'react';
import Item from './Item.js' ;


function TaskBoard(props) {

    let addTask = ()=>{
        props.addTask();
    };
    let handleCheck = ()=>{
        props.handleCheck();
    };
    let deleteTask = ()=>{
        props.deleteTask();
    };


    return (
        <table>
            <caption>{props.taskName}({this.unFinishNum})</caption>
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
                this.state.pendingTasks.map((task,index)=>
                    <Item key={"pending_" + index} {...task} handleCheck={this.handleCheck}
                          deleteTask={this.deleteTask}/>
                )
            }
            </tbody>
        </table>
    );
}

export default TaskBoard;
