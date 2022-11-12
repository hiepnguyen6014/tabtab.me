import { arrayToString } from '@root/src/core/utils/handleArray';

import { AGENCY_NAME } from '../core/constants/common';
import { ImageNull } from '../core/constants/enum';
import { GG_MAP_URL } from '../core/constants/routes';
import { convertDateToString, numberDays } from '../core/utils/HandleDate';
import { MPaymentRecord } from './MPaymentRecord';

export class MUtilData {
  realEstateUtilitiesId?: number;
  realEstateUtilitiesName?: string;
  realEstatePostTypeId?: number;
  exist?: boolean;
  updatedAt?: string;
  createdAt?: string;
  isHidden?: number;
  isDeleted?: number;
}

export class MCommonPlace {
  commonPlaceId: string;
  commonPlaceName?: string;
  distance?: string;
  constructor(param: any) {
    this.commonPlaceId = param.commonPlaceId;
    this.commonPlaceName = param.commonPlaceName || '--';
    this.distance = `${(param.lat / 1000).toFixed(2) || '0'}` + ' km';
  }
}
export class MPostDetail {
  realEstateId?: number;
  realEstateTitle?: string;
  realEstatePhone?: string;
  isSaved?: boolean;
  isHidden?: number;
  contactName?: string;
  realEstatedeposits?: string | number;
  realEstateEmail?: string;
  realEstateDescription?: string;
  realEstateLandRealitySquare?: number;
  realEstateLandDefaultSquare?: number;
  realEstateLandLongs?: number;
  realEstateLandWidth?: number;
  realEstateValueSalePrice?: number | string;
  realEstateUnitPrice?: number | string;
  realEstateJuridicalName?: any;
  realEstateCategoryId?: number;
  realEstateHouseDirection?: number;
  realEstateJuridicalCode?: number;
  realEstateHouseFurnitureList?: Array<string>;
  realEstateHouseFloors?: number;
  realEstateHouseBedRooms?: number;
  realEstateHouseToilets?: number;
  realEstateContactTypeId?: number;
  realEstatePostTypeId?: number;
  realEstateJuridical?: string;
  arrayImage?: Array<string>;
  lat?: number;
  lng?: number;
  realEstateLocationHomeNumber?: string;
  createdAt?: any;
  updatedAt?: string;
  realEstateViews?: number;
  realEstateClick?: number;
  username?: null;
  firstName?: string;
  lastName?: string;
  agency?: number;
  agencyName?: string;
  realEstateVideo?: string;
  realEstateImage?: string;
  AreaDirectionName?: string;
  AreaCountryName?: string;
  AreaCountryId?: number | string;
  AreaProvinceName?: string;
  AreaProvinceId?: number | string;
  AreaDistrictName?: string;
  AreaDistrictId?: number | string;
  AreaStreetName?: string;
  AreaStreetId?: number | string;
  AreaWardId?: number | string;
  AreaWardName?: string;
  realEstateLocation?: string;
  linkLocation?: string;
  derectionHouseName?: string;
  realEstateFurnitureName?: string;
  agencyPercent?: string | number;
  shapeName?: string;
  userAvatar?: string;
  realEstateTotalDate?: any;

  // Conver data
  realEstateCommonPlace?: [];
  realEstateUtil?: string;
  realEstateUtilData?: MUtilData[];
  paymentRecords?: MPaymentRecord[];

  constructor(param: any, realEstateUtilData?: MUtilData[]) {
    const arrayLocation = [
      param.realEstateLocationHomeNumber,
      param.areastreetName,
      // param.areaWardName,
      Number.isInteger(parseFloat(param.areaWardName)) === true
        ? 'P.' + param.areaWardName
        : param.areaWardName,
      param.areaDistrictName,
      param.areaProvinceName,
      param.AreaCountryName,
    ];
    this.isHidden = param.isHidden || 0;
    this.isSaved = param.isSaved || false;
    this.agency = param.agency || 0;
    this.userAvatar = param.userAvatar || '';
    this.agencyName = AGENCY_NAME[param.agency] || '--';
    this.realEstateTotalDate = numberDays(param.createdAt, param.updatedAt);
    this.realEstateFurnitureName = param.realEstateFurnitureName || null;
    this.derectionHouseName = param.derectionHouseName || '--';
    this.realEstateLocation = arrayToString(arrayLocation);
    this.linkLocation = arrayToString(arrayLocation, '+', GG_MAP_URL, true);
    this.realEstateId = param.realEstateId || 1;
    this.realEstateLocationHomeNumber =
      param.realEstateLocationHomeNumber || '';
    this.realEstateTitle = param.realEstateTitle || '';
    this.realEstatePhone = param.realEstatePhone || '';
    this.contactName = param.contactName || '';
    this.realEstatedeposits = param.realEstatedeposits || 0;
    this.realEstateEmail = param.realEstateEmail || '';
    this.realEstateDescription = param.realEstateDescription || '';
    this.realEstateLandRealitySquare =
      param.realEstateLandRealitySquare?.toLocaleString('en-US') || 0;
    this.realEstateLandLongs =
      param.realEstateLandLongs?.toLocaleString('en-US') || 0;
    this.realEstateLandWidth =
      param.realEstateLandWidth?.toLocaleString('en-US') || 0;
    this.realEstateValueSalePrice = param.realEstateValueSalePrice || 0;
    this.realEstateUnitPrice = param.realEstateUnitPrice || 0;
    this.realEstateJuridicalName = param.realEstateJuridicalName || null;
    this.realEstateCategoryId = param.realEstateCategoryId || 1;
    this.realEstateHouseDirection = param.realEstateHouseDirection || 1;
    this.realEstateHouseFloors = param.realEstateHouseFloors || null;
    this.realEstateHouseBedRooms = param.realEstateHouseBedRooms || 0;
    this.realEstateHouseToilets = param.realEstateHouseToilets || null;
    this.realEstateContactTypeId = param.realEstateContactTypeId || 1;
    this.realEstatePostTypeId = param.realEstatePostTypeId || 1;
    this.realEstateJuridical = param.realEstateJuridical || null;
    this.arrayImage = param.arrayImage || [];
    this.createdAt = convertDateToString(param.createdAt);
    this.agencyPercent = param.agencyPercent
      ? Number(param.agencyPercent.toFixed(2))
      : 0;
    this.realEstateViews = param.realEstateViews || 0;
    this.realEstateClick = param.realEstateClick || 0;
    this.realEstateVideo = param.realEstateVideo || '';
    this.realEstateImage =
      param.realEstateImage == 'string' || !param.realEstateImage
        ? ImageNull
        : param.realEstateImage;
    this.AreaDirectionName = param.AreaDirectionName || '';
    this.shapeName = param.shapeName || null;

    this.AreaProvinceId = param.areaProvinceId || '';
    this.AreaDistrictId = param.areaDistrictId || '';
    this.AreaWardId = param.areaWardId || '';

    this.AreaCountryName = param.areaCountryName || '--';
    this.AreaProvinceName = param.areaProvinceName || '--';
    this.AreaDistrictName = param.areaDistrictName || '--';
    this.AreaStreetName = param.areaStreetname || '--';
    this.AreaWardName = param.areaWardName || '--';

    // Widget user info
    this.firstName = param.firstName || '';
    this.lastName = param.lastName || '';
    this.username = param.username || '';

    // Conver data
    this.realEstateUtilData = getListUtil(
      param.realEstateUtil,
      realEstateUtilData,
    );
    this.realEstateCommonPlace =
      param.realEstateCommonPlace && Array.isArray(param.realEstateCommonPlace)
        ? param.realEstateCommonPlace.map(common => ({
            ...new MCommonPlace(common),
          }))
        : [];
    this.paymentRecords =
      param.paymentRecords?.map(item => ({ ...new MPaymentRecord(item) })) ||
      [];
  }
}

function getListUtil(realEstateUtil: string, realEstateUtilData: MUtilData[]) {
  const arrayUtil = realEstateUtil
    ? realEstateUtil.split(/\;|\,/gi).map(util => parseInt(util))
    : [];
  if (!realEstateUtilData) return [];
  realEstateUtilData.forEach(util => {
    util.exist = arrayUtil.indexOf(util.realEstateUtilitiesId) > -1;
  });
  return realEstateUtilData;
}
