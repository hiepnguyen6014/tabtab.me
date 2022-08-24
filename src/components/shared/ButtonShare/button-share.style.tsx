import { styled } from "@styles/theme";
import {Button } from "antd"
import { device } from "@styles/theme/device";
export const ButtonShareWrap = styled.div`
    font-size: 14px;
    font-weight: 600;
    font-family: Inter;
    display: flex;
    gap:10px;
    align-items: center;
    border: 1px solid #F9C41F;
    padding:5px 10px;
    @media ${device.maxSm}{
      display: none;
    }
`