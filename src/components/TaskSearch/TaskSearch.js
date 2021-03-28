import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { connect } from 'react-redux';
import {
    searchTasks,
} from '../../actions/task';

const TaskSearch = (props) => {
    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search for a task..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    onChange={e => props.searchTasks(e.target.value)}
                />
            <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </>
    )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    searchTasks: (payload) => dispatch(searchTasks(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskSearch);
