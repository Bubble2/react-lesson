import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../action';
import TaskBoard from '../component/TaskBoard';

const mapStateToProps = (state, ownProps) =>({
    tasks:state[ownProps.type]
});

const mapDispatchToProps = dispatch =>({
    actions:bindActionCreators(taskActions,dispatch )
});

const TaskBoardContainer = connect(mapStateToProps,mapDispatchToProps)(TaskBoard);
export default TaskBoardContainer;