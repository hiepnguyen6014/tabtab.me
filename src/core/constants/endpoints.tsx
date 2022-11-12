const CONTEXTS = {
  APP_USER: 'AppUsers',
  FILTER: 'DataFilter',
  REALESTATE: 'RealEstate',
  REALESTATE_REPORT: 'RealEstateReport',
  SAVE_POST: 'RealEstateUserSaved',
  CUSTOMER_MESSAGE: 'CustomerMessage',
  NEWS: 'News',
  SUB_CATEGORY: 'RealEstateSubCategory',
  STATISTICAL: 'Statistical',
  SYSTEM: 'SystemConfiguration',
  GENERAL: 'GeneralInformation',
};

const CONTROLLERS = {
  APP: 'app',
  USER: 'user',
};

export const ENDPOINTS = {
  // Authentication
  LOGIN: `${CONTEXTS.APP_USER}/login`,
  USER_DETAIL: `${CONTEXTS.APP_USER}/getDetailUserById`,

  // Realestate api
  LIST_REALESTATE: `${CONTEXTS.REALESTATE}/getList`,
  DETAIL: `${CONTEXTS.REALESTATE}/getDetail`,
  LIST_LOCATION: `${CONTEXTS.REALESTATE}/getClosestRealEstate`,
  // LIST_LOCATION: `${CONTEXTS.REALESTATE}/getListByLocation`,
  // LIST_POSTS_PRICE:`${CONTEXTS.REALESTATE}/getListByPrice`,
  LIST_POSTS_PRICE: `${CONTEXTS.REALESTATE}/getCheapestRealEstate`,
  REPORT_REALESTATE: `${CONTEXTS.REALESTATE_REPORT}/reportPostProblem`,
  // LIST_POST_RATING:`${CONTEXTS.REALESTATE}/getListByRating`,
  LIST_POST_RATING: `${CONTEXTS.REALESTATE}/getLatestRealEstate`,
  PAYMENT_RECORDS: `${CONTEXTS.REALESTATE}/callToRealEstateContact`,

  // News api
  LIST_NEWS: `${CONTEXTS.NEWS}/userGetListNews`,
  NEWS_DETAIL: `${CONTEXTS.NEWS}/userGetNewsDetail`,

  // Customer message api
  LIST_CUSTOMER_MESSAGE: `${CONTEXTS.CUSTOMER_MESSAGE}/getList`,
  DELETE_CUSTOMER_MESSAGE: `${CONTEXTS.CUSTOMER_MESSAGE}/userDeleteMessage`,
  DETAIL_CUSTOMER_MESSAGE: `${CONTEXTS.CUSTOMER_MESSAGE}/getDetailById`,
  MARK_READ_MESSAGE: `${CONTEXTS.CUSTOMER_MESSAGE}/markReadMessage`,

  // Filter api
  DATAFILTER: `${CONTEXTS.FILTER}/getDataFilterRealEstate`,
  AREAFILTER: `${CONTEXTS.FILTER}/getAreaData`,
  SUB_CATEGORY_FILTER: `${CONTEXTS.SUB_CATEGORY}/find`,

  // User api
  USER_SAVE_POST: `${CONTEXTS.SAVE_POST}/savePost`,
  USER_DELETE_SAVE_POST: `${CONTEXTS.SAVE_POST}/deleteSavePost`,
  POSTS_SAVED: `${CONTEXTS.SAVE_POST}/${CONTROLLERS.USER}/getList`,
  GET_LINK_APP: `${CONTEXTS.SYSTEM}/${CONTROLLERS.USER}/getSystemConfig`,

  // Statistical
  PRICE_BY_AREA: `${CONTEXTS.STATISTICAL}/statisticalPriceByArea`,
  PRICE_BY_POST_TYPE: `${CONTEXTS.STATISTICAL}/statisticalPriceByPostTypeOrderByArea`,

  // Landing page
  LANDING_PAGE: `${CONTEXTS.GENERAL}/find`,
};
