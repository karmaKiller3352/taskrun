import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import tasksReducer from './tasksReducer';
import appReducer from './appReducer';
import modalReducer from './modalReducer';
import commentsReducer from './commentsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  app: appReducer,
  tasks: tasksReducer,
  modal: modalReducer,
  comments: commentsReducer,
  user: userReducer,
});
export default rootReducer;
