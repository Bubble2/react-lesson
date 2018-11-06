import React, { Component } from 'react';
import './App.css';
import Item from './Item.js' ;


class TaskBoard extends Component {

    constructor(props){
        super(props);
        this.state = {
            finishedTasks:[],
            pendingTasks:[]
        };
        this.addTask = this.addTask.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    addTask(){
        let task = {
            index: this.state.pendingTasks.length,
            name: this.input.value,
            isFinished:false
        };
        this.setState(state=>({
            pendingTasks:[...state.pendingTasks, task]
        }));
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
                <div>
                    <label htmlFor="taskName"> 任务名称：
                        <input type="text" id="taskName" name="taskName" placeholder="请填写任务名称"
                               ref={input => this.input = input} />
                    </label>
                    <button onClick={this.addTask}>添加</button>
                </div>
                <table>
                    <caption>百卓前端任务看板-未完成({this.unFinishNum})</caption>
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

                <table>
                    <caption>百卓前端任务看板-已完成({this.finishNum})</caption>
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
                        this.state.finishedTasks.map((task,index)=>
                            <Item key={"finished_" + index} {...task} handleCheck={this.handleCheck}
                                  deleteTask={this.deleteTask}/>
                        )
                    }

                    </tbody>
                </table>
            </div>
        );
    }
}

export default TaskBoard;
