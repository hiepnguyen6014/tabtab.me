/* eslint-disable react-hooks/exhaustive-deps */
import { Form } from 'antd';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { getDataArea, getDataFilter } from '../services/dataFilter';
import { IAreaData } from '../types/filter';
import { filterKey } from './filterContext';
import _ from 'lodash'

interface FilterContextProps {
  provinces: IAreaData[];
  districts: IAreaData[];
  categoryList?: any[];
  valueSelected?: any;

  // Handle event
  onChangeValue?: any;
  onSubmit?: (value: any) => void;
  formSuggestPrice:any
}

interface selectFilterProps {
  areaProvince?: {
    areaDataId: number | null,
    areaDataName: string | null | undefined
  },
  areaDistrict?: {
    areaDataId: number | null,
    areaDataName: string | null | undefined, 
  },
  realEstateCategory?: {
    realEstateCategoryId: number | null,
    realEstateCategoryName: string | null | undefined
  }
}

export const defaultFilter = {
  [filterKey.areaProvinceId.idQuery]: 2,
  [filterKey.realEstateCategoryId.idQuery]: 1,
};

export const FilterValuationContext =
  React.createContext<FilterContextProps>(null);
export const FilterValuationProvider = (props) => {
  // location
  const { query } = useRouter();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [categoryList, setCategory] = useState([]);
  
  // select
  const [valueSelected, setValueSelected] = useState<selectFilterProps>({});
  const [formSuggestPrice] = Form.useForm()

  // Handler  --- FILTER
  async function getProvinces() {
    return getDataArea('', 1).then((response) => {
      return response?.data || []
    });
  }

  async function getDistricts(parentId?: number) {
    return getDataArea('', parentId).then((response) => {
      return response?.data || []
    });
  }

  async function getCategories() {
    return getDataFilter().then((response) => {
      return response?.dataRealEstateCategory || [];
    });
  }

  // Fetch api in first render
  useEffect(() => {
    function handleFetchData() {
      let areaProvinceId = 2;
      if (Object.keys(query).length > 0) {
        areaProvinceId = Number(query[filterKey.areaProvinceId.idQuery]);
      }
      Promise.all([
        getProvinces(),
        getDistricts(areaProvinceId),
        getCategories()
      ]).then((res:any) => {
        setProvinces(res[0])
        setDistricts(res[1])
        setCategory(res[2])
        // check neu co query thi lay query
        let currentValueSelected = valueSelected
        console.log('query', query);
        
        if (
          res[1].length > 0 &&
          res[0].length > 0 
        ) {
          if (!_.isEmpty(query)) {
            currentValueSelected.areaProvince = findValueSelected(Number(query[filterKey.areaProvinceId.idQuery]), 'areaDataId', res[0])
            currentValueSelected.areaDistrict = findValueSelected(Number(query[filterKey.areaDistrictId.idQuery]), 'areaDataId', res[1])
            currentValueSelected.realEstateCategory = findValueSelected(Number(query[filterKey.realEstateCategoryId.idQuery]), 'realEstateCategoryId', res[2])
            formSuggestPrice.setFieldsValue({
              areaProvince: currentValueSelected?.areaProvince?.areaDataId || res[0].areaDataId,
              areaDistrict: currentValueSelected?.areaDistrict?.areaDataId || res[1].areaDataId,
              realEstateCategory: currentValueSelected?.realEstateCategory?.realEstateCategoryId || res[2].realEstateCategoryId
            })
            setValueSelected({ ...currentValueSelected })
          } else {
            setValueSelected({
              areaProvince: {
                areaDataId: 2,
                areaDataName: "Hồ Chí Minh", 
              },
              areaDistrict: {
                areaDataId: 3,
                areaDataName: "Quận 1", 
              },
              realEstateCategory: {
                realEstateCategoryId: 1,
                realEstateCategoryName: "Bán nhà riêng" 
              }
            })
            formSuggestPrice.setFieldsValue({
              areaProvince: 2,
              areaDistrict: 3,
              realEstateCategory: 1
            })
          }
        }
      })
    }
    handleFetchData()
  }, []);

  const findValueSelected = (value:number, keyId:string, options:any) => {
    let result = options.find(item => {
      return item[keyId] === value
    })
    return result;
  }

  // Hanlde event
  const onChangeValue = async (
    value?: any,
    keyId?: string,
    fieldUpdate?:string
  ) => {
    if (!keyId) return;
    // neu chon xong tinh/thanh pho thi fetch quan/huyen
    let newData:any = []
    let newSelectedData = {
      ...valueSelected,
      [keyId]: {
        ...valueSelected[keyId],
        [fieldUpdate]: value
      },
    }
    if (keyId === 'areaProvince') {
      const res = await getDataArea('', value)
      if (res && res.data && res.data.length > 0) {
        newData = res.data
        newSelectedData.areaDistrict = {
          ...valueSelected.areaDistrict,
          areaDataId: newData[0].areaDataId
        }
      }
    }
    formSuggestPrice.setFieldsValue({
      areaProvince: newSelectedData.areaProvince.areaDataId, // chac chan co roi nen klhong can
      areaDistrict: newSelectedData.areaDistrict.areaDataId,
      realEstateCategory: newSelectedData.realEstateCategory.realEstateCategoryId
    })
    setValueSelected({ ...newSelectedData })
    if (keyId === 'areaProvince') {
      setDistricts(newData)
    }
  };

  const onSubmit = () => {
    const queryValue:any = formSuggestPrice.getFieldsValue();
    const queryBuilder = `?${[filterKey.areaProvinceId.idQuery]}=${queryValue[filterKey.areaProvinceId.field]}&${[filterKey.areaDistrictId.idQuery]}=${queryValue[filterKey.areaDistrictId.field]}&${[filterKey.realEstateCategoryId.idQuery]}=${queryValue[filterKey.realEstateCategoryId.field]}`
    if (window) {
      window.location.href = window.origin +'/dinh-gia'+queryBuilder
    }
  };

  return (
    <FilterValuationContext.Provider
      value={{
        provinces,
        districts,
        categoryList,
        valueSelected,
        onChangeValue,
        onSubmit,
        formSuggestPrice
      }}
    >
      {props.children}
    </FilterValuationContext.Provider>
  );
};
