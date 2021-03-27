import React, {useState} from 'react';
import { connect } from 'react-redux';
import {
    deleteTask,
} from '../../actions/task';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const TheTable = (props) => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const [taskId, setTaskId] = useState();

    const deleteTask = () => {
        props.deleteTask(taskId)
        handleClose();
    }

    const showDeleteTaskModal = (id) => {
        setTaskId(id);
        handleShow();
    }

    return (
        <>
        <Table responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Creation Date</th>
                    <th>Details</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.tasks.map((task, id) => {
                    return (
                        <tr key={id}>
                            <td>{task.taskId}</td>
                            <td>{task.taskTitle}</td>
                            <td>{task.taskDateTime.toLocaleString()}</td>
                            <td></td>
                            <td></td>
                            <td><Button variant="primary" onClick={() => showDeleteTaskModal(id)}>Delete</Button></td>
                        </tr>
                    )})}
            </tbody>
        </Table>
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you really want to delete the task?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={deleteTask}>
                    Delete
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.task.tasks    
});

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (payload) => dispatch(deleteTask(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TheTable);
