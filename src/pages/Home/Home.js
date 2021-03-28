import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import TheForm from '../../components/TheForm/TheForm';
import TheTable from '../../components/TheTable/TheTable';
import TaskSearch from '../../components/TaskSearch/TaskSearch';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <Container>
                <Row>
                    <Col lg={4}>
                        <h1>ToDo</h1>
                        <Button variant="primary" onClick={handleShow}>
                            Add task
                        </Button>

                        <TaskSearch />

                        <Modal show={showModal} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Create a new task</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <TheForm closeModalCallback={handleClose} />
                            </Modal.Body>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <TheTable />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;
