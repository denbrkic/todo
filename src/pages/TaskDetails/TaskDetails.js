import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import TheForm from '../../components/TheForm/TheForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TheDetails from '../../components/TheDetails/TheDetails';
import { connect } from 'react-redux';
import {
    deleteTask,
} from '../../actions/task';

const TaskDetails = (props) => {
    const id = parseInt(props.match.params.id, 10);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleDeleteClose = () => setShowDeleteModal(false);
    const handleDeleteShow = () => setShowDeleteModal(true);

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const handleUpdateClose = () => setShowUpdateModal(false);
    const handleUpdateShow = () => setShowUpdateModal(true);

    const deleteTask = () => {
        props.deleteTask(id)
        handleDeleteClose();
        props.history.push("/");
    }

    const showDeleteTaskModal = () => {
        handleDeleteShow();
    }

    const showUpdateTaskModal = () => {
        handleUpdateShow();
    }

    return (
        <>
            <Container>
                <Row>
                    <Col lg={4}>
                        <Link to="/">Go to homepage</Link>
                        <TheDetails id={id} />

                        <div>
                            <Button variant="primary" onClick={showUpdateTaskModal}>Edit</Button>
                            <Button variant="danger" onClick={showDeleteTaskModal}>Delete</Button>
                        </div>

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
                                <TheForm closeModalCallback={handleUpdateClose} taskId={id} />
                            </Modal.Body>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (payload) => dispatch(deleteTask(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
