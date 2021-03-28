import React from 'react';
import { connect } from 'react-redux';
import {
    sortTasks,
} from '../../actions/task';
import Button from 'react-bootstrap/Button';

const TaskSort = (props) => {
    return (
        <>
            <Button variant="secondary" onClick={() => props.sortTasks(props.column)}>{props.children}</Button>
        </>
    )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    sortTasks: (payload) => dispatch(sortTasks(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskSort);
