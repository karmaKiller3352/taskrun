import axios from 'axios';
import cookie from 'js-cookie';
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
  FETCH_TASKS,
  REQUEST_TASKS,
  ADD_TASK_REQUEST,
  ADD_TASK,
  REQUEST_TASK,
  SET_TASK,
  CHANGE_TASK_REQUEST,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT,
  REQUEST_COMMENTS,
  FETCH_COMMENTS,
  REMOVE_COMMENT_REQUEST,
  REMOVE_COMMENT,
  CHANGE_COMMENT_REQUEST,
  SET_COMMENT,
  AUTHORIZE_USER_REQUEST,
  AUTHORIZE_USER,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER,
} from './types';

import {
  removeProject,
  addProject,
  changeProject,
  fetchProjects,
  fetchProject,
  fetchTasks,
  addTask,
  fetchTask,
  changeTask,
  getDataByProp,
  addComment,
  removeComment,
  changeComment,
  loginUser,
  logoutUser,
} from './api';

export function* sagaWatcher() {
  yield takeEvery('*', (action) => {
    //console.log(action);
  });

  // watch user event
  yield takeEvery(AUTHORIZE_USER_REQUEST, sagaLoginUser);
  yield takeEvery(LOGOUT_USER_REQUEST, sagaLogoutUser);

  // watch comments event
  yield takeEvery(CHANGE_COMMENT_REQUEST, sagaChangeComment);
  yield takeEvery(ADD_COMMENT_REQUEST, sagaAddComment);
  yield takeEvery(REMOVE_COMMENT_REQUEST, sagaRemoveComment);
  yield takeEvery(REQUEST_COMMENTS, sagaFetchComments);

  // watch project's event
  yield takeEvery(ADD_PROJECT_REQUEST, sagaAddProject);
  yield takeEvery(CHANGE_PROJECT_REQUEST, sagaChangeProject);
  yield takeEvery(REMOVE_PROJECT_REQUEST, sagaRemoveProject);
  yield takeEvery(REQUEST_PROJECTS, sagaFetchProjects);
  yield takeEvery(REQUEST_PROJECT, sagaFetchProject);

  // watch task's event
  yield takeEvery(REQUEST_TASKS, sagaFetchTasks);
  yield takeEvery(REQUEST_TASK, sagaFetchTask);
  yield takeEvery(ADD_TASK_REQUEST, sagaAddTask);
  yield takeEvery(CHANGE_TASK_REQUEST, sagaChangeTask);
}

function* sagaLogoutUser() {
  try {
    yield put(showLoader());
    yield call(logoutUser);
    yield put({ type: LOGOUT_USER });
    cookie.remove('TR_userName');
    cookie.remove('TR_token');
    yield put(hideLoader());
  } catch (error) {
    console.log(error);
  }
}

function* sagaLoginUser(action) {
  try {
    const payload = yield call(loginUser, action.payload);
    yield put({ type: AUTHORIZE_USER, payload });
    cookie.set('TR_userName', payload.name, { expires: 1, sameSite: 'lax' });
    cookie.set('TR_token', payload['user-token'], {
      expires: 1,
      sameSite: 'lax',
    });
    axios.defaults.headers.common['user-token'] = payload['user-token'];
  } catch (error) {
    console.log(error);
  }
}

function* sagaChangeTask(action) {
  try {
    yield put(showLoader());
    yield put(hideEditForm());
    const payload = yield call(changeTask, action.payload);
    yield put({ type: SET_TASK, payload });
    yield put(hideLoader());
  } catch (error) {
    console.log(error);
    yield put(hideLoader());
  }
}

function* sagaFetchTask(action) {
  try {
    yield put(showLoader());
    const payload = yield call(fetchTask, action.payload);
    yield put({ type: SET_TASK, payload });
    yield put(hideLoader());
  } catch (error) {
    console.log(error);
    yield put(hideLoader());
  }
}

function* sagaAddTask(action) {
  try {
    const payload = yield call(addTask, action.payload);
    yield put({ type: ADD_TASK, payload });
    yield put(hideModal());
  } catch (error) {
    console.log(error);
    yield put(hideModal());
  }
}

function* sagaChangeProject(action) {
  try {
    yield put(showLoader());
    yield put(hideEditForm());
    const payload = yield call(changeProject, action.payload);
    yield put({ type: SET_PROJECT, payload });
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

    if (payload.objectId) {
      const tasks = yield call(
        getDataByProp,
        'PROJECT_ID',
        payload.objectId,
        'TASKS_API'
      );
      const TIMESPENT = tasks.reduce(
        (acc, { SPENT_TIME }) => acc + SPENT_TIME,
        0
      );
      yield put({ type: SET_PROJECT, payload: { ...payload, TIMESPENT } });
    } else {
      yield put({ type: SET_PROJECT, payload });
    }

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

function* sagaAddComment({ payload }) {
  try {
    const comment = yield call(addComment, payload);
    yield put({ type: ADD_COMMENT, payload: comment });
  } catch (error) {
    console.log(error);
  }
}

function* sagaFetchComments({ payload }) {
  try {
    const tasks = yield call(
      getDataByProp,
      'PARENT_ID',
      payload,
      'COMMENTS_API'
    );

    yield put({ type: FETCH_COMMENTS, payload: tasks });
  } catch (error) {
    console.log(error);
  }
}

function* sagaRemoveComment({ payload }) {
  try {
    yield call(removeComment, payload);
    yield put({ type: REMOVE_COMMENT, payload: payload });
  } catch (error) {
    console.log(error);
  }
}

function* sagaChangeComment(action) {
  try {
    const payload = yield call(changeComment, action.payload);
    yield put({ type: REMOVE_COMMENT, payload: payload.objectId });
    yield put({ type: SET_COMMENT, payload });
  } catch (error) {
    console.log(error);
  }
}
