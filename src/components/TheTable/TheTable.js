import React from 'react';
import { connect } from 'react-redux';
import {
    deleteTask,
} from '../../actions/task';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const TheTable = (props) => {
    return (
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
                            <td><Button variant="primary" onClick={() => props.deleteTask(id)}>Delete</Button></td>
                        </tr>
                    )})}
            </tbody>
        </Table>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.task.tasks    
});

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (payload) => dispatch(deleteTask(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TheTable);
