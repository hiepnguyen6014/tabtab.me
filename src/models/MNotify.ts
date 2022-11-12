import { PUBLIC_ROUTES, ROUTES } from '@constants';

import {
  ROUTES_NOTIFY,
  USER_NOTIFY,
} from './../components/pages/MyNotification/detail/notifyService';
import { convertDateToStringWithTime } from './../core/utils/HandleDate';

// Index must start 1
export const MESSAGE_TYPE = ['', 'USER', 'GENERAL', 'REALESTATE'];

class MCustomerData {
  realEstateId?: number;
  agency?: number;
  validated?: boolean;
  systemRecordType?: number;
  realEstatePostTypeId?: number;
  paymentDepositTransactionId?: number;
}
export class MNotify {
  // Message id
  messageId?: number;
  customerId?: number;
  messageCustomerId?: number;

  // Status message
  isRead?: number;
  createdAt?: string;
  updatedAt?: string;
  messageType?: number;
  messageTimeReceive?: string;

  // Content message
  messageNote?: string;
  customerMessageTitle?: string;
  customerMessageContent?: string;
  customerMessageCategories?: string;
  customerMessageImage?: string;

  // Relate post
  detailHref?: {
    href: string;
    idPost?: number;
  };

  constructor(param: any) {
    // Message id
    this.messageId = param.messageId;
    this.customerId = param.customerId;
    this.messageCustomerId = param.messageCustomerId;

    // Status message
    this.isRead = param.isRead || 0;
    this.updatedAt = param.updateAt || '';
    this.createdAt = param.createdAt || '';
    this.messageTimeReceive =
      convertDateToStringWithTime(param.createdAt) || '';
    this.messageType = MESSAGE_TYPE.indexOf(param.messageType); // Check icon depen on index of message type

    // Message content
    this.messageNote = param.messageNote || '';
    this.customerMessageTitle = param.customerMessageTitle || '--';
    this.customerMessageContent = param.customerMessageContent || '--';
    this.customerMessageCategories = param.customerMessageCategories || '--';
    this.customerMessageImage =
      param.customerMessageImage ||
      'https://roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg';
    // Realte post
    this.detailHref = hrefNotify(
      this.messageType,
      param.messageCustomerData,
      param.messageCustomerId,
    );
  }
}

function getPostTypeHrefDetail(agency: number) {
  return {
    1: ROUTES.MAIN_FLOOR.href + ROUTES.DETAIL.href,
    0: ROUTES.BROKERAGE_FLOOR_PAGE.href + ROUTES.DETAIL.href,
  }[agency];
}

function hrefNotify(
  messageType: number,
  messageCustomerData?: string,
  messageCustomerId?: number,
) {
  // Notify real estate
  if (messageType == 3) {
    const parseMessageCustomerData: MCustomerData =
      JSON.parse(messageCustomerData);
    return {
      href: getPostTypeHrefDetail(parseMessageCustomerData.agency),
      idPost: parseMessageCustomerData.realEstateId,
    };
    // Notify general
  } else if (messageType == 2) {
    return {
      href: ROUTES_NOTIFY[messageType].href,
      idPost: messageCustomerId,
    };
  }
  // Notify user
  else if (messageType == 1) {
    const parseMessageCustomerData: MCustomerData =
      JSON.parse(messageCustomerData);
    let href = '';
    let idPost = '';
    if (parseMessageCustomerData?.hasOwnProperty('validated')) {
      // Redirect detail user
      href = USER_NOTIFY.userInfo;
    } else if (parseMessageCustomerData?.paymentDepositTransactionId) {
      // REDIRECT history transaction
      href = USER_NOTIFY.transaction;
    } else if (parseMessageCustomerData?.realEstateId) {
      // Redirect manager post
      href = USER_NOTIFY.statusPost;
    }
    return {
      href: href,
      idPost: undefined,
    };
  }
}
