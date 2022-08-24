import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Button, Input, Radio, Typography } from 'antd';

export const RoommateWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  .breadcrumb-detail {
    margin-top: 30px;
    margin-left: 10px;
    display: flex;
  }
  .device__justify-between{
    @media ${device.maxMd} {
    justify-content: space-between;
  }
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

export const ButtonAdd = styled(Button)`
  border: 1px solid #d3d3d3;
  border-radius: 100px;
  width: 193px;
  height: 36px;
  padding: 8px 16px;
  gap: 16px;
  background: transparent;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #4e4e4e;
  @media ${device.maxMd} {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 0px 0px;
    justify-content: center;
    .span-none{
      display: none;
    }
  }
`;

export const RoommateText = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  .header-content {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-transform: capitalize;
    color: #7a7a7a;
    margin-left: 8px;
  }
  .title-text-style {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    color: #222222;
  }
  .field-filter--style {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #7a7a7a;
    @media ${device.maxMd} {
      span{
        display: none;
      }
    }
  }
  .text-button--style {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #222222;
  }
`;

export const DivWrap = styled((props) => <div {...props} />)`
  ${({ borderColor }) =>
    borderColor
      ? {
          borderColor: borderColor,
        }
      : {
          borderColor: '#E9E9E9 !important',
        }}
  ${({ background }) =>
    background
      ? {
          background: background,
        }
      : {
          background: '#ffffff !important',
        }}

  border: 2px solid #F9C41F;
  border-radius: 16px;
  width: 180px;
  display: flex;
  margin: 12px 0px;
  align-items: center;
  height: 48px;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 0px 16px;
  @media ${device.maxMd} {
    width: auto;
  }
`;
