import { 
    ADD_TASK,
    DELETE_TASK,
    SEARCH_TASKS,
    UPDATE_TASK,
    SORT_TASKS,
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

export const searchTasks = (payload) => dispatch => {
    dispatch({
        type: SEARCH_TASKS,
        payload
    });
}

export const sortTasks = (payload) => dispatch => {
    dispatch({
        type: SORT_TASKS,
        payload
    });
}
