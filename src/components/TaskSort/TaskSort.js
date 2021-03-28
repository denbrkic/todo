import React from 'react';
import { connect } from 'react-redux';
import {
    sortTasks,
    paginateTasks,
} from '../../actions/task';
import Button from 'react-bootstrap/Button';

const TaskSort = (props) => {

    const sortTasks = () => {
        props.sortTasks(props.column);
        props.paginateTasks(1);
    }

    return (
        <>
            <Button variant="secondary" onClick={sortTasks}>{props.children}</Button>
        </>
    )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    sortTasks: (payload) => dispatch(sortTasks(payload)),
    paginateTasks: (payload) => dispatch(paginateTasks(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskSort);
