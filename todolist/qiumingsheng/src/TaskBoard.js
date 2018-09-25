import React, { Component } from 'react';
import './App.css';
import Item from './Item.js' ;


class TaskBoard extends Component {

    constructor(props){
        super(props);
        this.state = {
            finishedTasks:[],
            pendingTasks:[],
            addTask(task){
                this.state.pendingTasks.push(task);
            },
            dealTask(task){
                this.state.pendingTasks.slice(task.index-1);
                task.index = this.state.finishedTasks.length+1;
                this.state.finishedTasks.push(task);
            },
            restoreTask(task){
                this.state.finishedTasks.slice(task.index-1);
                task.index = this.state.pendingTasks.length+1;
                this.state.pendingTasks.push(task);
            },
            deleteTask(task){
                if(task.isFinished){
                    this.state.finishedTasks.slice(task.index-1);
                }else{
                    this.state.pendingTasks.slice(task.index-1);
                }
            }
        };
        this.addTask = this.addTask.bind(this);
    }

    addTask(){
        let task = {
            index: this.state.pendingTasks.length + 1,
            name: this.input.value,
            isFinished:false
        };
        this.setState(state=>({
            pendingTasks:[...state.pendingTasks, task]
        }));
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
                      <Item key={"pending_" + index} {...task}/>
                  )
              }
              </tbody>
              <tfoot>
                <tr><td colSpan="5">百卓前端任务看板-未完成</td></tr>
              </tfoot>
          </table>
          <table>
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
                      <Item key="finished_{index}" {...task}/>
                  )
              }

              </tbody>
              <tfoot>
                <tr><td colSpan="5">百卓前端任务看板-已完成</td></tr>
              </tfoot>
          </table>
        </div>
    );
  }
}

export default TaskBoard;
