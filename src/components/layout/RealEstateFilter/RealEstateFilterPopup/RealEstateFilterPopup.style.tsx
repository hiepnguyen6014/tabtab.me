import { styled } from "@styles/theme";
import { Menu } from "antd";


export const FMenuPopupWrap = styled.div`
  background: #fff;
  row-gap:10px;
  min-width:200px;
  display:flex;
  flex-direction:column;
  padding: 10px;
  border: 1px solid rgba(118, 118, 118, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 8px 12px rgba(34, 34, 34, 0.06);
  border-radius: 5px;
  h1{
    font-size:14px;
    padding-bottom:0px !important;
    margin-bottom:0;
  }
`;

export const FMenuPopupRow = styled.div`
  display: flex;
  justify-content: space-between;
  position:relative;
  align-items: center;
  padding: 0 !important;
  height: 50px;
  label {
    font-size: 14px;
    font-weight: 500;
  }
`;
export const FMenuPopupSelect = styled.div`
  width:100%;
  padding:10px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  position:relative;
  height:40px;
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  box-sizing: border-box;
  border-radius: 2px;
  cursor:pointer;
  label{
    cursor:pointer;
  }
  svg>path{
    fill:rgba(0, 0, 0, 0.25);
  }
`;

export const FMenuItemPopup = styled(Menu.Item)``;

