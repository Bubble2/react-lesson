import React,{Component} from 'react';

class Header extends Component{

    handleEnter = e=>{
        if(e.keyCode === 13){
            this.props.addTask();
        }
    };
    handleChange = e=>{
        this.props.changeText(e);
    };

    addTask = ()=>{
        this.props.addTask();
    };
    render(){
        return (<div>
            <label htmlFor="taskName"> 任务名称：
                <input type="text" id="taskName" name="taskName" placeholder="请填写任务名称"
                       onKeyDown={this.handleEnter} onChange={this.handleChange} value={this.props.input}/>
            </label>
            <button onClick={this.addTask}>添加</button>
        </div>);
    };

}

export default Header;

