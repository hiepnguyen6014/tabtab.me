import { IconAccount, IconBell, IconLogout, IconManagerPost, IconPost, IconTable } from "@root/public/icons";

import Config from "@root/config";

export const GG_MAP_URL = "https://www.google.com/maps/search/"

let USER_URL = process.env.NEXT_PUBLIC_USER_WEB

export const ROUTES = {
  HOME: "/",
  MAIN_FLOOR: {
    name: "header.main_floor",
    href: "/san-chinh-chu",
    title: "titleList.main_floor"
  },
  SEARCH_PAGE: {
    name: "header.main_floor",
    href: "/search",
    title: "titleList.main_floor"
  },
  BROKERAGE_FLOOR_PAGE: {
    name: "header.brokerage_floor",
    href: "/san-moi-gioi",
    title: "titleList.brokerage_floor"
  },
  LEASE_PAGE: {
    name: "header.lease",
    href: "/cho-thue",
    title: "titleList.lease"
  },
  HOTNEWS_PAGE: {
    name: "header.news",
    href: "/tin-tuc",
    title: "titleList.news"
  },
  VALUATION_PAGE: {
    name: "header.valuation",
    href: "/dinh-gia",
    title: "titleList.valuation",
  },
  NOTIFICATION: {
    icon: <IconBell />,
    name: "header.notify",
    href: "/thong-bao",
    title: "titleList.notify"
  },
  MANAGER_POST: {
    icon: <IconManagerPost />,
    name: 'header.manager',
    href: USER_URL + 'view-all-user-post',
    subMenu: {
      post: {
        title: 'header.post',
        href: USER_URL + 'pagepost'
      },
      viewNews: {
        title: 'header.viewNews',
        href: USER_URL + 'view-all-user-post',
      },
      saveNews: {
        title: 'header.saveNews',
        href: USER_URL + 'news-user-saved'
      }
    }
  },
  POST: {
    icon: <IconPost />,
    href: USER_URL + 'pagepost',
  },
  MANAGER_TRANSACTION: {
    icon: <IconTable />,
    name: "header.transaction",
    href: USER_URL + 'transaction-history',
    subMenu: {
      accountBalance: {
        title: 'header.accountBalance',
        href: USER_URL + 'transaction-history'
      },
      transactionHistory: {
        title: 'header.transactionHistory',
        href: USER_URL + 'transaction-history',
      }
    }
  },
  MANAGER_ACCOUNT: {
    icon: <IconAccount />,
    name: "header.account",
    href: USER_URL + 'account-information',
    subMenu: {
      presonalInfo: {
        title: 'header.presonalInfo',
        href: USER_URL + 'account-information'
      },
      veritify: {
        title: 'header.veritify',
        href: USER_URL + 'verify-user',
      },
      changePass: {
        title: 'header.changePass',
        href: USER_URL + 'change-password'
      }
    }
  },
  USER_BALANCE: {
    name: "",
    href: USER_URL + "account-balance"
  },
  LOGOUT: {
    icon: <IconLogout />,
    name: "header.logout",
    href: "/autologin"
  },
  LOGOUT_USER: {
    href: USER_URL + 'redirect-logout'
  },
  SIGNUP: "/signup",
  LOGIN: {
    name: "header.login",
    href: USER_URL + 'autologin/'
  },
  P404: "",
  DETAIL: {
    name: "detail.title",
    href: "/chi-tiet"
  },
  HISTORY_TRANSACTION: USER_URL + 'transaction-history',
  INTRODUCE_LANDING: {
    name: "landing_page.introduce",
    title: "landing_page.introduce_title",
    href: "/gioi-thieu"
  },
  RULES_LANDING: {
    name: "landing_page.rules",
    title: "landing_page.rules_title",
    href: "/nguyen-tac-chung"
  },
  QA_LANDING: {
    name: "landing_page.qa",
    title: "landing_page.qa_title",
    href: "/cau-hoi"
  }

};

export const PUBLIC_ROUTES = {
  MAIN_FLOOR: ROUTES.MAIN_FLOOR,
  SEARCH_PAGE: ROUTES.SEARCH_PAGE,
  BROKERAGE_FLOOR: ROUTES.BROKERAGE_FLOOR_PAGE,
  VALUATION: ROUTES.VALUATION_PAGE,
  HOTNEWS: ROUTES.HOTNEWS_PAGE
}

export const INFOMATION_ROUTES = {
  INTRODUCE: ROUTES.INTRODUCE_LANDING,
  RULES: ROUTES.RULES_LANDING,
  QA: ROUTES.QA_LANDING
}
export const POST_TYPE_PARAMS = {
  POST_LATEST: {
    name: "titleList.latest",
    params: ""
  },
  POST_LOCATION: {
    name: "titleList.location",
    params: "post-location"
  },
  POST_PRICE: {
    name: "titleList.price",
    params: "post-price"
  },
  POST_SAVED: {
    name: "titleList.saved",
    params: USER_URL + "news-user-saved"
  }
}

export const PARAMS = {
  PAGE: 'page',
  DETAIL_POST: 'id'
}

export const NO_LOGIN_ROUTES = [
  ROUTES.LOGIN,
  ROUTES.SIGNUP
];

export const TRACKING_GOOGLE = {
  HOME_PAGE_ACCESS: {
    action: "Trang chủ",
  },
  AGENCY_POST: {
    action: "Sàn môi giới",
  },
  USER_POST: {
    action: "Sàn chính chủ",
  },
  NEWS_POST: {
    action: "Tin tức",
  },
  // SEARCH_FILTER:{
  //   action:"Tìm kiếm",
  //   category: "Search",
  //   label:"News",
  //   value:"News",
  // },
}