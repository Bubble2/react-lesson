import React from 'react';
import { connect } from 'react-redux';
import { deleInfo, filterInfo } from '../../store/actions/todo';
import '../index.css';

class TodoList extends React.Component{  
    render(){
        const { title, data, deleInfo, filterInfo } = this.props;
        return(
            <div>
                <h2> {title}<span>{data.size}</span></h2>
                <ol className="demo-box">
                    {
                        data.map((item) => ( 
                            <li key={item.get('id')}><input type="checkbox" onClick={() => filterInfo(item.get('id'))} /><p>{item.get('text')}</p><a onClick={() => deleInfo(item.get('id'))}>-</a></li>                                
                        ))
                    }
                </ol>    
            </div>
        )
    }
}

const mapDispatchToProps =  {
    deleInfo,
    filterInfo
}

export default connect(null, mapDispatchToProps)(TodoList);