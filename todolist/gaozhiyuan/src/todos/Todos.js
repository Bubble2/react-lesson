import React from 'react';
import './index.css';
import TodosHeader from './TodosHeader'
import TodosBody from  './TodosBody'

export default class Todos extends React.Component{
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state={
            value:'',
            lists:[]
        }
    }
    handleInputChange(e){
        const target = e.target;
        this.setState({
            value: target.value
        });
    }
    handleAdd(e){
        const target = e.target;
        if(e.keyCode === 13){
            if(target.value === ''){
               alert('请输入内容');
            }else{
               this.setState(
                   (prevState)=>({
                      lists:[...prevState.lists,{
                          keys: (new Date()).getTime(),
                          content:target.value,
                          hasFinsh:false
                      }],
                      value:''
                   })
               );
            }
        }
    }
    handleCheck(key){
        this.setState((prevState)=>{
            let oldLists = prevState.lists;
            let newLists = [];
            for(let index in oldLists){
                 if(oldLists[index].keys === key){
                     oldLists[index].hasFinsh = !oldLists[index].hasFinsh;
                 }
                newLists.push(oldLists[index])
            }
            return{
                lists:newLists
            }
        });
    }
    handleDelete(key){
        this.setState((prevState)=>{
            let oldLists = prevState.lists;
            let newLists = [];
            for(let index in oldLists){
                if(oldLists[index].keys === key){
                    continue;
                }
                newLists.push(oldLists[index])
            }
            return{
                lists:newLists
            }
        });
    }
    dealData(hasFinshed){
      return this.state.lists.filter((items)=>{
          return hasFinshed?items.hasFinsh:!items.hasFinsh;
      });
    }
    render(){
        return(
            <div>
                <TodosHeader value={this.state.value}  handleInputChange={this.handleInputChange} handleAdd={this.handleAdd}></TodosHeader>
                <section>
                    <TodosBody type="1" title="正在进行" data={this.dealData(false)} handleCheck={this.handleCheck} handleDelete={this.handleDelete}></TodosBody>
                    <TodosBody type="2" title="已经完成" data={this.dealData(true)} handleCheck={this.handleCheck} handleDelete={this.handleDelete}></TodosBody>
                </section>
            </div>
        )
    }
}