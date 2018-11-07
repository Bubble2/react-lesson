import React from 'react';
import {addTodo,delTodo,filterTodo,cancelFilterTodo} from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './index.css';

class Todos extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    //enter键执行添加todo
    handlekeyDown(e){
        const target = e.target;
        if(e.keyCode === 13){
            if(target.value === ''){
               alert('请输入内容');
            }else{
                this.props.addTodo(target.value);
                target.value = ''
            }
         }
    }

    //获取输入框的值
    handleChange(e) {
        const target = e.target;
        this.setState({
            value: target.value
        })
    }

    //删除todo
    handleDel(id){
        this.props.delTodo(id)
    }

    //勾选已完成todo
    filterTodo(id){
        this.props.filterTodo(id)
    }

    //取消勾选
    cancelFilterTodo(id){
        this.props.cancelFilterTodo(id) 
    }

    render(){
        const todoInfo = this.props.TodoList.filter(item => {
            return item.completed === false
            
        })
        const finishTodoInfo = this.props.TodoList.filter(item => {
            return item.completed === true
        })

        return(
            <div>
                <header>
                    <section>
                        <label htmlFor="title">ToDoList</label>
                        <input 
                            type="text" 
                            value={this.props.TodoList.value} 
                            onChange={(e) => this.handleChange(e)} 
                            placeholder="添加ToDo" 
                            autoComplete="off"
                            onKeyDown={(e) => this.handlekeyDown(e)}
                        />
                    </section>
                </header>

                <section>
                    <h2>正在进行 <span>{todoInfo.length}</span></h2>
                    <ol className="demo-box">
                        {
                            todoInfo.map((item) => ( 
                                <li key={item.id}>
                                    <input type="checkbox"  onClick={() => this.filterTodo(item.id)} />
                                    <p>{item.text}</p>
                                    <a onClick={() => this.handleDel(item.id)}>-</a>
                                </li>                                
                            ))
                        }
                    </ol>
                    <h2>已经完成 <span>{finishTodoInfo.length}</span></h2>
                    <ul>
                        {
                            finishTodoInfo.map((item) => ( 
                                <li key={item.id}>
                                    <input type="checkbox"  onClick={() => this.cancelFilterTodo(item.id)} defaultChecked="checked"/>
                                    <p>{item.text}</p>
                                    <a onClick={() => this.handleDel(item.id)}>-</a>
                                </li>                                
                            ))
                        }
                    </ul>
                </section>

            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    TodoList: state.TodoList.data
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addTodo,
    delTodo,
    filterTodo,
    cancelFilterTodo
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos);
