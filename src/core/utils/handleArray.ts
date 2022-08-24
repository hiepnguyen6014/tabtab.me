import { filterKey } from '@contexts';
import { PUBLIC_ROUTES } from "../constants/routes"

export const arrayToString = (arr:Array<string|number>,space?:string,pathName?:string, encode = false)=>{
    const res = []
    arr.forEach((name:string)=>{
        if(name){
            res.push(encode ? encodeURIComponent(name) :name)
        } 
    })
    return pathName ? pathName + res.join(', ') : res.join(', ')
}

export const getPostTypeId = (pathname:string|number)=>{
    
    const arrayRoutes = Object.keys(PUBLIC_ROUTES)
    for(let i = 0 ; i < arrayRoutes.length ; i++){
        const regex = PUBLIC_ROUTES[arrayRoutes[i]].href   
        if(typeof pathname == 'number'){ // parameter is post type id [number]
            return{
                id: pathname,
                href:PUBLIC_ROUTES[arrayRoutes[pathname - 1]].href
            }
        }     
        if(typeof pathname == 'string' && pathname.indexOf(regex) > -1){     
            return{
                id: i + 1,
                href: PUBLIC_ROUTES[arrayRoutes[i]].href
            } 
        }
    }
} 

export const convertTitle= (arr :any)=>{
    return ""
}

export const detectLineBreak = (text?:string)=>{
    if(!text) return []
    const regex = /\r?\n/gi
    return text.split(regex)
}


export const removeEmptyType = (obj:{})=>{  
    Object
        .entries(obj)
        .forEach(([key,value])=>{
            if(value && typeof value == 'object'){
                removeEmptyType(value)
            }
            if(value && typeof value == 'object' && !Object.keys(value).length || value == null || value == undefined || !value){ 
                delete obj[key]               
            }
        })
    return obj
}


export const getTitleValuationChart = (filter:any,listType?:any[],listDistrict?:any[])=>{
    // const prefix = translate('valuation.priceHouse')
    // const district = translate('common.district')
    if(!listType.length || !listDistrict.length) return 
    const getName = listType.filter(item=>item[filterKey.realEstateCategoryId.id] == filter.filter[filterKey.realEstateCategoryId.id])[0]
    const getNameType = getName ? getName[filterKey.realEstateCategoryId.name] : ''
    const getDistrict= listDistrict.filter(item=>item[filterKey.areaDistrictId.id] == filter.filter?.areaDistrictId)[0]
    const getDistrictName = getDistrict ? ", " + 'Quan' + " " + getDistrict[filterKey.areaDistrictId.name] : ''
    return 'Gia' + " " + getNameType +  getDistrictName
}

export const parseHtmlText = (htmlText?:string)=>{
    if(!htmlText) return 
    if(typeof DOMParser){
        const parser = new DOMParser()
        const result = parser.parseFromString(htmlText, 'text/html')
        return result
    }
}