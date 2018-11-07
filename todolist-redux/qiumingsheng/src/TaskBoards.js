import React, { Component } from 'react';
import './App.css';
import TaskBoard from './TaskBoard.js' ;


class TaskBoards extends Component {

    constructor(props){
        super(props);
        this.state = {
            finishedTasks:[],
            pendingTasks:[]
        };
        this.addTask = this.addTask.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    append(){
        let task = {
            index: this.state.pendingTasks.length,
            name: this.input.value,
            isFinished:false
        };
        this.setState(state=>({
            pendingTasks:[...state.pendingTasks, task],
        }));
        this.input.value = "";
    }
    handleEnter(e){
        if(e.keyCode === 13){
            this.append();
        }
    }
    addTask(){
        this.append();
    }
    handleCheck(task){
        let isFinished = task.isFinished;
        let index = 0;
        let obj = {};
        let sourceKey = isFinished?"finishedTasks":"pendingTasks";
        let targetKey = isFinished?"pendingTasks":"finishedTasks";
        task = this.state[sourceKey][task.index];
        obj[sourceKey] = this.state[sourceKey].filter((elem, i) => {
            if(task.index !== i){
                elem.index = index++;
            }
            return task.index !== i
        });
        task.index = this.state[targetKey].length;
        task.isFinished = !isFinished;
        obj[targetKey] = [...this.state[targetKey], task];
        this.setState(obj);
    }
    deleteTask(task){
        let index = 0;
        let obj = {};
        let key = task.isFinished?"finishedTasks":"pendingTasks";
        obj[key] = this.state[key].filter((elem, i) => {
            if(task.index !== i){
                elem.index = index++;
            }
            return task.index !== i
        });
        this.setState(obj);

    }
    render() {
        return (
            <div>
                <h1>任务面板2.0</h1>
                <div>
                    <label htmlFor="taskName"> 任务名称：
                        <input type="text" id="taskName" name="taskName" placeholder="请填写任务名称"
                               ref={input => this.input = input} onKeyDown={this.handleEnter}/>
                    </label>
                    <button onClick={this.addTask}>添加</button>
                </div>
                <TaskBoard boardName="百卓前端任务看板-未完成" unFinishNum={this.state.pendingTasks.length}
                    tasks={this.state.pendingTasks} handleCheck={this.handleCheck} deleteTask={this.deleteTask}/>
                <TaskBoard boardName="百卓前端任务看板-已完成" unFinishNum={this.state.finishedTasks.length}
                       tasks={this.state.finishedTasks} handleCheck={this.handleCheck} deleteTask={this.deleteTask}/>
            </div>
        );
    }
}

export default TaskBoards;
