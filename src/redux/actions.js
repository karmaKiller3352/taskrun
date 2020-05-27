import {
  REQUEST_PROJECTS,
  ADD_PROJECT_REQUEST,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  REMOVE_PROJECT_REQUEST,
  REQUEST_PROJECT,
  SHOW_EDIT_FORM,
  HIDE_EDIT_FORM,
  CHANGE_PROJECT_REQUEST,
  REMOVE_TASK_REQUEST,
  CHANGE_TASK_REQUEST,
  REQUEST_TASKS,
  ADD_TASK_REQUEST,
  REQUEST_TASK,
  CHANGE_TASK_FILTER,
  HIDE_MODAL,
  SHOW_MODAL,
} from './types';

// REQUEST ACTIONS
// - PROJECTS:
export function removeProjectRequest(id) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PROJECT_REQUEST,
      payload: id,
    });
  };
}

export function addProjectRequest(project) {
  return (dispatch) => {
    dispatch({
      type: ADD_PROJECT_REQUEST,
      payload: project,
    });
  };
}

export function changeProjectRequest(project) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_PROJECT_REQUEST,
      payload: project,
    });
  };
}

export function fetchProjects() {
  return (dispatch) => {
    dispatch({
      type: REQUEST_PROJECTS,
    });
  };
}

export function fetchProject(id) {
  return (dispatch) => {
    dispatch({
      type: REQUEST_PROJECT,
      payload: id,
    });
  };
}

// - TASKS:
export function removeTaskRequest(id) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_TASK_REQUEST,
      payload: id,
    });
  };
}

export function addTaskRequest(task) {
  return (dispatch) => {
    dispatch({
      type: ADD_TASK_REQUEST,
      payload: task,
    });
  };
}

export function changeTasktRequest(task) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_TASK_REQUEST,
      payload: task,
    });
  };
}

export function fetchTasks() {
  return (dispatch) => {
    dispatch({
      type: REQUEST_TASKS,
    });
  };
}

export function fetchTask(id) {
  return (dispatch) => {
    dispatch({
      type: REQUEST_TASK,
      payload: id,
    });
  };
}

// TASKS FILTER

export function changeTaskFilter(value) {
  return {
    type: CHANGE_TASK_FILTER,
    payload: value,
  };
}

// APP actions
export function showEditForm() {
  return {
    type: SHOW_EDIT_FORM,
  };
}

export function hideEditForm() {
  return {
    type: HIDE_EDIT_FORM,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function showModal({ title, component }) {
  return {
    type: SHOW_MODAL,
    payload: {
      title,
      component,
    },
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}