import axios from 'axios';
import qs from 'qs';

const methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

const handleSuccess = response => {
  return response.data;
};

const handleError = error => {
  throw new Error(error);
};

const request = (method, url, params, data, options = {}) => {
  return axios
    .request({
      url,
      method,
      params,
      data,
      headers: {
        Authorization: localStorage.getItem('token') || '',
      },
      ...options,
    })
    .then(handleSuccess)
    .catch(handleError);
};

export const get = async (url, params) =>
  request(methods.GET, url, params, null, {
    paramsSerializer: () => qs.stringify(params, { indices: false }),
  });

export const post = async (url, body) => request(methods.POST, url, null, body);

export const put = async (url, body) => request(methods.PUT, url, null, body);

export const patch = async (url, body) =>
  request(methods.PATCH, url, null, body);

export const del = async url => request(methods.DELETE, url, null, null);
