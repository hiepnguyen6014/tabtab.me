import API from '../axiosInstance';
import {
  ILoginRequest,
  IForgotPasswordRequest,
  IResetPasswordRequest,
  IPasswordRequest,
} from '@types';
import { ENDPOINTS } from '@constants';

const { get, post, put } = API;

export const doLogin = async (postData: ILoginRequest) => {
  return post(ENDPOINTS.LOGIN, postData);
};

// export const doLogout = async () => {
//   return post(ENDPOINTS.LOGOUT);
// };

export const getProfile = async () => {
  return get('/profile', {});
};

export const doSubmitRegister = async ({}: ILoginRequest) => {};

// export const sendForgotPassword = async (postData: IForgotPasswordRequest) => {
//   return post(ENDPOINTS.FORGOT_PASSWORD, postData);
// };

// export const sendResetPassword = async (postData: IResetPasswordRequest) => {
//   return post(ENDPOINTS.RESET_PASSWORD, postData);
// };

// export const validateRegister = async (postData: IRegisterValidateRequest) => {
//   return post(ENDPOINTS.VALIDATE_REGISTER, postData);
// };

// export const sendActivateCode = async (code: string) => {
//   return put(`${ENDPOINTS.ACTIVATE_CODE}/${code}`);
// };

// export const changePassword = async (postData: IPasswordRequest) => {
//   return post(ENDPOINTS.CHANGE_PASSWORD, postData);
// };
