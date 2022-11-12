import { styled } from "@styles/theme";
import { Pagination } from "antd";

export const PaginationWrapper = styled(Pagination)`
    display: block;
    text-align:right;
    width: 100%;
    margin-top: 70px;
    li{
        .ant-pagination-item-active{
            border: 1px solid red !important;
        }
    }
`