import { 
    DEMO_EVENT,
} from '../actions/types';

const initialState = {
    tasks: ['one', 'two', 'three']
};

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case DEMO_EVENT:
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default taskReducer;
