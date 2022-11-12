import API from '../axiosInstance';
import { ENDPOINTS } from '@constants';

const { get, post } = API;

export const getSystemCategory = () => {
  return get("ENDPOINTS.SYSTEM_CATEGORY", {});
};

export const getSystemSetting = () => {
  return get("ENDPOINTS.SYSTEM_SETTING", {});
};