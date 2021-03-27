import React, {useState} from 'react';
import { connect } from 'react-redux';
import {
    deleteTask,
} from '../../actions/task';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {Link} from 'react-router-dom';

import TheForm from '../../components/TheForm/TheForm';

const TheTable = (props) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleDeleteClose = () => setShowDeleteModal(false);
    const handleDeleteShow = () => setShowDeleteModal(true);

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const handleUpdateClose = () => setShowUpdateModal(false);
    const handleUpdateShow = () => setShowUpdateModal(true);

    const [taskIndex, setTaskIndex] = useState();
    const [taskId, setTaskId] = useState();

    const deleteTask = () => {
        props.deleteTask(taskIndex)
        handleDeleteClose();
    }

    const showDeleteTaskModal = (index) => {
        setTaskIndex(index);
        handleDeleteShow();
    }

    const showUpdateTaskModal = (id) => {
        setTaskId(id);
        handleUpdateShow();
    }

    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Creation Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map((task, index) => {
                        return (
                            <tr key={index}>
                                <td>{task.taskId}</td>
                                <td><Link to={`/task/${task.taskId}`}>{task.taskTitle}</Link></td>
                                <td>{task.taskDateTime.toLocaleString()}</td>
                                <td><Button variant="primary" onClick={() => showUpdateTaskModal(task.taskId)}>Edit</Button></td>
                                <td><Button variant="primary" onClick={() => showDeleteTaskModal(index)}>Delete</Button></td>
                            </tr>
                        )})}
                </tbody>
            </Table>
            <Modal show={showDeleteModal} onHide={handleDeleteClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete the task</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete the task?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={deleteTask}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showUpdateModal} onHide={handleUpdateClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit the task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TheForm closeModalCallback={handleUpdateClose} taskId={taskId} />
                </Modal.Body>
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
