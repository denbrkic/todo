import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import TheForm from '../../components/TheForm/TheForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TaskDetails = (props) => {
    const submitCallback = () => {
        props.history.push("/");
    }

    return (
        <>
            <Container>
                <Row>
                    <Col lg={4}>
                        <Link to="/" exact>Go to homepage</Link>
                        <h1>Task Details Page</h1>
                        <TheForm taskId={parseInt(props.match.params.id, 10)} submitCallback={submitCallback} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default withRouter(TaskDetails);
