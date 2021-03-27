import React, {useState, useEffect} from 'react';
import {
    addTask,
    updateTask,
} from '../../actions/task';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TheForm = (props) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const processTask = (e) => {
        e.preventDefault();
        if (props.taskId) {
            // Update
            props.updateTask({taskId: props.taskId, taskTitle, taskDescription});
        } else {
            // Insert
            const taskId = props.id;
            const taskDateTime = new Date();
            props.addTask({taskId, taskTitle, taskDescription, taskDateTime});
        }        

        if (props.closeModalCallback) {
            props.closeModalCallback();
        }
    }

    useEffect(() => {
        if (props.taskId && props.tasks) {
            const task = props.tasks.find((task) => task.taskId === props.taskId);
            setTaskTitle(task.taskTitle);
            setTaskDescription(task.taskDescription);
        }
    }, [props.taskId, props.tasks]);

    return (
        <>
            <Form onSubmit={processTask}>
                <Form.Group controlId="taskTitle">
                    <Form.Label>Task Title*</Form.Label>
                    <Form.Control as="input" onChange={e => setTaskTitle(e.target.value)} value={taskTitle} />
                </Form.Group>

                <Form.Group controlId="taskDescription">
                    <Form.Label>Task Description*</Form.Label>
                    <Form.Control as="textarea" onChange={e => setTaskDescription(e.target.value)} value={taskDescription}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

const mapStateToProps = (state) => ({
    id: state.task.id,
    tasks: state.task.tasks    
});

const mapDispatchToProps = (dispatch) => ({
    addTask: (payload) => dispatch(addTask(payload)),
    updateTask: (payload) => dispatch(updateTask(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TheForm)
