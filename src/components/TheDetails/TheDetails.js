import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

const TheDetails = (props) => {

    const [taskId, setTaskId] = useState();
    const [taskTitle, setTaskTitle] = useState();
    const [taskDescription, setTaskDescription] = useState();
    const [taskDateTime, setTaskDateTime] = useState();

    useEffect(() => {
        if (props.id && props.tasks) {
            const taskIndex = props.tasks.findIndex(task => task.taskId === props.id);
            setTaskId(props.tasks[taskIndex].taskId);
            setTaskTitle(props.tasks[taskIndex].taskTitle);
            setTaskDescription(props.tasks[taskIndex].taskDescription);
            setTaskDateTime(props.tasks[taskIndex].taskDateTime.toLocaleString());
        }
    }, [props.id, props.tasks]);

    return (
        <>
            <h1>{taskTitle}</h1>
            <p>{taskDescription}</p>
            <small>Task ID: {taskId}, Creation date: {taskDateTime}</small>
        </>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.task.tasks    
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TheDetails)
