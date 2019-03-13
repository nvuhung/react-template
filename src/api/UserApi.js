import { get, post } from './BaseApi';

const API_URL = process.env.REACT_APP_API_URL;
const LOGIN_URL = `${API_URL}/api/login`;
const GET_USERS_URL = `${API_URL}/api/users`;

export default class UserApi {
  static login = (email, password) => {
    return post(LOGIN_URL, { email, password });
  };

  static getUsers = () => {
    return get(GET_USERS_URL);
  };

  static getUserDetail = id => {
    return get(`${GET_USERS_URL}/${id}`);
  };
}
