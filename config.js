
let API_URL = process.env.NEXT_PUBLIC_API_URL;
export let USER_URL = process.env.NEXT_PUBLIC_USER_WEB
let WEBSOCKET_URL = API_URL + '';
let BUILD_VERSION = process.env.NEXT_PUBLIC_BUILD_VERSION;
let AUTH_TOKEN_KEY = 'token'
let INFO_USER_KEY = 'userInfo'
let RAPID_API_KEY = '';


const Config = {
  BUILD_VERSION,
  API_URL : API_URL,
  INFO_USER_KEY:INFO_USER_KEY,
  WEBSOCKET_URL,
  RAPID_API_KEY,
  AUTH_TOKEN_KEY: AUTH_TOKEN_KEY,
  USER_KEY: 'bds-user',
  USER_PREFERENCES_STORAGE_KEY: 'bds-user-preferences',
  USER_PREFERENCES_CONTENT_TYPE_KEY: 'contentTypes',
  USER_PREFERENCES_CATEGORY_KEY: 'category',
  USER_PREFERENCES_CATEGORY_NAME: 'category-name',
  SYSTEM_SETTING: 'systemSetting',
  USER_SETTING: 'userSetting',
  SYSTEM_SETTING_VIEW_TYPES: 'viewTypes',
  SYSTEM_SETTING_CONTENT_TYPES: 'contentTypes',
  LAYOUT_SETTING: 'layout-setting',
  // platform type 3: web
  platformType: 3,
  platformVersion: '1.0',


  //LINK HOME:
  USER_POST:`${USER_URL}pagepost`,
  USER_NOTIFICATION:`${USER_URL}account-information`,
  USER_TRANSACTION :`${USER_URL}account-information`,
  USER_ACCOUNT :`${USER_URL}account-information`,
  USER_LOGIN : `${USER_URL}autologin/`,
  AUTO_LOGOUT: `${USER_URL}redirect-logout`
};

export default Config;
