import React from 'react';
import './index.css';
import AddTodo from './AddTodo';
import TodoGroup from './TodoGroup';

export default class Todos extends React.Component{
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            value: '',
            todos: []
        }
    }

    handleInputChange(e){
        const target = e.target;
        this.setState({
            value: target.value
        })
    }

    handleAdd(e){
        if(e.keyCode === 13){
            const target = e.target;
            if(target.value === '') return;
            this.setState((prevState) =>({
                todos: [...prevState.todos, {
                    id: (new Date()).getTime(),
                    text: target.value,
                    isFinished: false
                }],
                value: ''
            }))
        }
    }

    handleCheck(id){
        this.setState((prevState) =>{
            const newTodos = prevState.todos.map((item) => {
                if(item.id === id){
                    item.isFinished = !item.isFinished;
                }
                return item;
            })

            return {
                todos: newTodos
            }
        });
    }

    handleDelete(id){
        this.setState((prevState) =>{
            const newTodos = prevState.todos.filter((item) => {
                return item.id !== id;
            });

            return {
                todos: newTodos
            }
        });
    }

    filterData(isFinished){
        return this.state.todos.filter((item) => {
            return isFinished?item.isFinished:!item.isFinished;
        });
    }

    render(){
        return(
            <div>
                <AddTodo value={this.state.value} handleInputChange={this.handleInputChange} handleAdd={this.handleAdd}/>
                <section>
                    <TodoGroup type={0} title="正在进行" data={this.filterData()} handleCheck={this.handleCheck} handleDelete={this.handleDelete} />
                    <TodoGroup type={1} title="已经完成" data={this.filterData(true)} handleCheck={this.handleCheck} handleDelete={this.handleDelete} />
                </section>
            </div>
        )
    }
}