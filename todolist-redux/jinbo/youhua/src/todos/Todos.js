import React from 'react';
import { connect } from 'react-redux';
import { initialTodoInfoAsync } from '../store/actions/todo';
import Header from './component/Header';
import TodoList from './component/TodoList'
import './index.css';

class Todos extends React.Component{ 
    componentDidMount () {
        this.props.initialTodoInfoAsync();
    }
    render(){
        const {todoInfo, finishTodoInfo} = this.props;     
        return(
            <div>
                <Header />
                <section>
                    <TodoList isProcess="on" title="正在进行" data={todoInfo}/>
                    <TodoList isProcess="off" title="已经完成" data={finishTodoInfo}/>
                </section>
            </div>
        )
    }
}

const filterTodoData = (data, isFinish) => {
    return data.get('todoInfo').filter(item => {
        return item.get('isFinish') === isFinish 
    })
}

const mapStateToProps = state => ({
    todoInfo: filterTodoData(state.get('updateTodoInfo'), false),
    finishTodoInfo: filterTodoData(state.get('updateTodoInfo'), true),
})


const mapDispatchToProps =  {
    initialTodoInfoAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);