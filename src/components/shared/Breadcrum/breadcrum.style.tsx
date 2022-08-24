import { styled } from "@styles/theme"
import { device } from "@styles/theme/device"
import { Breadcrumb } from "antd"
export const BreadcrumbWrapper = styled((props:any)=><Breadcrumb {...props}/>)`
    margin: 0 0 20px 0;
    font-size: 14px;
    font-weight: 500;
    font-family: Inter
    span{
        color: ${props=> props.coloritem ? props.coloritem : ''}
    }
`
export const BreadcrumbItem = styled(Breadcrumb.Item)`
    cursor:pointer;
    font-size: 14px;
    font-weight: 500;
    font-family: Inter;
`