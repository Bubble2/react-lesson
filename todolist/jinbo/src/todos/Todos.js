import React from 'react';
import { connect } from 'react-redux';
import { addInfo, deleInfo, filterInfo, cancelFilterInfo } from '../store/actions/todo'
import './index.css';

class Todos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    } 
    addInfo (e, val) {
        if(e.keyCode === 13){
            this.props.addTodoInfo(val)
            this.setState({value: ''})
        }
    }
    handleChange (e) {
        const target = e.target;
        this.setState({
            value: target.value
        })
    }
    render(){
        const todoInfo = this.props.todoInfo.filter(item => {
            if(item.isFinish === false) {
                return item
            }
        })
        const finishTodoInfo = this.props.todoInfo.filter(item => {
            if(item.isFinish === true) {
                return item
            }
        })
        return(
            <div>
                <header>
                    <section>
                        <label htmlFor="title">ToDoList</label>
                        <input type="text" placeholder="添加ToDo" value={this.state.value} onKeyDown = {(e) => this.addInfo(e, this.state.value)} onChange ={(e) => this.handleChange(e)} autoComplete="off" />
                    </section>
                </header>
                <section>
                    <h2>正在进行 <span>{todoInfo.length}</span></h2>
                    <ol className="demo-box">
                        {
                            todoInfo.map((item) => ( 
                                <li key={item.id}><input type="checkbox" onClick={() => this.props.filterTodoInfo(item.id)} /><p>{item.text}</p><a onClick={() => this.props.deleTodoInfo(item.id)}>-</a></li>                                
                            ))
                        }
                    </ol>
                    <h2>已经完成 <span>{finishTodoInfo.length}</span></h2>
                    <ul>
                        {
                            finishTodoInfo.map((item) => ( 
                                <li key={item.id}><input type="checkbox" onClick={() => this.props.cancelTodoFilterInfo(item.id)} defaultChecked="checked"/><p>{item.text}</p><a onClick={() => this.props.deleTodoInfo(item.id)}>-</a></li>                                
                            ))
                        }
                    </ul>
                </section>
            </div>
        )
    }
}

export default connect(
    state =>({
        todoInfo: state.updateTodoInfo.todoInfo
    }),
    dispatch => ({
        addTodoInfo: (data) => dispatch(addInfo(data)),
        deleTodoInfo: (data) => dispatch(deleInfo(data)),
        filterTodoInfo: (data) => dispatch(filterInfo(data)),
        cancelTodoFilterInfo: (data) => dispatch(cancelFilterInfo(data))
    })
  )(Todos)