import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {
    addTask,
} from '../../actions/task';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = (props) => {
    const [taskTitle, setTaskTitle] = useState();
    const [taskDescription, setTaskDescription] = useState();

    const addTask = (e) => {
        e.preventDefault();
        if (taskTitle && taskDescription) {
            const taskId = props.tasks.length + 1;
            const taskDateTime = new Date();
            props.addTask({taskId, taskTitle, taskDescription, taskDateTime});
        } else {
            console.error('Something went wrong with task variables!');
        }        
    }

    useEffect(() => {
        console.log(props.tasks);
    }, [props.tasks]);

    return (
        <>
            <Container>
                <Row>
                    <Col lg={4}>
                        <h1>ToDo</h1>
                        <h2>Create Task</h2>
                        <Form onSubmit={addTask}>
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
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.task.tasks,
});

const mapDispatchToProps = (dispatch) => ({
    addTask: (payload) => dispatch(addTask(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
