import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initialTodoInfoAsync, addInfo, deleInfo, filterInfo, cancelFilterInfo } from '../store/actions/todo';
import './index.css';

class Todos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    } 
    addTodoInfo (e, val) {
        if(e.keyCode === 13){
            this.props.addInfo(val)
            this.setState({value: ''})
        }
    }
    handleChange (e) {
        const target = e.target;
        this.setState({
            value: target.value
        })
    }
    componentDidMount () {
        this.props.initialTodoInfoAsync();
    }
    render(){
        const {value} = this.state;
        const {todoData, addInfo, deleInfo, filterInfo, cancelFilterInfo} = this.props;
        
        const todoInfo = todoData.get('todoInfo').filter(item => {
            return item.get('isFinish') === false 
        })
        const finishTodoInfo = todoData.get('todoInfo').filter(item => {
            return item.get('isFinish') === true
        })
        return(
            <div>
                <header>
                    <section>
                        <label htmlFor="title">ToDoList</label>
                        <input type="text" placeholder="添加ToDo" value={value} onKeyDown = {(e) => this.addTodoInfo(e, value)} onChange ={(e) => this.handleChange(e)} autoComplete="off" />
                    </section>
                </header>
                <section>
                    <h2>正在进行 <span>{todoInfo.size}</span></h2>
                    <ol className="demo-box">
                        {
                            todoInfo.map((item) => ( 
                                <li key={item.get('id')}><input type="checkbox" onClick={() => filterInfo(item.get('id'))} /><p>{item.get('text')}</p><a onClick={() => deleInfo(item.get('id'))}>-</a></li>                                
                            ))
                        }
                    </ol>
                    <h2>已经完成 <span>{finishTodoInfo.size}</span></h2>
                    <ul>
                        {
                            finishTodoInfo.map((item) => ( 
                                <li key={item.get('id')}><input type="checkbox" onClick={() => cancelFilterInfo(item.get('id'))} defaultChecked="checked" /><p>{item.get('text')}</p><a onClick={() => deleInfo(item.get('id'))}>-</a></li>                                
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
        todoData: state.get('updateTodoInfo')
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        initialTodoInfoAsync,
        addInfo,
        deleInfo,
        filterInfo,
        cancelFilterInfo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);