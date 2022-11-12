import { FilterContext, filterKey } from '@contexts';
import { useContext } from 'react';

import RealEstateFilterDesktop from './RealEstateFilterDesktop';
import { RealEstateFilterMobile } from './RealEstateFilterMobile';
import { RealEstateFilterPopup } from './RealEstateFilterPopup';

export interface FilterProps {
  label?: string;
  slider?: any;
  placeholder?: string;
  idQuery?: string;
  list?: any[];
  keyId?: string;
  keyName?: string;
  subMenu?: any;
  toggle?: boolean;
  initIndex?: (keyId: string, idQuery: string, options: any[]) => number;
  onChangeValue?: Function;
}

export const PRICE_LIST = (t: any) => {
  return [
    { label: `< 1 ${t('unit.billion')}`, value: [0, 1000] },
    { label: `1 - 3 ${t('unit.billion')}`, value: [1000, 3000] },
    { label: `3 - 10 ${t('unit.billion')}`, value: [3000, 10000] },
    { label: `10 - 30 ${t('unit.billion')}`, value: [10000, 30000] },
    { label: `30 - 100 ${t('unit.billion')}`, value: [30000, 100000] },
    { label: `> 100 ${t('unit.billion')}`, value: [100000] },
  ];
};

export const ACREAGE_LIST = [
  { label: '0 - 20 m²', value: [0, 20] },
  { label: '20 - 50 m²', value: [20, 50] },
  { label: '50 - 100 m²', value: [50, 100] },
  { label: '100 - 500 m²', value: [100, 500] },
  { label: '>  500 m²', value: [500] },
  { label: '>  1000 m²', value: [1000] },
  { label: '>  5000 m²', value: [5000] },
  { label: '>  10000 m²', value: [10000] },
];

export const POST_TYPE = (t: any) => [
  { label: t('filter.sell'), value: 1 },
  { label: t('filter.lease'), value: 2 },
];

const RealEstateFilter = (props: { t: any; toggleType?: boolean }) => {
  const { t: translate, toggleType } = props;

  const { categoryList, directionList, districts, wards, provinces } =
    useContext(FilterContext);

  const POPUP_AREA = [
    {
      label: translate('filter.province'),
      placeholder: translate('filter.selectProvince'),
      idQuery: filterKey.areaProvinceId.idQuery,
      list: provinces,
      keyId: filterKey.areaProvinceId.id,
      keyName: filterKey.areaProvinceId.name,
    },
    {
      label: translate('filter.district'),
      placeholder: translate('filter.selectDistrict'),
      idQuery: filterKey.areaDistrictId.idQuery,
      list: districts,
      keyId: filterKey.areaDistrictId.id,
      keyName: filterKey.areaDistrictId.name,
    },
    {
      label: translate('filter.ward'),
      placeholder: translate('filter.selectWard'),
      idQuery: filterKey.areaWardId.idQuery,
      list: wards,
      keyId: filterKey.areaWardId.id,
      keyName: filterKey.areaWardId.name,
    },
  ];

  const FILTER_COMPONENT = [
    {
      toggle: true,
      list: POST_TYPE(translate),
      idQuery: filterKey.realEstatePostType.idQuery,
      keyId: filterKey.realEstatePostType.id,
      keyName: filterKey.realEstatePostType.name,
    },
    // Real estate type
    {
      placeholder: translate('filter.type'),
      idQuery: filterKey.realEstateCategoryId.idQuery,
      list: categoryList,
      keyId: filterKey.realEstateCategoryId.id,
      keyName: filterKey.realEstateCategoryId.name,
    },
    // Real estate location
    {
      placeholder: translate('filter.location'),
      idQuery: filterKey.areaProvinceId.idQuery,
      list: provinces,
      keyId: filterKey.areaProvinceId.id,
      keyName: filterKey.areaProvinceId.name,
      subMenu: <RealEstateFilterPopup listFilter={POPUP_AREA} />,
    },
    // Real estate price
    {
      placeholder: translate('filter.price'),
      list: PRICE_LIST(translate),
      idQuery: filterKey.realEstateValueSalePrice.idQuery,
      keyId: 'value',
      keyName: 'label',
    },
    // Real estate acreage
    {
      placeholder: translate('filter.acreage'),
      list: ACREAGE_LIST,
      idQuery: filterKey.realEstateLandRealitySquare.idQuery,
      keyId: 'value',
      keyName: 'label',
    },
    // Real estate direction
    {
      placeholder: translate('filter.direction'),
      idQuery: filterKey.realEstateHouseDirection.idQuery,
      list: directionList,
      keyId: filterKey.realEstateHouseDirection.id,
      keyName: filterKey.realEstateHouseDirection.name,
    },
  ];

  return (
    <>
      <RealEstateFilterDesktop t={translate} listFilter={FILTER_COMPONENT} />
      <RealEstateFilterMobile t={translate} listFilter={FILTER_COMPONENT} />
    </>
  );
};

export default RealEstateFilter;
