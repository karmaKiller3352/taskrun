import { AUTHORIZE_USER, LOGOUT_USER } from './types';
import cookie from 'js-cookie';

const token = cookie.get('TR_token') ? cookie.get('TR_token') : null;
const taskRunUserName = cookie.get('TR_userName')
  ? cookie.get('TR_userName')
  : null;

const initState = {
  isAuth: token ? true : false,
  userName: taskRunUserName,
  userToken: token,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTHORIZE_USER: {
      return {
        isAuth: true,
        userName: action.payload.name,
        userToken: action.payload['user-token'],
      };
    }
    case LOGOUT_USER: {
      return { isAuth: false, userName: null, userToken: null };
    }
    default:
      return state;
  }
};

export default userReducer;
