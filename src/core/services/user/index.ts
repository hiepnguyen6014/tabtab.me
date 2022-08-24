import Config from '../../../../config';
import { reactLocalStorage } from '@core';
import { MLinkApp } from './../../../models/MLinkApp';
import API from '../axiosInstance';
import { ENDPOINTS, STATUS_PAYMENT } from '@constants';
import { MNotify } from '@models/MNotify';

const { post, get, put } = API;
const bodyPagination = {
  skip: 0,
  limit: 20,
};
let token = ''
if(typeof window !== 'undefined'){
  token = reactLocalStorage.getObject(Config.INFO_USER_KEY,{})?.token
}

export const paymentRecord = async (id: string|number) => {
  const body = { id: id };
  const data = await post(ENDPOINTS.PAYMENT_RECORDS, body,token);
  const response = {mess:data.message, data:data?.data}
  if(data?.error == STATUS_PAYMENT.NOT_ENOUGH.mess){
    response.mess = STATUS_PAYMENT.NOT_ENOUGH.mess
  }
  return response 
};

export const userGetLinkApp = async()=>{
  const body ={}
  const data = await post(ENDPOINTS.GET_LINK_APP, body)
  if(!data) return {...new MLinkApp({})}
  return {...new MLinkApp(data?.data?.data[0])}
}
export const userSavePost = async (idPost: string | number) => {
  const body = {
    realEstateId: idPost,
  };
  const data = await post(ENDPOINTS.USER_SAVE_POST, body,token);
  if (data?.statusCode == 200) {
    return true;
  } else {
    return false;
  }
};
export const userDeleteSavePost = async (idPost: string|number)=>{
  const body = {
    realEstateId: idPost,
  };
  const data = await post(ENDPOINTS.USER_DELETE_SAVE_POST, body,token);
  if (data?.statusCode == 200) {
    return true;
  } else {
    return false;
  }
}

export const getUserInfo = async (tokenDirect:string) => {
  const body = {};
  const data = await post(ENDPOINTS.USER_DETAIL, body,tokenDirect);
  return data ? data.data : '';
};

export const deleteMessage = async(messageId:number)=>{
  const body = {
    messageCustomerId:messageId
  }
  return await post(ENDPOINTS.DELETE_CUSTOMER_MESSAGE,body,token)
}

export const getDetailMessage = async(messageId:number)=>{
  if(messageId == 0 || !messageId) return undefined
  const body = {
    messageCustomerId : messageId
  }
  const {data} = await post(ENDPOINTS.DETAIL_CUSTOMER_MESSAGE,body,token)
  return { ... new MNotify(data)}
}

export const markReadMessage = async(messageCustomerId:number)=>{
  const body = {
    messageCustomerId: messageCustomerId
  }
  return await post(ENDPOINTS.MARK_READ_MESSAGE, body,token)
}

export const getListCustomerMessage = async (filter:any,page: string) => {
  
  if(!filter.customerId) return {
    data:{
      recently:[],
      latest:[]
    }
  }
  const parsePage = parseInt(page) || 1;  
  const skip = (parsePage - 1) * 20;
  const body = {
    filter:{
      ...filter
    },
    ...bodyPagination,
    skip: skip,
  };
  const { data } = await post(ENDPOINTS.LIST_CUSTOMER_MESSAGE, body,token);
  const recently = [];
  const latest = [];
  for (let i = 0; i < data?.data?.length; i++) {
    const compound = new MNotify(data.data[i]);
    if(page !== '1' && page){
      recently.push({ ...compound });
    }else if(page == '1' || !page){
      if (i >= 5) {
        recently.push({ ...compound });
      } else {
        latest.push({ ...compound });
      }
    }
    
  }
  return {
    data: {
      recently: recently || [],
      latest: latest || [],
    },
    total: data?.total || 0,
  };
};
