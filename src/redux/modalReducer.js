import { SHOW_MODAL, HIDE_MODAL } from './types';

const initState = {
  title: null,
  component: () => null,
  show: false,
};

const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        show: true,
        component: action.payload.component,
        title: action.payload.title,
      };
    case HIDE_MODAL:
      return {
        show: false,
        component: () => null,
        title: null,
      };
    default:
      return state;
  }
};

export default modalReducer;
