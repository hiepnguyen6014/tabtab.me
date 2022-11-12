import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Checkbox } from 'antd';

export const ListCheckWrapper = styled.div`
  display: grid;
  grid-template-columns: 25%25%25%25%;
  align-items: center;
  justify-content: space-between;
  row-gap: 20px;
  @media ${device.maxMd} {
    grid-template-columns: 35%35%;
  }
  @media ${device.maxSm} {
    grid-template-columns: 50%50%;
  }
`;

export const CheckBoxItem = styled(Checkbox)`
  .ant-checkbox-checked > .ant-checkbox-inner {
    border: 1px solid #ffc22b !important;
    background: #ffc22b;
  }
  .ant-checkbox-checked::after {
    border: none;
  }
`;
