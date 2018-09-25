import React, { Component } from 'react';
import './App.css';

class Item extends Component {

    constructor(props){
        super(props);
        this.state = {
            index:props.index,
            isFinished:props.isFinished,
            name:props.name,
            pendingKey:props.pendingKey,
            deleteTask:props.deleteTask
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleCheck = ()=>{
        console.log('handleCheck:',this);
        this.props.handleCheck({
            index:this.state.index,
            isFinished:this.state.isFinished
        });
    };
    handleDelete(){
        this.props.deleteTask({
            index:this.state.index,
            isFinished:this.state.isFinished
        });
    }

  render() {
    return (
      <tr className="item" >
          <td><input type="checkbox" onClick={this.handleCheck}/></td>
          <td>{this.state.index}</td>
          <td>{this.state.name}</td>
          <td>{this.state.isFinished ? "已完成":"未完成"}</td>
          <td><button onClick={this.handleDelete}>删除</button></td>
      </tr>
    );
  }
}

export default Item;
