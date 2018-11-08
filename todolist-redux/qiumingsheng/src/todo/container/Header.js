import {connect} from 'react-redux';
import {addTask,handleEnter,changeText} from '../action';
import Header from '../component/Header';

const mapStateToProps = (state) =>({
    input:state.input
});

const TaskBoardContainer = connect(mapStateToProps,{addTask,handleEnter,changeText})(Header);
export default TaskBoardContainer;