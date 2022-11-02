

export interface IAreaData {
  areaDataId: number;
  areaDataName: string;
  areaDataType: string;
  areaParentId: number;
}

type Detail = {
  total:number;
  defineName: string;
}

export interface SearchDataProps {
  AreaCountryName: string;
  AreaDirectionName: string;
  AreaDistrictId: string;
  AreaDistrictName: string;
  AreaProvinceId: string;
  AreaProvinceName: string;
  AreaStreetName: string;
  AreaWardId: string;
  AreaWardName: string;
  agency: number;
  agencyName: string;
  agencyPercent: string;
  arrayImage: Array<any>;
  contactName: string;
  createdAt: string;
  derectionHouseName: string;
  firstName: string;
  isHidden: number;
  isSaved: boolean;
  lastName: string;
  linkLocation: string;
  paymentRecords: Array<any>;
  realEstateCategoryId: number;
  realEstateClick: number;
  realEstateCommonPlace: Array<any>;
  realEstateContactTypeId: number;
  realEstateDescription: string;
  realEstateEmail: string;
  realEstateFurnitureName: null;
  realEstateHouseBedRooms: number;
  realEstateHouseDirection: number;
  realEstateHouseFloors: null;
  realEstateHouseToilets: number;
  realEstateId: number;
  realEstateImage: string;
  realEstateJuridical: null;
  realEstateJuridicalName: null;
  realEstateLandLongs: number;
  realEstateLandRealitySquare: string;
  realEstateLandWidth: number;
  realEstateLocation: string;
  realEstateLocationHomeNumber: string;
  realEstatePhone: string;
  realEstatePostTypeId: number;
  realEstateTitle: string;
  realEstateTotalDate: Detail;
  realEstateUnitPrice: number;
  realEstateUtilData: Array<any>;
  realEstateValueSalePrice: number;
  realEstateVideo: string;
  realEstateViews: number;
  realEstatedeposits: number;
  shapeName: null;
  userAvatar: string;
  username: string;
}
