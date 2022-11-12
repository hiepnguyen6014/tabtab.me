export interface IRequestCommentPost {
  targetId: string | number;
  content: string;
}

export interface IGeneral {
  generalInformationId?: number;
  aboutUs?: any;
  questionAndAnwser?: any;
  generalRule?: any;
  updatedAt?: any;
}

export interface IMediaItem {
  id?: string;
  originalFilename?: string;
  contentType?: string;
  cdnOrigin?: string;
  cdnLarge?: string;
  cdnMedium?: string;
  cdnSmall?: string;
  guid?: string;
  width?: number;
  height?: number;
}

export interface IMedia {
  order?: number;
  id?: string;
  originalFilename?: string;
  contentType?: string;
  url?: string;
  uploadDate?: number;
  external?: boolean;
  cdnOrigin?: string;
  cdnLarge?: string;
  cdnMedium?: string;
  cdnSmall?: string;
  typeOfMedia?: number;
  guid?: string;
  width?: number;
  height?: number;
  media?: any;
  thumbnail?: IMediaItem;
  coordinateX?: number;
  coordinateY?: number;
}

export interface IMedias {
  media?: IMedia;
  order?: number;
}
export interface AddPost {
  realEstateTitle: string;
  realEstatePhone: string;
  realEstateEmail?: string;
  realEstateContacAddress?: string;
  realEstateDescription: string;
  realEstateLandRealitySquare: number;
  realEstateLandDefaultSquare: number;
  realEstateLandRoadSquare?: number;
  realEstateLandRealConstructionSquare?: number;
  realEstateLandLongs?: number;
  realEstateLandWidth?: number;
  realEstateValueSalePrice: number;
  realEstateUnitPrice?: number;
  realEstateJuridicalName?: number;
  realEstateLocationFrontStreetWidth?: number;
  realEstateLocationStreetWidth?: number;
  realEstateHouseDirection?: number;
  realEstateBalconyDirection?: number;
  realEstateDirection?: number;
  realEstateLocationHomenumber?: string;
  realEstateHouseFurnitureList?: string;
  realEstateLandShapeName?: number;
  realEstateHouseFloors?: number;
  realEstateHouseBedRooms?: number;
  realEstateHouseToilets?: number;
  realEstateContactTypeId?: number;
  realEstateProjectId?: number;
  staffId?: number;
  realEstateCategoryId?: number;
  realEstatePostTypeId?: number;
  areaCountryId: number;
  areaProvinceId: number;
  areaDistrictId: number;
  areaWardId: number;
  areaStreetId?: number;
  lat?: number;
  lng?: number;
  apartmentCode?: string;
  apartmentCodeStatus?: number;
  ContactDomainUser?: number;
  agencyStatus?: number;
  agency?: number;
  agencyPercent?: number;
  realEstateHouseFurniture?: number;
  realEstateVideo?: string | undefined;
  realEstatePreVideo?: Array<any>;
  realEstateHouseKitchen?: number;
  realEstateHouseLivingRoom?: number;
  apartmentBlockCode?: string;
  apartmentCornerPosition?: 0 | 1;
  realEstatePlanRentPrice?: number;
  realEstatedeposits?: number;
  realEstateSubCategoryId?: number;
  imagesLink?: Array<string>;
  imagesPreLink?: Array<any>;
  realEstateUtil?: string;
  realEstateLandUseSquare?: number;
}
