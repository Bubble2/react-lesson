import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {checkTodo, deleteTodo} from './redux/actions';

const TodoItem = props => {
    const {id, isFinished, text} = props;
    return(
        <li>
            <input type="checkbox" checked={isFinished?'checked':''} onChange={props.checkTodo.bind(this, id)} />
            <p>{text}</p>
            <a onClick={props.deleteTodo.bind(this, id)}>-</a>
        </li>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        checkTodo,
        deleteTodo
    }, dispatch)
}

export default connect(null,mapDispatchToProps)(TodoItem);

