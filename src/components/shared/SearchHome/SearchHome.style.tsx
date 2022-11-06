import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { Button, Col, Input, Radio, Row, Typography } from 'antd';

export const SearchWrapper = styled(Row)`
  max-width: 850px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  padding-right: 20px;
  padding-left: 20px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
  margin-top: 0px;
  /* padding-bottom: 4px; */
  div,
  span,
  input {
    font-size: 1.1rem !important;
  }
  @media ${device.maxMd} {
    width: 388px;
  }
  @media ${device.maxSm} {
    width: 288px;
    span {
      display: none;
    }
  }
`;
export const ColItem = styled(Col)`
  cursor: pointer;
  padding: 5px 10px;
  @media ${device.maxMd} {
    padding: 10px 0px;
  }
  @media ${device.maxSm} {
    padding: 0;
  }
`;

export const ButtonSearch = styled(Button)`
  width: 40px;
  overflow: hidden;
  height: 40px;
  border-radius: 100px;
  background: #f9c41f;
  color: #fff !important;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 5px;
  float: right;
  line-height: 12px;
  svg {
    path {
      fill: #fff;
    }
  }
  &:hover {
    color: ${colors.common} !important;
  }
  @media ${device.maxSm} {
    width: 45px;
    height: 45px;
  }
`;

export const InputSearch = styled(Input)`
  margin: auto;
  width: 100%;
  border: none;
  box-shadow: none;
  background: transparent;
  .ant-input {
    width: 100%;
    background: #f2f2f2;
  }

  @media ${device.maxSm} {
    padding-left: 5px;
  }
`;

export const TextSearchWrap = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #7a7a7a;
`;

export const FilterItem = styled(Typography)`
  min-width: 120px;
  display: flex;
  align-items: center;
`;

export const RadioSearch = styled(Radio.Group)`
  .radio-default {
    min-height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e9e9e9;
  }

  .radio-active {
    border-right: none;
    &:active {
      background: #f9c41f !important;
    }
  }
  @media ${device.maxSm} {
    width: 155px;
    span {
      display: none;
    }
  }
`;
