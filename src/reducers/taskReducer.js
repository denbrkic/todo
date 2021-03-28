import { 
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    SEARCH_TASKS,
    SORT_TASKS,
} from '../actions/types';

const initialState = {
    tasks: [],
    results: [],
    id: 1,
};

const taskReducer = (state = initialState, action) => {
    const tasks = [...state.tasks];
    let results = [];

    switch(action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                results: [...state.tasks, action.payload],
                id: ++state.id
            };
        case DELETE_TASK:
            const taskIndexDelete = tasks.findIndex(task => task.taskId === action.payload);
            tasks.splice(taskIndexDelete,1);
            return {
                ...state,
                tasks,
                results: tasks
            };
        case UPDATE_TASK:
            const taskIndex = tasks.findIndex(task => task.taskId === action.payload.taskId);
            tasks[taskIndex].taskTitle = action.payload.taskTitle;
            tasks[taskIndex].taskDescription = action.payload.taskDescription;
            return {
                ...state,
                tasks,
                results: tasks
            };
        case SEARCH_TASKS:
            if (action.payload) {
                results = tasks.filter(task => task.taskId === parseInt(action.payload, 10) || task.taskTitle.includes(action.payload) || task.taskDescription.includes(action.payload))
            } else {
                results = tasks;
            }

            return {
                ...state,
                results
            }
            case SORT_TASKS:
                results = tasks;
                results.sort((a, b) => (a[action.payload] > b[action.payload]) ? 1 : -1)  
                return {
                    ...state,
                    results,
                }
        default:
            return state;
    }
}

export default taskReducer;
