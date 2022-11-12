import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { Button, Row } from 'antd';

export const FDesktop = styled.div`
  position: relative;
  max-width: 1200px;
  width: 95%;
  margin: auto;
`;
export const RowWrap = styled(Row)`
  width: 100%;
  margin: auto;
`;

export const FilterContainer = styled.div`
  border: 1px solid #d3d3d3;
  display: flex;
  justify-content: space-between;
  padding: 14px 16px 14px 16px;
  border-radius: 8px;
  width: 150px;
  background: #ffffff;
`;

export const WidgetAction = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40%;
  position: relative;
  button {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    height: 40px;
    width: 100%;
  }
`;

export const WidgetHeader = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  height: 35%;
  a {
    text-decoration: underline;
    color: #ffc22b;
  }
  [role='left'] {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 5%;
    span {
      width: 100%;
    }
    h5 {
      font-size: 14px;
      margin: 0;
      text-align: left;
    }
  }
  & > span:nth-of-type(2) {
    text-align: right;
    width: auto;
  }
`;

export const WidgetHeaderAgent = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 35%;
  a {
    text-decoration: underline;
    color: #ffc22b;
  }
  & > span:nth-of-type(2) {
    text-align: right;
    width: auto;
  }
`;

export const WidgetWrap = styled.div`
  margin-top: 25px;
  width: 100%;
  overflow: hidden;
  float: right;
  min-height: 200px;
  background: #ffffff;
  border: 1px solid rgba(118, 118, 118, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 8px 12px rgba(34, 34, 34, 0.06);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 25px, #f9c31f 0px 6px 6px;
  }
  // padding: 15px;
  @media ${device.maxSm} {
    transform: scale(0.9);
  }
`;

export const PostWrapper = styled(props => <div {...props} />)`
  overflow: hidden;
  box-shadow: 0px 4px 16px rgba(34, 34, 34, 0.08);
  border-radius: 16px;
  transition: all.2s ease;
  cursor: pointer;
  [role='separator'] {
    margin: 0;
  }
  [role='row-post'] {
    padding: 9px 12px;
    /* font-size: 100%; */
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 25px, rgba(0, 0, 0, 0.1) 0px 6px 6px;
  }
  @media ${device.maxLg} {
    height: 380px;
    width: 100%;
  }
  @media ${device.maxSm} {
    height: auto;
    width: 100%;
  }
`;

export const ButtonCall = styled(Button)`
  background-color: transparent !important;
  color: #222222;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  border-radius: 8px;
  border: 1px solid #767676;
  svg {
    path {
      fill: #000;
    }
  }
  &:hover {
    background-color: #d44640;
  }
`;

export const ButtonChat = styled(Button)`
  background: white;
  border-color: #f9c41f;
  &:focus {
    background: #f9c41f !important;
    border-color: #f9c41f;
  }
  &:not(.disable-custom-btn):not(.disable-hover):hover {
    background: #f9c41f !important;
  }
`;

export const SwapAdd = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 42px;
  padding: 0px 25px 0px 25px;
  display: flex;
  align-items: center;
  [role='scale'] {
    @media ${device.maxSm} {
      display: none;
      padding: 0px;
    }
  }
`;
