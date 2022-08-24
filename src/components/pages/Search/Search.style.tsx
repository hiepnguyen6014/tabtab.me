
import { styled } from "@styles/theme";
import { colors } from "@styles/theme/colors";
import { device } from "@styles/theme/device";
import { Button, Radio, Row } from "antd";

export const FDesktop = styled.div`
  position: relative;
  max-width:1200px;
  width: 95%;
  margin:auto;
`;
export const RowWrap = styled(Row)`
  width: 100%;
  margin: auto;
`;
export const ButtonClasses = styled(Button)`
  background: #E9E9E9;
  border-width:0px;
  height: auto;
  &:focus{
    background: #F9BD06;
    border-width:0px;
    border-radius:8px;
  }
`

export const DivPrice = styled.div`
  display: flex;
  width: 200px;
  align-items: center; 
  padding: 12px; 
  justify-content: space-between;
  border: 1px solid #7A7A7A; 
  border-radius: 12px; 
  margin-right: 15px;
`
export const ButtonClear = styled(Button)`
  background: #4E4E4E;
  border-color: #4E4E4E;
  &:focus{
    background: #4E4E4E !important;
    border-color: #4E4E4E;
  }
  &:not(.disable-custom-btn):not(.disable-hover):hover{
    background: #4E4E4E !important;
  }
`

export const ButtonApply = styled(Button)`
  background: #F9C41F;
  border-color: #F9C41F;
  &:focus{
    background: #F9C41F !important;
    border-color: #F9C41F;
  }
  &:not(.disable-custom-btn):not(.disable-hover):hover{
    background: #F9C41F !important;
  }
`
