import { filterKey } from '@contexts'
import { Typography }from 'antd'
import { useRouter } from 'next/router'
import { VRefer, VReferItem, VReferWrap } from './ValuationRefer.styled'

interface Props{
    title:string;
    listRefer ?:string[],
    provinceId?:string|number
}
export const ValuationRefer = (props:Props)=>{
    const {title, listRefer, provinceId} = props
    const router = useRouter()
    if(!listRefer.length) return <></>
    const onRedirect = (districtId:string) => {
        const queryParams = { 
            ...router.query, 
            [filterKey.areaProvinceId.idQuery]: provinceId,
            [filterKey.areaDistrictId.idQuery]: districtId 
        }
        if (!queryParams[filterKey.realEstateCategoryId.idQuery]) {
            queryParams[filterKey.realEstateCategoryId.idQuery] = 1
        }
        let queryString = "?"
        Object.keys(queryParams).forEach((k:string, index) => {
            if (index === 0) {
                queryString = queryString + k + "=" + queryParams[k]
            } else {
                queryString = queryString + "&" + k + "=" + queryParams[k]
            }
        })
        if (window) {
            window.location.href = router.pathname + queryString
        }
    }
    return(
        <VReferWrap>
            <Typography.Title level={4}>{title}</Typography.Title>
            <VRefer>
                {
                    listRefer.length ? listRefer.map((refer,key)=>(
                        <VReferItem key={key} onClick={()=> onRedirect(refer[filterKey.areaDistrictId.id])}>
                            {refer[filterKey.areaProvinceId.name]}
                        </VReferItem>
                    )) : <></>
                }
            </VRefer>
        </VReferWrap>
    )
}