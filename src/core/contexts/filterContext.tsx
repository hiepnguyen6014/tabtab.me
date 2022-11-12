/* eslint-disable react-hooks/exhaustive-deps */
import router, { useRouter } from 'next/router';
import React, { useState, useEffect, useMemo } from 'react';
import { getDataArea, getDataFilter } from '../services/dataFilter';
import { IAreaData } from '../types/filter';
import { getPostTypeId } from '../utils/handleArray';
import { formatNumToUnit } from '../utils/HandleNumber';

interface FilterContextProps {
  provinces: IAreaData[];
  districts: IAreaData[];
  wards: IAreaData[];
  directionList?: any[];
  categoryList?: any[];

  // Handle event
  onDeleteValue?: (idQuery: string) => void;
  onChangeValue?: any;
  onReset?: () => void;
  initValue?: (
    idQuery?: string, // ID on url
    listData?: any[], // List data in dropdown
    keyId?: string, // key detect id in object item
    keyName?: string, // key detect item in object item
    placeholder?: string, // if init value undefine, placeholder will be return
    t?:any // translate
  ) => string;
}

export const filterKey = {
  realEstatePostType:{
    idQuery:'loai',
    id:'value',
    name:'label'
  },
  realEstateCategoryId: {
    idQuery: 'loaiBDS',
    id: 'realEstateCategoryId',
    name: 'realEstateCategoryName',
    field: "realEstateCategory"
  },
  realEstateSubCategoryId:{
    idQuery:'loaihinhBDS',
    id:'',
    name:''
  },
  areaProvinceId: {
    idQuery: 'tinh',
    id: 'areaDataId',
    name: 'areaDataName',
    field: "areaProvince"
  },
  areaDistrictId: {
    idQuery: 'quan',
    id: 'areaDataId',
    name: 'areaDataName',
    field: "areaDistrict"
  },
  areaWardId: {
    idQuery: 'xa',
    id: 'areaDataId',
    name: 'areaDataName',
  },
  realEstateHouseDirection: {
    idQuery: 'huong',
    id: 'areaDirectionId',
    name: 'areaDirectionName',
  },
  realEstateValueSalePrice: {
    idQuery: 'gb',
  },
  realEstateLandRealitySquare: {
    idQuery: 'dt',
  },
  searchText: {
    idQuery: 'tukhoa',
  },
  realEstateSx: {
    idQuery: 'sx'
  },
  realEstateSxLoai: {
    idQuery: 'sx_loai'
  }
};

export const FilterContext = React.createContext<FilterContextProps>(null);
export const FilterProvider = (props) => {
  const { query } = useRouter();

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [directionList, setDirection] = useState([]);
  const [categoryList, setCategory] = useState([]);
  const [subCategoryList, setSubcategoryList] = useState([])

  // Handler
  function handleFilterData (postTypeId = 1, mounted = true ){
    getDataFilter(postTypeId)
      .then(response => {
        if(mounted){
          setCategory(response.dataRealEstateCategory)
          if(!directionList.length) setDirection(response.dataDirection)
        }
      })
  }

  function handleProvinces(parentId = 1, mounted = true){
    getDataArea('',parentId)
      .then(response =>{if(mounted) setProvinces(response.data)})
  }

  function handleDistrics(parentId ?:number, mounted = true){
    if(!parentId){
      setDistricts([])
      return
    }
    getDataArea('',parentId)
      .then(response =>{if(mounted) setDistricts(response.data)})
  }

  function handleWards(parentId ?:number, mounted = true){
    if(!parentId){
      setWards([])
      return
    }
    getDataArea('',parentId)
      .then(response =>{if(mounted) setWards(response.data)})
  }

  // Fetch api in first render
  useEffect(() => {
    let mounted = true
    const defaultFilter = query[filterKey.realEstatePostType.idQuery] ? ~~query[filterKey.realEstatePostType.idQuery] : 1
    handleFilterData(defaultFilter, mounted)
    handleProvinces(defaultFilter, mounted)
    return()=>{mounted = false}
  }, []);

  // Get list depen
  useEffect(() => {
    handleDistrics(~~query[filterKey.areaProvinceId.idQuery])
  }, [query[filterKey.areaProvinceId.idQuery]]);

  useEffect(() => {
    handleWards(~~query[filterKey.areaDistrictId.idQuery])
  }, [query[filterKey.areaDistrictId.idQuery]]);

  useEffect(() => {
    if (query[filterKey.realEstatePostType.idQuery]) {
      handleFilterData(~~query[filterKey.realEstatePostType.idQuery])
    }
  }, [query[filterKey.realEstatePostType.idQuery]]);

  // Hanlde event
  const onChangeValue = (
    keyName: string,
    e: string | [string, string | undefined]
  ) => {
    onSubmit(keyName, e);
  };

  const onSubmit = (key: string, value: string | [string, string]) => {
    if (key == undefined) return;
    const queryValue = { ...query }; // clone value in url
    if(key == filterKey.areaProvinceId.idQuery){
      delete queryValue[filterKey.areaDistrictId.idQuery]
      delete queryValue[filterKey.areaWardId.idQuery]
    }else if(key == filterKey.areaDistrictId.idQuery){
      delete queryValue[filterKey.areaWardId.idQuery]
    }
    if (value == undefined || value == '') {
      delete queryValue[key];
      // User deleted previous value
    } else {
      if (Array.isArray(value)) {
        queryValue[key] =
          value.length > 1 ? value[0] + '-' + value[1] : value[0];
      } else {
        queryValue[key] = value; // User select new value
      }
    }
    if (queryValue['page'] && queryValue['page'] !== '1') {
      // redirect page 1
      delete queryValue['page'];
    }
    router.push({
      pathname: router.pathname,
      query: queryValue,
    });
  };

  const onDeleteValue = (idQuery: string) => {
    onSubmit(idQuery, undefined);
  };

  const onReset = () => {
    router.push(router.pathname);
  };

  const initValue = (
    idQuery: string,
    listData: any[],
    keyId: string,
    keyName: string,
    t:any
  ) => {
    // InitValue always change if query[idQuery] change
    if (!query.hasOwnProperty(idQuery) || idQuery == undefined || !listData && idQuery !== filterKey.searchText.idQuery)
      return undefined;
    // Init value for input search
    if (idQuery == filterKey.searchText.idQuery) {
      return query[idQuery];
    }
    // Init value for value sale
    if (idQuery == filterKey.realEstateValueSalePrice.idQuery) {
      const splitValue = query[idQuery].toString().split(/\-/);
      return splitValue.length > 1
        ? formatNumToUnit(Number(splitValue[0]) * 1000000,t,false) +' -> ' + 
            formatNumToUnit(Number(splitValue[1]) * 1000000,t)
        : '> ' +formatNumToUnit(Number(splitValue[0]) * 1000000,t);
    }
    // Init value for land square | Coppy code vi dang dung component chung nen khong the dat ben ngoai duoc
    if (idQuery == filterKey.realEstateLandRealitySquare.idQuery) {
      const splitValue = query[idQuery].toString().split(/\-/);
      return splitValue.length > 1
        ? splitValue[0] +' -> '+ 
            splitValue[1] + ' m²'
        : '> ' + splitValue[0] + 'm²';
    }

    for (let i = 0; i < listData.length; i++) {
      if (listData[i][keyId] == ~~query[idQuery]) {
        return listData[i][keyName];
      }
    }
    return undefined;
  };

  return (
    <FilterContext.Provider
      value={{
        provinces,
        districts,
        wards,
        directionList,
        categoryList,

        onDeleteValue,
        onChangeValue,
        onReset,
        initValue,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};
