import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TheDetails from '../../components/TheDetails/TheDetails';
import EditTaskModal from '../../components/EditTaskModal/EditTaskModal';
import DeleteTaskModal from '../../components/DeleteTaskModal/DeleteTaskModal';

const TaskDetails = (props) => {
    const id = parseInt(props.match.params.id, 10);

    const redirectHome = () => {
        props.history.push("/");
    }

    return (
        <>
            <Container>
                <Row>
                    <Col lg={4}>
                        <Link to="/">Go to homepage</Link>
                        <TheDetails id={id} />

                        <div>
                            <EditTaskModal id={id}/>
                            <DeleteTaskModal id={id} redirectHome={redirectHome} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default withRouter(TaskDetails);
