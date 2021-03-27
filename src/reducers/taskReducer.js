import { 
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK,
} from '../actions/types';

const initialState = {
    tasks: [],
    id: 1,
};

const taskReducer = (state = initialState, action) => {
    const tasks = [...state.tasks];

    switch(action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                id: ++state.id
            };
        case DELETE_TASK:
            const taskIndexDelete = tasks.findIndex(task => task.taskId === action.payload);
            tasks.splice(taskIndexDelete,1);
            return {
                ...state,
                tasks
            };
        case UPDATE_TASK:
            const taskIndex = tasks.findIndex(task => task.taskId === action.payload.taskId);
            tasks[taskIndex].taskTitle = action.payload.taskTitle;
            tasks[taskIndex].taskDescription = action.payload.taskDescription;
            return {
                ...state,
                tasks
            };
        default:
            return state;
    }
}

export default taskReducer;
