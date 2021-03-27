import React, {useState, useEffect} from 'react';
import {
    addTask,
} from '../../actions/task';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TheForm = (props) => {
    const [taskTitle, setTaskTitle] = useState();
    const [taskDescription, setTaskDescription] = useState();

    useEffect(() => {
        console.log(props.tasks);
    }, [props.tasks]);

    const processTask = (e) => {
        e.preventDefault();
        if (taskTitle && taskDescription) {
            const taskId = props.id;
            const taskDateTime = new Date();
            props.addTask({taskId, taskTitle, taskDescription, taskDateTime});
        } else {
            console.error('Something went wrong with task variables!');
        }

        if (props.closeModalCallback) {
            props.closeModalCallback();
        }      
    }

    return (
        <Form onSubmit={processTask}>
            <Form.Group controlId="taskTitle">
                <Form.Label>Task Title</Form.Label>
                <Form.Control as="input" onChange={e => setTaskTitle(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="taskDescription">
                <Form.Label>Task Description</Form.Label>
                <Form.Control as="textarea" onChange={e => setTaskDescription(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

const mapStateToProps = (state) => ({
    id: state.task.id,
    tasks: state.task.tasks    
});

const mapDispatchToProps = (dispatch) => ({
    addTask: (payload) => dispatch(addTask(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TheForm)
