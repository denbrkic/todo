import React from 'react';
import { connect } from 'react-redux';
import {
    demoAction
} from '../../actions/task';

const Home = (props) => {
    return (
        <>
            <h1>Home Page</h1>
            {props.tasks.map(task => <h1>{task}</h1>)}
        </>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.task.tasks,
});

const mapDispatchToProps = (dispatch) => ({
    demoAction: (payload) => dispatch(demoAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
