import { Typography } from 'antd';
import styled from '@emotion/styled';

export const BoxContainer = styled.div`
  width: 348px;
  height: 420px;
  padding: 16px;
`;

export const BoxTitle = styled(Typography)`
  font-weight: bold;
  color: #7a7a7a;
`;

export const BoxRoom = styled.div`
  margin-top: 8px;
  display: flex;
`;

export const BoxNumberRoom = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: normal !important;
  padding: 6px 16px;
  background: #f2f2f2;
  color: #2c2c2c;
  float: left;
  margin: 0px 8px 8px 0px;
  border-radius: 40px;
  cursor: pointer;
`;

export const BoxTitleDirection = styled(Typography)`
  font-weight: bold;
  color: #7a7a7a;
  margin-top: 16px;
`;

export const BoxDirection = styled.div`
  margin-top: 8px;
  display: flex;
`;

export const BoxDirectionHorizontal = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BoxAction = styled.div`
  display:flex;
  justify-content:space-between;
`
