import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo} from './redux/actions';

class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            value: ''
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
            this.props.addTodo(target.value);
            this.setState({value: ''})
        }
    }

    render(){
        return(
            <header>
                <section>
                    <label htmlFor="title">ToDoList</label>
                    <input type="text" placeholder="添加ToDo" onChange={this.handleInputChange} onKeyDown={this.handleAdd} value={this.state.value} autoComplete="off" />
                </section>
            </header>
        )
    }
    
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddTodo);