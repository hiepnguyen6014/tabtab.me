
export interface IUserSettingRequest {
  contentType?: Array<string>;
}

export interface IUser {
  appUserId?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  birthDay?: string;
  sex?: 1;
  password?: string;
  areaCountryId?: 0;
  areaProvinceId?: 0;
  areaDistrictId?: 0;
  areaWardId?: 0;
  street?: string;
  lastActiveAt?:string;
  twoFACode?: string;
  twoFAQR?: string;
  userAvatar?: string;
  socialInfo?: null;
  identityNumber?: string;
  imageBeforeIdentityCard?: null;
  imageAfterIdentityCard?: null;
  active?: 1;
  verifiedAt?: null;
  isVerified?: -1;
  referUserId?: null;
  referUser?: null;
  memberLevelName?: null;
  limitWithdrawDaily?: 0;
  ipAddress?: null;
  googleId?: null;
  telegramId?: null;
  facebookId?: null;
  appleId?: null;
  userType?: 1;
  updatedAt?:string;
  createdAt?: string;
  isHidden?: 0;
  isDeleted?: 0;
  token?:string,
  unreadMessage?:number;
}

export interface ISystemSetting {
  contentTypes?: Array<string>;
  viewTypes?: Array<string>;
}
