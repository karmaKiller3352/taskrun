import {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  SHOW_EDIT_FORM,
  HIDE_EDIT_FORM,
} from './types';

const initState = {
  loading: false,
  alert: null,
  edit: false,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_EDIT_FORM:
      return { ...state, edit: true };
    case HIDE_EDIT_FORM:
      return { ...state, edit: false };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    default:
      return state;
  }
};

export default appReducer;
