import React from 'react';
import TodoItem from './TodoItem';

const TodoGroup = props => {
    const {title, type, data} = props;
    const Tag = type?'ul':'ol';
    return(
        <div>
            <h2>{title} <span>{data.length}</span></h2>
            <Tag className="demo-box">
                {
                    data.map((item) => {
                        return <TodoItem key={item.id} {...item} />
                    })
                }
            </Tag>
        </div>
    )
}

export default TodoGroup;