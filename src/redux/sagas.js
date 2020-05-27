import { takeEvery, put, call } from 'redux-saga/effects';
import { showLoader, hideLoader, hideEditForm, hideModal } from './actions';
import {
  FETCH_PROJECTS,
  REQUEST_PROJECTS,
  ADD_PROJECT,
  ADD_PROJECT_REQUEST,
  REMOVE_PROJECT,
  REMOVE_PROJECT_REQUEST,
  REQUEST_PROJECT,
  SET_PROJECT,
  CHANGE_PROJECT_REQUEST,
  CHANGE_PROJECT,
  FETCH_TASKS,
  REQUEST_TASKS,
  ADD_TASK_REQUEST,
  ADD_TASK,
} from './types';

import {
  removeProject,
  addProject,
  changeProject,
  fetchProjects,
  fetchProject,
  fetchTasks,
  addTask,
} from './api';

export function* sagaWatcher() {
  yield takeEvery('*', (action) => {
    //console.log(action);
  });
  // watch project's event
  yield takeEvery(ADD_PROJECT_REQUEST, sagaAddProject);
  yield takeEvery(CHANGE_PROJECT_REQUEST, sagaChangeProject);
  yield takeEvery(REMOVE_PROJECT_REQUEST, sagaRemoveProject);
  yield takeEvery(REQUEST_PROJECTS, sagaFetchProjects);
  yield takeEvery(REQUEST_PROJECT, sagaFetchProject);

  // watch task's event
  yield takeEvery(REQUEST_TASKS, sagaFetchTasks);
  yield takeEvery(ADD_TASK_REQUEST, sagaAddTasks);
}

function* sagaAddTasks(action) {
  //console.log(action.payload);

  try {
    const payload = yield call(addTask, action.payload);
    yield put({ type: ADD_TASK, payload });
    yield put(hideModal());
  } catch (error) {
    console.log(error);
    hideModal();
  }
}

function* sagaChangeProject(action) {
  try {
    yield put(showLoader());
    yield put(hideEditForm());
    const payload = yield call(changeProject, action.payload);
    yield put({ type: CHANGE_PROJECT, payload });
    yield put(hideLoader());
  } catch (error) {
    console.log(error);
    yield put(hideLoader());
  }
}

function* sagaFetchProject(action) {
  try {
    yield put(showLoader());
    const payload = yield call(fetchProject, action.payload);
    yield put({ type: SET_PROJECT, payload });
    yield put(hideLoader());
  } catch (error) {
    console.log(error);
    yield put(hideLoader());
  }
}

function* sagaRemoveProject({ payload }) {
  try {
    yield call(removeProject, payload);
    yield put({ type: REMOVE_PROJECT, payload: payload });
  } catch (error) {
    console.log(error);
  }
}

function* sagaAddProject({ payload }) {
  try {
    const project = yield call(addProject, payload);
    yield put({ type: ADD_PROJECT, payload: project });
  } catch (error) {
    console.log(error);
  }
}

function* sagaFetchProjects() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchProjects);
    yield put({ type: FETCH_PROJECTS, payload });
    yield put(hideLoader());
  } catch (error) {
    console.log(error);
    yield put(hideLoader());
  }
}

function* sagaFetchTasks() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchTasks);
    yield put({ type: FETCH_TASKS, payload });
    yield put(hideLoader());
  } catch (error) {
    console.log(error);
    yield put(hideLoader());
  }
}
