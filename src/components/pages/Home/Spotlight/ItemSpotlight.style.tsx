import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Col, Row, Typography } from 'antd';

export const ItemWrapSpotlight = styled.div`
  width: 100%;
`;

export const TextColor = styled((props) => <Typography {...props} />)`
  ${({ colorText }) =>
    colorText
      ? {
          color: colorText + '!important',
        }
      : {
          color: '#33a7e2 !important',
        }}
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
`;

export const ColA = styled(Col)`
  width: 100%;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
  }
  @media ${device.maxSm} {
    padding-bottom: 20px;
  }
`;

export const DivA = styled.div`
  width: 100%;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
  }
  @media ${device.maxSm} {
    padding-bottom: 20px;
    max-width: 165px;
    margin-right: 15px;
  }
`;

export const RowA = styled(Row)`
  width: 100%;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
  }
  @media ${device.maxSm} {
    padding-bottom: 20px;
  }
`;
