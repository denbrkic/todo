import { 
    ADD_TASK,
} from './types';

export const addTask = (payload) => dispatch => {
    dispatch({
        type: ADD_TASK,
        payload
    });
}
