import { 
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    SEARCH_TASKS,
    SORT_TASKS,
    PAGINATE_TASKS,
} from '../actions/types';

const initialState = {
    tasks: [],
    results: [],
    searchResults: [],
    id: 1,
    page: 1,
    resultsPerPage: 2,
};

const taskReducer = (state = initialState, action) => {
    let tasks = [...state.tasks];
    let results = [];

    switch(action.type) {
        case ADD_TASK:
            const tasksUpdate = [...state.tasks, action.payload];
            return {
                ...state,
                tasks: tasksUpdate,
                results: tasksUpdate,
                id: ++state.id,
                searchResults: tasksUpdate,
            };
        case DELETE_TASK:
            const taskIndexDelete = tasks.findIndex(task => task.taskId === action.payload);
            tasks.splice(taskIndexDelete,1);
            return {
                ...state,
                tasks,
                results: tasks,
                searchResults: tasks,
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
                results = tasks.filter(task => task.taskId === parseInt(action.payload, 10) || task.taskTitle.includes(action.payload) || task.taskDescription.includes(action.payload));
            } else {
                results = tasks;
            }

            return {
                ...state,
                results,
                searchResults: results
            }
        case SORT_TASKS:
            results = tasks;
            results.sort((a, b) => (a[action.payload] > b[action.payload]) ? 1 : -1);
            tasks = results;
            return {
                ...state,
                results,
                tasks
            }
        case PAGINATE_TASKS:
            if (!action.payload) {
                action.payload = 1;
            }

            results = state.searchResults.filter((task, index) => index >= (action.payload-1) * state.resultsPerPage && index < action.payload * state.resultsPerPage);

            return {
                ...state,
                results,
                page: action.payload
            }
        default:
            return state;
    }
}

export default taskReducer;
