import React from 'react';

class TodoItem extends React.Component{
    constructor(props){
        super(props)
        this.handleDel = this.handleDel.bind(this)
    }
    handleDel(){
        const {del,index} = this.props;
        del(index)
    }

    render(){
        const {content} = this.props;
        return(
            <li>
                <input type="checkbox"  />
                <p>{content}</p>
                <a onClick={this.handleDel}>-</a>
            </li>
        )
    }
}

export default TodoItem