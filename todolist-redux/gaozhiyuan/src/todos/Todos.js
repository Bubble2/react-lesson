import React from 'react';
import './index.css';
import TodosHeader from './TodosHeader';
import TodosBody from  './TodosBody';
//取得action
import {handleInputChanges,handleAdds,handleChecks,handleDeletes} from '../redux/action'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Todos extends React.Component{
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
        this.props.handleInputChanges(target.value);
    }
    handleAdd(e){
        const target = e.target;
        if(e.keyCode === 13){
            if(target.value === ''){
               alert('请输入内容');
            }else{
                this.props.handleAdds(target.value);
            }
        }
    }
    handleCheck(key){
        this.props.handleChecks(key);
    }
    handleDelete(key){
        this.props.handleDeletes(key);
    }
    dealData(hasFinshed){
      return this.props.todoReducer.lists.filter((items)=>{
          return hasFinshed?items.hasFinsh:!items.hasFinsh;
      });
    }
    render(){
        console.log(this.props.todoReducer);
        return(
            <div>
                <TodosHeader value={this.props.todoReducer.value}  handleInputChange={this.handleInputChange} handleAdd={this.handleAdd}></TodosHeader>
                <section>
                    <TodosBody type="1" title="正在进行" data={this.dealData(false)} handleCheck={this.handleCheck} handleDelete={this.handleDelete}></TodosBody>
                    <TodosBody type="2" title="已经完成" data={this.dealData(true)} handleCheck={this.handleCheck} handleDelete={this.handleDelete}></TodosBody>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoReducer: state.todoReducer
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        handleInputChanges,
        handleAdds,
        handleChecks,
        handleDeletes
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);