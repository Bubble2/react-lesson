import React from 'react';
import TodoItem from './TodoItem';
import './index.css';

export default class Todos extends React.Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handlekeyDown = this.handlekeyDown.bind(this)
        this.handleDel = this.handleDel.bind(this)

        this.state = {
            data:[],
            inputVal:''
        }

    }

    //按下enter键执行事件
    handlekeyDown(e){
        if(e.keyCode === 13){
            this.setState({
                data: [...this.state.data, {text: this.state.inputVal, isComplete: false}],
                inputVal: ''
            })
         }
    }

    //获取输入框的值
    handleChange(e){
        this.setState({
            inputVal : e.target.value
        })
    }


    //删除一条记录
    handleDel(index){
        this.state.data.splice(index,1);
        this.setState({
            data:this.state.data
        })
    }

    render(){
        return(
            <div>
                <header>
                    <section>
                        <label htmlFor="title">ToDoList</label>
                        <input 
                            type="text" 
                            value={this.state.inputVal} 
                            onChange={this.handleChange} 
                            placeholder="添加ToDo" 
                            autoComplete="off"
                            onKeyDown={this.handlekeyDown}
                        />
                    </section>
                </header>
                <section>
                    <h2>正在进行 <span>2</span></h2>
                    <ol className="demo-box">
                        {
                            this.state.data.map((item,index) => {
                                return (
                                    <TodoItem content={item.text}  key={index} index={index} del={this.handleDel} />
                                    //<li key={index}>
                                        //<input type="checkbox" onChange={this.handleChk} checked={item.isComplete} />
                                        //<p>{item.text}</p>
                                        //<a onClick={this.handleDel.bind(this,index)}>-</a>
                                    //</li>
                                ) 
                            })
                        }
                    </ol>
                    <h2>已经完成 <span>2</span></h2>
                    <ul>
                        <li><input type="checkbox" defaultChecked="checked" /><p>435345</p><a>-</a></li>
                        <li><input type="checkbox" defaultChecked="checked" /><p>435435</p><a>-</a></li>
                    </ul>
                </section>
            </div>
        )
    }
}