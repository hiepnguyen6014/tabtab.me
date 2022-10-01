import { Button, Image, Radio, Row } from 'antd';

import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { styled } from '@styles/theme';

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
export const ButtonClasses = styled(Button)`
  background: #e9e9e9;
  border-width: 0px;
  height: auto;
  &:focus {
    background: #f9bd06;
    border-width: 0px;
    border-radius: 8px;
  }
`;

export const DivPrice = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  padding: 12px;
  justify-content: space-between;
  border: 1px solid #7a7a7a;
  border-radius: 12px;
  margin-right: 15px;
`;
export const ButtonClear = styled(Button)`
  background: #4e4e4e;
  border-color: #4e4e4e;
  &:focus {
    background: #4e4e4e !important;
    border-color: #4e4e4e;
  }
  &:not(.disable-custom-btn):not(.disable-hover):hover {
    background: #4e4e4e !important;
  }
`;

export const ButtonApply = styled(Button)`
  background: #f9c41f;
  border-color: #f9c41f;
  &:focus {
    background: #f9c41f !important;
    border-color: #f9c41f;
  }
  &:not(.disable-custom-btn):not(.disable-hover):hover {
    background: #f9c41f !important;
  }
`;

export const WrapperHideMap = styled(Row)`
  margin-top: 16px;
`;

export const ImageHome = styled(Image)`
  position: relative;
  object-fit: cover;
  border-radius: 6px 6px 0px 0px;
`;

export const BoxSalePrice = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 1;
  position: absolute;
  top: 10px;
  left: 30px;
  padding: 2px 8px;
`;

export const SpanPrice = styled.span`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: #000000;
`;

export const BoxLogoX = styled.div`
  bottom: -10px;
  right:22px;
  z-index: 1;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 2px 6px;
`;


