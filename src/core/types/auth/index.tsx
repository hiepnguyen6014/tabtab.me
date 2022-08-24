import { IUser } from '@types';

export type TToken = string | undefined | null;

export interface ILoginRequest {
  email?: string;
  username?: string;
  password?: string;
  bundleId?: string;
  clientId?: string;
  clientIp?: string;
  deviceId?: string;
  idTokenString?: string;
  platform?: string;
  platformType?: number;
  platformVersion?: string;
  pnsToken?: string;
  state?: string;
  accessToken?: string;
}

export interface ILoginResponse {
  access_token: string;
  ekoUser?: IUser;
  expires_in?: number;
  refresh_token?: string;
  scope?: string;
  token_type?: string;
}

export interface IPasswordRequest {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IForgotPasswordRequest {
  email: string;
}
export interface IResetPasswordRequest {
  clientId?: string;
  password: string;
  resetCode: string;
}

export interface IRegisterRequest {
  name: string;
  website: string;
  contact: string;
  phone: string;
  desciption: string;
}

export interface IRegisterResponse {
  userId: string;
  email: string;
  roles: Array<string>;
  phone?: string;
  country?: string;
  state?: string;
  city?: string;
  postcode?: string;
  enabled?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  credentialsNonExpired?: boolean;
}

export interface IActivateCodeRequest {
  activateCode: string;
}
