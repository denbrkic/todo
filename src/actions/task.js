import { 
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK,
} from './types';

export const addTask = (payload) => dispatch => {
    dispatch({
        type: ADD_TASK,
        payload
    });
}

export const deleteTask = (payload) => dispatch => {
    dispatch({
        type: DELETE_TASK,
        payload
    });
}

export const updateTask = (payload) => dispatch => {
    dispatch({
        type: UPDATE_TASK,
        payload
    });
}
