import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import EditTaskModal from '../../components/EditTaskModal/EditTaskModal';
import DeleteTaskModal from '../../components/DeleteTaskModal/DeleteTaskModal';
import TaskSort from '../../components/TaskSort/TaskSort';
import TaskPagination from '../TaskPagination/TaskPagination';

const TheTable = (props) => {

    const jsxTable = props.results.length > 0 ? (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th><TaskSort column={'taskId'}>ID</TaskSort></th>
                        <th><TaskSort column={'taskTitle'}>Title</TaskSort></th>
                        <th><TaskSort column={'taskDateTime'}>Creation Date</TaskSort></th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.results.map((task, index) => {
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
            <TaskPagination />
        </div>
    ) : null;

    return jsxTable;
}

const mapStateToProps = (state) => ({
    results: state.task.results   
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TheTable);
