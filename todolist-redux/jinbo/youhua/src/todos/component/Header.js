import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addInfo } from '../../store/actions/todo';
import '../index.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    } 
    addTodoInfo = e => {
        if(e.keyCode === 13){
            this.props.addInfo(e.target.value)
            this.setState({value: ''})
        }
    }
    handleChange = e => {
        const target = e.target;
        this.setState({
            value: target.value
        })
    }
 
    render(){
        const {value} = this.state;
        return(
            <div>
                <header>
                    <section>
                        <label htmlFor="title">ToDoList</label>
                        <input type="text" placeholder="添加ToDo" value={value} onKeyDown = {this.addTodoInfo} onChange ={this.handleChange} autoComplete="off" />
                    </section>
                </header>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addInfo
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Header);