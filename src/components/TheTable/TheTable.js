import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import EditTaskModal from '../../components/EditTaskModal/EditTaskModal';
import DeleteTaskModal from '../../components/DeleteTaskModal/DeleteTaskModal';

const TheTable = (props) => {

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
                                <td><EditTaskModal id={task.taskId} /></td>
                                <td><DeleteTaskModal id={task.taskId} /></td>
                            </tr>
                        )})}
                </tbody>
            </Table>
        </>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.task.tasks    
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TheTable);
