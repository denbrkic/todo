import { 
    DEMO_EVENT,
} from './types';

export const demoAction = (payload) => dispatch => {
    dispatch({
        type: DEMO_EVENT,
        payload
    });
}
