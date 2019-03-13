import { UserTypes } from '../types/userTypes';
import UserApi from '../../api/UserApi';

export const login = (email, password, callBack) => async dispatch => {
  const token = await UserApi.login(email, password);
  dispatch({
    type: UserTypes.LoggedIn,
    data: {
      token,
      email,
    },
  });
  if (callBack) {
    callBack();
  }
};

export const logout = () => ({
  type: UserTypes.LogOut,
});

export const getUsers = () => async dispatch => {
  const users = await UserApi.getUsers();
  dispatch({
    type: UserTypes.GetUsers,
    users,
  });
};

export const getUserDetail = id => async dispatch => {
  const { data } = await UserApi.getUserDetail(id);
  dispatch({
    type: UserTypes.GetUserDetail,
    userDetail: data,
  });
};
