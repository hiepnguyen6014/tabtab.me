import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Button } from 'antd';

export const ButtonShareWrap = styled.div`
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  display: flex;
  gap: 10px;
  align-items: center;
  border: 1px solid #f9c41f;
  padding: 5px 10px;
  @media ${device.maxSm} {
    display: none;
  }
`;
