import { filterKey } from '../core/contexts/filterContext';

export class MFilter {
  filter?: {};
  filterClause?: {};
  searchText?: string;
  order?: {
    key?: string;
    value?: string;
  };
  constructor(param: any) {
    this.filter = {
      realEstateHouseDirection:
        param[filterKey.realEstateHouseDirection.idQuery] || '',
      realEstateCategoryId: param[filterKey.realEstateCategoryId.idQuery] || 0,
      realEstatePostTypeId: param[filterKey.realEstatePostType.idQuery] || 0,
      areaStreetId: param.AreaStreetId || 0,
      areaProvinceId: param[filterKey.areaProvinceId.idQuery] || 0,
      areaDistrictId: param[filterKey.areaDistrictId.idQuery] || 0,
      areaWardId: param[filterKey.areaWardId.idQuery] || 0,
    };
    this.filterClause = {
      startLandRealitySquare:
        param[filterKey.realEstateLandRealitySquare.idQuery]?.split('-')[0] ||
        0,
      endLandRealitySquare:
        param[filterKey.realEstateLandRealitySquare.idQuery]?.split('-')[1] ||
        0,
      startValueSalePrice:
        param[filterKey.realEstateValueSalePrice.idQuery]?.split('-')[0] *
          1000000 || 0,
      endValueSalePrice:
        param[filterKey.realEstateValueSalePrice.idQuery]?.split('-')[1] *
          1000000 || 0,
    };
    this.searchText = param[filterKey.searchText.idQuery] || '';
    this.order = {
      key: param['sx_loai'],
      value: param['sx'],
    };
  }
}
