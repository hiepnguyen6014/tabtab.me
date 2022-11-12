import Axios from 'axios';
import { Cookies } from 'react-cookie';
import Config, { USER_URL } from '@root/config';
import { message } from 'antd';
import { TToken } from '@types';
import { ENDPOINTS, AUTH_TOKEN_KEY } from '@constants';
import { reactLocalStorage, ROUTES } from '@core';
import { Message } from '@utils';

const PUBLIC_URLS = [ENDPOINTS.LOGIN];

const axios = Axios.create({
  baseURL: Config.API_URL,
  timeout: 120000,
});

axios.interceptors.request.use(
  function (config: any) {
    //don't add auth header if url match ignore list
    if (
      PUBLIC_URLS.indexOf(config.url) >= 0 ||
      config.url.indexOf('public') >= 0
      ) {
        return config;
      }
      //if token is passed in server side
      if (config && config.token) {
        //modify header here to include token
        Object.assign(config.headers, {
          Authorization: `Bearer ${config.token}`,
        });
      } else {
        Object.assign(config.headers, { Authorization:""});
      }
      
    return config;
  },
  function (error) {
    // Do something with request error
    return;
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status = error.response?.status ?? '';
    if (status == 401 || status == 403 || status == 505) {
      reactLocalStorage.removeItem(Config.INFO_USER_KEY)
      message.loading('Token verifed')
      setTimeout(()=>{
        if(window){
          window.location.reload()
        }
      },500)
    }
    return error.response?.data;
  }
);

const API = {
  get: (endpoint: string, params = {}, token?: TToken) =>
    axios.get(endpoint, { params, token }),
  post: (
    endpoint: string,
    data: any = {},
    token?: TToken,
    cancelToken?: any,
    config?: any
  ) => axios.post(endpoint, data, { token, ...config }, { cancelToken }),
  put: (endpoint: string, data: any = {}, token?: TToken) =>
    axios.put(endpoint, data, { token }),
  del: (endpoint: string, params = {}, token?: TToken) =>
    axios.delete(endpoint, { params, token }),
};

export default API;
