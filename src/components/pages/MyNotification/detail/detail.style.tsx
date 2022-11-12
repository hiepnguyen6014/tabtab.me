import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Col, Image, Row } from 'antd';

export const DetailContentRow = styled(Row)`
  background: #fff;
  padding: 20px;
`;
export const DetailContentCol = styled(Col)``;

export const DetailImage = styled(Image)`
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;
export const RowHeaderNotify = styled.div`
  width: 100%;
  height: 98px;
  background: #d44640;
  display: none;
  @media ${device.maxMd} {
    display: block;
  }
`;
