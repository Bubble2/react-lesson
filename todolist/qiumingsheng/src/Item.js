import React, { Component } from 'react';
import './App.css';

class Item extends Component {

    constructor(props){
        super(props);
        console.log("task:",props.task);
        this.state = {
            index:props.index,
            isFinished:props.isFinished,
            name:props.name,
            pendingKey:props.pendingKey,
            deleteCallback:props.deleteCallback
        };
        this.handleCheck = this.handleCheck.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleCheck(){
        this.setState(state=>({
            isFinished: !state.isFinished
        }));

    }
    handleDelete(){
        this.state.deleteTask({
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
