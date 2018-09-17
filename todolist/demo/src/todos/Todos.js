import React from 'react';
import './index.css';

export default class Todos extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <section>
                        <label htmlFor="title">ToDoList</label>
                        <input type="text" placeholder="添加ToDo" autoComplete="off" />
                    </section>
                </header>
                <section>
                    <h2>正在进行 <span>5</span></h2>
                    <ol className="demo-box">
                        <li><input type="checkbox" /><p>123</p><a>-</a></li>
                        <li><input type="checkbox" /><p>123</p><a>-</a></li>
                        <li><input type="checkbox" /><p>123</p><a>-</a></li>
                    </ol>
                    <h2>已经完成 <span>2</span></h2>
                    <ul>
                        <li><input type="checkbox" defaultChecked="checked" /><p>435345</p><a>-</a></li>
                        <li><input type="checkbox" defaultChecked="checked" /><p>435435</p><a>-</a></li>
                    </ul>
                </section>
            </div>
        )
    }
}