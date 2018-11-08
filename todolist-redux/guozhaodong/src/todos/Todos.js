import React from 'react';
import {connect} from 'react-redux';
import './index.css';
import AddTodo from './AddTodo';
import TodoGroup from './TodoGroup';

const Todos = props => {
    return(
        <div>
            <AddTodo />
            <section>
                <TodoGroup type={0} title="正在进行" data={props.unFinishedTodos} />
                <TodoGroup type={1} title="已经完成" data={props.FinishedTodos} />
            </section>
        </div>
    )
}


const filterData = (todos, isFinished) => {
    return todos.filter((item) => {
        return isFinished === item.isFinished;
    });
}

const mapStateToProps = state => ({
    FinishedTodos: filterData(state.todos, true),
    unFinishedTodos: filterData(state.todos, false)
})

export default connect(mapStateToProps)(Todos);