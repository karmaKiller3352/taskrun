import {
  ADD_PROJECT,
  FETCH_PROJECTS,
  REMOVE_PROJECT,
  SET_PROJECT,
} from './types';

const initialState = {
  projects: [],
  openProject: {},
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT:
      return { ...state, openProject: { ...action.payload } };
    case ADD_PROJECT:
      return { ...state, projects: [action.payload, ...state.projects] };
    case REMOVE_PROJECT:
      console.log(action.payload);
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.objectId !== action.payload
        ),
      };
    case FETCH_PROJECTS:
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};
export default projectsReducer;
