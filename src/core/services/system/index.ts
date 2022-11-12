import { ENDPOINTS } from '@constants';

import API from '../axiosInstance';

const { get, post } = API;

export const getSystemCategory = () => {
  return get('ENDPOINTS.SYSTEM_CATEGORY', {});
};

export const getSystemSetting = () => {
  return get('ENDPOINTS.SYSTEM_SETTING', {});
};
