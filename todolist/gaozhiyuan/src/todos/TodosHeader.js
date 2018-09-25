import React from 'react';

function TodosHeader(props){

    const {value,handleInputChange,handleAdd} = props;
    return(
       <header>
           <section>
               <label htmlFor="title">ToDoLists</label>
               <input type="text" placeholder="回车添加任务" onChange={handleInputChange} onKeyDown={handleAdd} value={value} autoComplete="off"/>
           </section>
       </header>
    )
}

export default TodosHeader;