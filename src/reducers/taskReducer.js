import { 
    ADD_TASK,
    DELETE_TASK,
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
        case DELETE_TASK:
            const tasks = [...state.tasks];
            tasks.splice(action.payload,1);
            return {
                ...state,
                tasks: tasks
            };
        default:
            return state;
    }
}

export default taskReducer;
