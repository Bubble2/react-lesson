import React, { Component } from 'react';
import TaskBoardContainer from '../container/TaskBoard';
import Header from '../container/Header';

class TaskBoards extends Component {
    render() {
        return (
            <div>
                <h1>任务面板2.0</h1>
                <Header />
                <TaskBoardContainer type="pendingTasks" boardName="百卓前端任务看板-未完成" />
                <TaskBoardContainer type="finishedTasks" boardName="百卓前端任务看板-已完成" />
            </div>
        );
    }
}

export default TaskBoards;
