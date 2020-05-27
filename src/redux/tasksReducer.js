import {
  CHANGE_TASK,
  SET_TASK,
  ADD_TASK,
  REMOVE_TASK,
  FETCH_TASKS,
  CHANGE_TASK_FILTER,
} from './types';

const dataFromStorage =
  localStorage.getItem('tasksFilter') === null
    ? 'OPEN'
    : localStorage.getItem('tasksFilter');

const initialState = {
  tasks: [],
  openTask: {},
  currentFilter: dataFromStorage,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TASK_FILTER:
      return { ...state, currentFilter: action.payload };
    case CHANGE_TASK:
      return { ...state, openTask: { ...action.payload } };
    case SET_TASK:
      return { ...state, openTask: { ...action.payload } };
    case ADD_TASK:
      return { ...state, tasks: [action.payload, ...state.tasks] };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.objectId !== action.payload),
      };
    case FETCH_TASKS:
      return { ...state, tasks: action.payload };

    default:
      return state;
  }
};
export default tasksReducer;
