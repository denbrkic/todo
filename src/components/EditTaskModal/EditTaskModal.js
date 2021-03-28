import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TheForm from '../../components/TheForm/TheForm';

const EditTaskModal = (props) => {
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const handleUpdateClose = () => setShowUpdateModal(false);
    const handleUpdateShow = () => setShowUpdateModal(true);

    const showUpdateTaskModal = () => {
        handleUpdateShow();
    }

    return (
        <>
        <Button variant="primary" onClick={showUpdateTaskModal}>Edit</Button>
        <Modal show={showUpdateModal} onHide={handleUpdateClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit the task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TheForm closeModalCallback={handleUpdateClose} taskId={props.id} />
            </Modal.Body>
        </Modal>
        </>
    )
}

export default EditTaskModal;
