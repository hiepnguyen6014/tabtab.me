/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Config from '../../../config';
import { IUser } from '@types';
import { getListsUserSaved, getPostByLocation, getUserInfo, userGetLinkApp } from '../services';
import { useRouter } from 'next/router';
import { POST_TYPE_PARAMS, ROUTES } from '../constants/routes';
import { MPostDetail } from '@models/MPostDetail';
import { MLinkApp } from '@models/MLinkApp';
import { checkIsHomePage } from '../utils/navigator';
import { reactLocalStorage } from '../utils/helpers';

interface UserContextProps {
  currentUser?: IUser;
  systemConfig?:MLinkApp;
  listUserSave ?:{total:number, data:MPostDetail[]};
  listPostLocation ?: {total:number, data:MPostDetail[]}
  setCurrentUser?: (val: any) => void;
  userLogout ?:()=> void;
  currentSystemSetting?: any;
  currentUserSetting?: any;
}

export const UserContext = React.createContext<UserContextProps>({
  currentUser: {},
});

export const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser]:any = React.useState({});
  const router = useRouter()
  const [listUserSave,setListUserSave]:any= useState()
  const [systemConfig, setSystemConfig] = useState(new MLinkApp({}))
  const [listPostLocation, setListPostLocation]:any= useState()

  const userLogout = ()=>{
    router.push({
      pathname:ROUTES.LOGOUT.href,
      query:{logout: true ,redirectUrl:window.location.href}
    })
  }

  const getListSave = (page:number|string = 1,token:string )=>{
    getListsUserSaved(Number(page),token).then(data=>{
      if(data){
        setListUserSave(data)
      }
    })
  }

  const getListLocation = (page:number|string = 1,token:string )=>{
    getPostByLocation(Number(page),token).then(data=>{
      if(data){
        setListPostLocation(data)
      }
    })
  }

  const getInfoUser = (token)=>{
    if(!token) return {}
    getUserInfo(token).then(data=>{
      if(data) setCurrentUser(data)
    })
  } 
 
  useEffect(()=>{
    let mounted= true
    userGetLinkApp().then((res)=>{
        if(res && mounted)setSystemConfig(res)
    })
    const infoUser =getInfoUser(reactLocalStorage.getObject(Config.INFO_USER_KEY,{}).token) 
    if(Object.keys(infoUser || {}).length){
      if(mounted)setCurrentUser(infoUser);
    }
    return ()=>{mounted = false}
  },[])

  useEffect(()=>{
    const infoUser = reactLocalStorage.getObject(Config.INFO_USER_KEY,{})
    if(Object.keys(infoUser).length){
      const isHomePage = checkIsHomePage()
      if(router.query?.type == POST_TYPE_PARAMS.POST_LOCATION.params || isHomePage){
        getListLocation(router.query?.page?.toString(),infoUser?.token)
      }
      if(router.query?.type == POST_TYPE_PARAMS.POST_SAVED.params || isHomePage){
        getListSave(router.query?.page?.toString(),infoUser?.token)
      }
    }
  },[router.query?.page, router.query?.type])

  return (
    <UserContext.Provider value={{
      currentUser,
      userLogout,
      listUserSave,
      systemConfig,
      listPostLocation
    }}>
      {React.Children.toArray(props.children)}
    </UserContext.Provider>
  );
};
