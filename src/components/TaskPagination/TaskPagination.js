import React from 'react';
import { connect } from 'react-redux';
import {
    paginateTasks,
} from '../../actions/task';
import Pagination from 'react-bootstrap/Pagination';

const TaskPagination = (props) => {

    const calculateLastPage = () => {
        if (props.searchResults.length % props.resultsPerPage === 0) {
            return props.searchResults.length/props.resultsPerPage;
        } else {
            return Math.floor(props.searchResults.length/props.resultsPerPage)+1;
        }
    }

    const getRangeOfPages = () => {
        var range = [];
        for (let i = 1; i <= calculateLastPage(); i++) {
            range.push(i);
        }
        return range;
    }

    const jsxPagination = (props.searchResults.length > props.resultsPerPage) ? (
        <Pagination>
            <Pagination.First onClick={() => props.paginateTasks(1)} />
            {getRangeOfPages().map((page, index) => <Pagination.Item key={index} onClick={() => props.paginateTasks(page)}>{page}</Pagination.Item>)}
            <Pagination.Last onClick={() => props.paginateTasks(calculateLastPage())}/>
        </Pagination>
    ) : null;

    return jsxPagination;
}

const mapStateToProps = (state) => ({
    page: state.task.page,
    resultsPerPage: state.task.resultsPerPage,
    tasks: state.task.tasks,
    searchResults: state.task.searchResults,
});

const mapDispatchToProps = (dispatch) => ({
    paginateTasks: (payload) => dispatch(paginateTasks(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskPagination);
