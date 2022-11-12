import API from '../axiosInstance';

const GET_AREA = `${process.env.NEXT_PUBLIC_API_URL}/DataFilter/getAreaData`;
const GET_STREET = `${process.env.NEXT_PUBLIC_API_URL}/AreaStreet/getList`;
const GET_DIRECTION = `${process.env.NEXT_PUBLIC_API_URL}/AreaDirection/find`;
type TToken = string | undefined;
const { post } = API;
export const getArea = (areaData: {
  areaDataName?: string;
  areaParentId: number;
}) => {
  return post(GET_AREA, areaData);
};

export const getAreaStreet = (streetName?: string) => {
  return post(GET_STREET, {
    filter: {
      areaStreetName: streetName ? streetName : undefined,
      isHidden: 0,
    },
    skip: 0,
    limit: 10,
    order: {
      key: 'createdAt',
      value: 'desc',
    },
  });
};

export const getDirection = (data: { filter: any }, token: TToken) => {
  return post(GET_DIRECTION, data, token);
};
