import React, { Component } from 'react';
import TaskBoardContainer from '../container';

class TaskBoards extends Component {
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
                <TaskBoardContainer boardName="百卓前端任务看板-未完成" />
                <TaskBoardContainer boardName="百卓前端任务看板-已完成" />
            </div>
        );
    }
}

export default TaskBoards;
