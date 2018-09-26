import React, { Component } from 'react';
import './App.css';
import Item from './Item.js' ;


class TaskBoard extends Component {

    constructor(props){
        super(props);
        this.state = {
            finishedTasks:[],
            pendingTasks:[],
        };
        this.addTask = this.addTask.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.dealTask = this.dealTask.bind(this);
        this.restoreTask = this.restoreTask.bind(this);
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
        if(!task.isFinished){
            this.dealTask(task);
        }else{
            this.restoreTask(task);
        }
    }
    dealTask(task){
        console.log("before dealTask:",task);
        task = this.state.pendingTasks[task.index];
        console.log("after dealTask:",task);
        // let test = this.state.pendingTasks;
        // console.log("after pendingTasks:",test.filter((elem, i) => task.index !== i));
        let index = 0;
        var aa =  this.state.pendingTasks.filter((elem, i) => {
            if (task.index !== i) {
                elem.index = index++;
            }
            return task.index !== i
        }
        this.setState(prevState => {
            pendingTasks: prevState.pendingTasks.filter((elem, i) => {
                if (task.index !== i) {
                    elem.index = index++;
                }
                return task.index !== i
                }
        )})
        // this.setState({
        //     pendingTasks: this.state.pendingTasks.filter((elem, i) => {
        //         if(task.index !== i){
        //             elem.index = index++;
        //         }
        //         return task.index !== i
        //     })
        // },function(){
        //     console.log("after set:",this.state.pendingTasks);
        // });
        task.index = this.state.finishedTasks.length;
        task.isFinished = true;
        this.setState(state=>({
            finishedTasks:[...state.finishedTasks, task]
        }));
    }
    restoreTask(task){
        console.log("before restoreTask:",task);
        task = this.state.finishedTasks[task.index];
        console.log("after restoreTask:",task);
        let index = 0;
        this.setState({
            finishedTasks: this.state.finishedTasks.filter((elem, i) => {
                if(task.index !== i){
                    elem.index = index++;
                }
                return task.index !== i
            })
        });
        task.index = this.state.pendingTasks.length;
        task.isFinished = false;
        this.setState(state=>({
            pendingTasks:[...state.pendingTasks, task]
        }));
    }
    deleteTask(task){
        if(task.isFinished){
            this.setState({
                finishedTasks: this.state.finishedTasks.filter((elem, i) => task.index !== i)
            });
        }else{
            this.setState({
                pendingTasks: this.state.pendingTasks.filter((elem, i) => task.index !== i)
            });
        }
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
                      <Item key={"pending_" + index} {...task} handleCheck={this.handleCheck}
                            deleteTask={this.deleteTask}/>
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
                      <Item key={"finished_" + index} {...task} handleCheck={this.handleCheck}
                            deleteTask={this.deleteTask}/>
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
