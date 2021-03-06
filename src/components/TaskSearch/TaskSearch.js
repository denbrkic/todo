import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { connect } from 'react-redux';
import {
    searchTasks,
    paginateTasks,
} from '../../actions/task';

const TaskSearch = (props) => {

    const searchTasks = (e) => {
        props.searchTasks(e.target.value);
        props.paginateTasks(1);
    }

    const jsxSearch = props.results.length > 0 ? (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Search for a task..."
                aria-label="Search"
                aria-describedby="basic-addon2"
                onChange={searchTasks}
            />
            <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
    ) : null;

    return jsxSearch;
}

const mapStateToProps = (state) => ({
    results: state.task.results,
});

const mapDispatchToProps = (dispatch) => ({
    searchTasks: (payload) => dispatch(searchTasks(payload)),
    paginateTasks: (payload) => dispatch(paginateTasks(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskSearch);
