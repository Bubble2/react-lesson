import React from 'react';
import TodosItem from './TodosItem';

function TodosBody(props){
    const {title,type,data,handleDelete,handleCheck} = props;
    const Tag = type==='1'?'ol':'ul';
    return(
        <div>
            <h2>{title} <span>{data.length}</span></h2>
            <Tag className="demo-box">
                {
                    data.map(function(item){
                        return <TodosItem key={item.keys} {...item} handleDelete={handleDelete} handleCheck={handleCheck} />
                    })
                }
            </Tag>
        </div>
    )
}
export  default  TodosBody;