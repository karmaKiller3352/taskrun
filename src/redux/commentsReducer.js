import { FETCH_COMMENTS, ADD_COMMENT, REMOVE_COMMENT } from './types';

const initialState = {
  comments: [],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, comments: [action.payload, ...state.comments] };
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.objectId !== action.payload
        ),
      };
    case FETCH_COMMENTS:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};
export default commentsReducer;
