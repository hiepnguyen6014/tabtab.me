import styled from '@emotion/styled';
import { Typography } from 'antd';

export const MenuBox = styled.div`
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
`;
export const TextWrap = styled(Typography)`
  font-family: 'Inter';
  .text-select {
    overflow: auto;
    width: 64px;
    color: #4e4e4e;
    font-weight: 700;
  }
`;
