import { UserTypes } from '../types/userTypes';
import { setUser, getUser, removeUser, setToken, removeToken } from '../../utils/Storage';

const initialState = {
  userLogin: getUser() || null,
  users: null,
  userDetail: null,
};

export const UserReducers = (state = initialState, action) => {
  switch (action.type) {
    case UserTypes.LoggedIn: {
      const { token, email } = action.data;
      setUser({ email });
      setToken(token.token);
      return {
        ...state,
        userLogin: { email },
      };
    }

    case UserTypes.LogOut: {
      removeUser();
      removeToken();
      return {
        ...state,
        userLogin: null,
      };
    }

    case UserTypes.GetUsers:
      return {
        ...state,
        users: action.users,
      };

    case UserTypes.GetUserDetail:
      return {
        ...state,
        userDetail: action.userDetail,
      };

    default:
      return state;
  }
};
