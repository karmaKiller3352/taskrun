// API REQUESTS
import axios from 'axios';

const API = {
  PROJECTS_API:
    'https://api.backendless.com/31AC8A7E-3AEA-1033-FF0E-4F94208FE800/66AAD1E3-F373-4750-96BA-D445FA4C046E/data/projects/',
  TASKS_API:
    'https://api.backendless.com/31AC8A7E-3AEA-1033-FF0E-4F94208FE800/66AAD1E3-F373-4750-96BA-D445FA4C046E/data/tasks/',
  COMMENTS_API:
    'https://api.backendless.com/31AC8A7E-3AEA-1033-FF0E-4F94208FE800/66AAD1E3-F373-4750-96BA-D445FA4C046E/data/comments/',
};

const { PROJECTS_API, TASKS_API, COMMENTS_API } = API;
// projects request
export async function changeProject(project) {
  const { data } = await axios.put(PROJECTS_API.slice(0, -1), project);
  return data;
}

export async function fetchProject(id) {
  const { data } = await axios.get(PROJECTS_API + id);
  return data;
}

export async function removeProject(id) {
  const { data } = await axios.delete(PROJECTS_API + id);

  return data;
}

export async function fetchProjects() {
  const { data } = await axios.get(PROJECTS_API.slice(0, -1));
  return data;
}

export async function addProject(project) {
  const { data } = await axios.post(PROJECTS_API.slice(0, -1), project);
  return data;
}

// tasks requests
export async function changeTask(task) {
  const { data } = await axios.put(TASKS_API.slice(0, -1), task);
  return data;
}

export async function fetchTask(id) {
  const { data } = await axios.get(TASKS_API + id);
  return data;
}

export async function fetchTasks() {
  const { data } = await axios.get(TASKS_API.slice(0, -1) + '?pageSize=100');
  return data;
}

export async function addTask(task) {
  const { data } = await axios.post(TASKS_API.slice(0, -1), task);
  return data;
}

export async function getDataByProp(prop, value, requestApi) {
  const { data } = await axios.get(
    API[requestApi].slice(0, -1) + `?where=${prop}%3D%27${value}%27`
  );
  return data;
}

// comments requests
export async function addComment(comment) {
  const { data } = await axios.post(COMMENTS_API.slice(0, -1), comment);
  return data;
}
