import { MChart, MPriceAverange } from '@models/MChart';
import '@types';
import moment from 'moment';

import { ENDPOINTS } from '../../constants/endpoints';
import { removeEmptyType } from '../../utils/handleArray';
import API from '../axiosInstance';

const { post } = API;

export const statisticalPriceByArea = async (filter: {}) => {
  let body: any = {};
  body.filter = removeEmptyType(filter);
  body['startDate'] = moment().subtract(12, 'months').toISOString();
  body['endDate'] = moment().toISOString();
  const response: any = await post(ENDPOINTS.PRICE_BY_AREA, body);
  return new MChart(response?.data);
};

export const statisticalPriceByPostType = async (filter?: {}) => {
  let body: any = {};
  body.filter = removeEmptyType(filter);
  // default filter have postTypeId = 1
  if (body['filter'] && body['filter']['realEstatePostTypeId']) {
    delete body['filter']['realEstatePostTypeId'];
  }
  body['startDate'] = moment().subtract(12, 'months').toISOString();
  body['endDate'] = moment().endOf('year').toISOString();
  const response = await post(ENDPOINTS.PRICE_BY_POST_TYPE, body);
  if (!response?.data) return null;
  return new MPriceAverange(
    response?.data?.data,
    response?.data?.count,
    response?.data?.countAgency,
  );
};
