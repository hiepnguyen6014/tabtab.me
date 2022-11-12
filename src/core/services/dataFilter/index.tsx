import { ENDPOINTS } from '@constants';
import '@types';

import API from '../axiosInstance';

const { post } = API;

export const getDataFilter = async (typeId: number = 1) => {
  const body = {
    realEstatePostTypeId: typeId,
  };
  const data: any = await post(ENDPOINTS.DATAFILTER, body);
  return data?.data;
};

export const getDataArea = async (
  areaName: string = '',
  typeId: number = 1,
) => {
  const body = !areaName
    ? {
        areaParentId: typeId,
      }
    : {
        areaDataName: areaName,
        areaParentId: typeId,
      };
  const data: any = await post(ENDPOINTS.AREAFILTER, body);

  return data?.data;
};

export const getSubCategory = async (categoryId?: string | number) => {
  const body = {
    filter: {
      realEstateCategoryId: categoryId,
    },
  };
  const data: any = await post(ENDPOINTS.SUB_CATEGORY_FILTER, body);
  return data?.data;
};
