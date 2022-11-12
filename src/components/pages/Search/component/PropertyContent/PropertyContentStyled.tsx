import { Button, Checkbox, Divider, Image, Row, Typography } from 'antd';

import { styled } from '@styles/theme';

export const BoxContainer = styled.div`
  padding: 12px;
  width: 350px;
`;

export const BoxTypography = styled(Typography)`
  font-size: 20px;
  font-family: Inter;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const BoxCheckBox = styled(Checkbox)`
  display: flex;
  align-items: center;
  margin-left: 0;
  margin-bottom: 24px;
  .ant-checkbox-checked .ant-checkbox-inner {
    background: #f9c41f;
    border-radius: 4px;
    color: black;
    border-color: #f9c41f;
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #f9c41f !important;
  }
`;
