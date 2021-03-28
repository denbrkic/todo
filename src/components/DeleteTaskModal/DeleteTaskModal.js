import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import {
    deleteTask,
    paginateTasks,
} from '../../actions/task';

const DeleteTaskModal = (props) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleDeleteClose = () => setShowDeleteModal(false);
    const handleDeleteShow = () => setShowDeleteModal(true);

    const deleteTask = () => {
        props.deleteTask(props.id)
        handleDeleteClose();
        if (props.redirectHome) {
            props.redirectHome();
        }
        props.paginateTasks(false);
    }

    const showDeleteTaskModal = () => {
        handleDeleteShow();
    }

    return (
        <>
            <Button variant="danger" onClick={showDeleteTaskModal}>Delete</Button>
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
        </>
    )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (payload) => dispatch(deleteTask(payload)),
    paginateTasks: (payload) => dispatch(paginateTasks(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTaskModal);
