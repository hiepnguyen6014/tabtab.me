import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Button, Col, Divider, Input, Radio, Typography } from 'antd';

export const SocialNetWorkWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  .breadcrumb-detail {
    margin-top: 30px;
    margin-left: 10px;
    display: flex;
  }
  .device__justify-between {
    @media ${device.maxMd} {
      justify-content: space-between;
    }
  }
  .img-border-radius {
    border-radius: 6px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  gap: 0px 10px;
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
    .span-none {
      display: none;
    }
  }
`;

export const SocialNetWorkText = styled(Typography)`
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
  .title-box__text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #222222;
  }
  .name-box_text {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
  }
  .date-box_text {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #7a7a7a;
  }
  .tag__choice {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #7a7a7a;
  }
  .coin-dollar {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #f9c41f;
    margin-right: 2px;
  }
  .name-box__text-color {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #222222;
  }
  .content-social__text {
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #222222;
  }
  .footer-social__text {
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;
    color: #4e4e4e;
  }
  .comment__write {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    color: #4e4e4e;
    margin-left: 10px;
  }
  .comment__dot {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #4e4e4e;
    margin-bottom: 8px;
  }
  .interested-person-name {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #222222;
    margin-bottom: 8px;
  }
  .interested-person-text {
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #7a7a7a;
  }
`;

export const DivWrap = styled(props => <div {...props} />)`
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

export const SearchWrap = styled(Input)`
  gap: 5px;
  border: 1px solid #e9e9e9;
  border-radius: 12px;
  background: #ffffff;
  margin-bottom: 8px;
  height: 48px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #4e4e4e;
  .ant-input {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #7a7a7a;
  }
`;

export const BoxWrap = styled.div`
  border: 1px solid #e9e9e9;
  border-radius: 12px;
  background: #ffffff;
  width: 100%;
  height: auto;
  padding: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #222222;
  margin-bottom: 12px;
`;

export const ButtonConnect = styled(Button)`
  background: #ffffff;
  border: 1px solid #e0ab06;
  border-radius: 100px;
  width: 100%;
  height: 32px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #e0ab06;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColWrap = styled(Col)`
  background: #ffffff;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  text-align: center;
  padding: 10px;
`;

export const DividerVertical = styled(Divider)`
  .ant-divider {
    margin-left: 0px !important;
    padding-right: 0px !important;
  }
  .ant-divider-vertical {
    padding-left: 0px !important;
    margin-right: 0px !important;
  }
`;

export const ContentInImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .prev-button {
    position: absolute;
    top: 50%;
    bottom: 0%;
    left: -1.5%;
  }
  .next-button {
    position: absolute;
    top: 50%;
    bottom: 0%;
    right: 0%;
    left: 97.5%;
  }
`;

export const ButtonMenu = styled(Button)`
  display: flex;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #4e4e4e;
  background: #ffffff !important;
  border: none;
  gap: 12px;
  padding: 20px;
  margin: 5px 5px 10px 0px;
  width: 100%;
  align-items: center;
  border-radius: 8px;
`;
