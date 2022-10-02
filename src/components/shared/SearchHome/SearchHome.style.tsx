import { styled } from '@styles/theme';
import { Button, Input, Select, Form, Col, Row, Radio, Typography } from 'antd';
import { device } from '@styles/theme/device';
import { colors } from '@styles/theme/colors';

export const SearchWrapper = styled(Row)`
  width: 588px;
  height: 100%;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  padding-right: 30px;
  padding-left: 30px;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
  margin-top: 0px;
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
  width: 100%;
  margin: auto;
  background: transparent;
  padding: 0;
  border: none;
  box-shadow: none;
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

export const RadioSearch = styled(Radio.Group)`
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