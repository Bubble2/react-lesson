import React, { Component } from 'react';
import './App.css';

class Item extends Component {

    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(){
        this.props.handleCheck({
            index:this.props.index,
            isFinished:this.props.isFinished
        });
    };
    handleDelete(){
        this.props.deleteTask({
            index:this.props.index,
            isFinished:this.props.isFinished
        });
    }

  render() {
    return (
      <tr className="item" >
          <td><input type="checkbox" onChange={this.handleCheck} checked={this.props.isFinished}/></td>
          <td>{this.props.index + 1}</td>
          <td>{this.props.name}</td>
          <td>{this.props.isFinished ? "已完成":"未完成"}</td>
          <td><button onClick={this.handleDelete}>删除</button></td>
      </tr>
    );
  }
}

export default Item;
