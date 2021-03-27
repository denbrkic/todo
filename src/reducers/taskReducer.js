import { 
    ADD_TASK,
} from '../actions/types';

const initialState = {
    tasks: [],
    id: 1,
};

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                id: ++state.id
            };
        default:
            return state;
    }
}

export default taskReducer;
