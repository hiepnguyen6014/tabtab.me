import API from '../axiosInstance';
import { ENDPOINTS } from '@constants';
import {
} from '@types';
import { MPostDetail, MUtilData } from '@root/src/models/MPostDetail';
import { MNewsPost } from '@models/MNewsPost';
import { reactLocalStorage } from '../../utils/helpers';
import Config from '@root/config';
const { post, put, get, del } = API;



const bodyPagination = {
  skip:0,
  limit:20
}
const bodyDefault = {
  ...bodyPagination,
  order:{
    key:"createdAT",
    value:"desc"
  }
}

const compoundModel = (posts:Array<MPostDetail> | MPostDetail, utils?:MUtilData[])=>{
  if(!posts) return []
  if(!Array.isArray(posts)){
    const data = {}
    return {... new MPostDetail(posts,utils)}
    
  }else{
    const data = []
    for(let i = 0; i< posts.length; i++){
      const item = new MPostDetail(posts[i],utils)
      data.push({...item})
    }
    return data
  }
}



export const getListRealEstate = async(filter:any,page=1,limit=20 ) => {
  const skip = (page-1)*limit 
  const body={
    ...filter,
    skip:skip,
    limit:20,
  }
  const data =await post(ENDPOINTS.LIST_REALESTATE, body)
  
  return {
      data: compoundModel(data?.data?.data),
      total: data?.data?.total || 0
  }
};

export const getDetailPost = async(id:number)=>{
  const body= {
    id: id
  }
  const token = reactLocalStorage.getObject(Config.INFO_USER_KEY,{})?.token
  const data = await post(ENDPOINTS.DETAIL,body,token)
  if(!data) return compoundModel(null) 
  const res = compoundModel(data?.data?.realEstateData,data?.data?.realEstateUtilData)
  return res
}

export const getPostByRating = async(page:number=1)=>{
  const skip = (page-1)*20
  const body ={
    ...bodyPagination,
    skip:skip
  }
  const data = await post(ENDPOINTS.LIST_POST_RATING,body)
  return {
    data: compoundModel(data?.data?.data),
    total: data?.data?.total || 0
  }
}

export const getPostByLocation = async(page:number = 1,token:string)=>{
  const skip = (page-1)*20
  let body = {
    ...bodyDefault,
    skip:skip
  };
  delete body['order'];
  const data =await post(ENDPOINTS.LIST_LOCATION,body,token)
  return {
    data: compoundModel(data?.data?.data),
    total: data?.data?.total || 0
  }
}

export const getPostByPrice = async(page:number =1)=>{
  const skip = (page-1)*20 
  const body ={
    ...bodyPagination,
    skip:skip
  }
  const data = await post(ENDPOINTS.LIST_POSTS_PRICE,body)
  return {
    data: compoundModel(data?.data?.data),
    total: data?.data?.total || 0
  }
}

export const getListsUserSaved = async(page:number=1,token:string)=>{
  const skip = (page-1)*20
  const body = {
    ...bodyDefault,
    skip:skip
  }
  const data = await post(ENDPOINTS.POSTS_SAVED, body,token)
  return {
    data: compoundModel(data?.data?.data),
    total: data?.data?.total || 0
  }
}

export const reportProblem = async(info:{}, token)=>{
  const body = {
    ...info
  }
  post(ENDPOINTS.REPORT_REALESTATE,body,token).then(res=> console.log(res))
}

export const getPostsNews = async(page=1, searchText='')=>{
  const skip = (page-1)*20 
  const body = searchText?.trim() ? {
    searchText:searchText,
    skip:skip,
    limit:20
  } : {
    skip:skip,
    limit:20
  }
  const data = await post(ENDPOINTS.LIST_NEWS,body)
  const result = []
  for(let i = 0; i< data?.data?.data?.length; i++){
    const declareData = new MNewsPost(data?.data?.data[i])
    result.push({...declareData})
  }
  return {
    data:result,
    total:data?.data?.total || 0
  }
}

export const getDetailNews = async(id:string|number)=>{
  const body = {
    id:id
  }
  const data = await post(ENDPOINTS.NEWS_DETAIL,body)
  const otherNews = []
  for(let i =0; i< data?.data?.otherNews.length; i++){
    const compoundData = new MNewsPost(data?.data?.otherNews[i])
    otherNews.push({...compoundData})
  }
  return {data:{...new MNewsPost(data?.data?.data)}, others:otherNews}

}

export const getContentForLandingPage = async(pageName?:string|number)=>{
  const body = {}
  const data = await post(ENDPOINTS.LANDING_PAGE,body)
  if(!data) return ""
  return data?.data?.data[0]
}