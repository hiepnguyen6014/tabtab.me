import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Typography } from 'antd';

export const XprofileBigWrap = styled.div`
  display: block;
  width: 100%;
  margin: auto;
  min-height: auto;
  margin-top: 30px;
  text-align: center;
  margin-bottom: 50px;
  max-width: 1200px;
  position: relative;
  @media ${device.maxMd} {
    margin: 15px;
    min-height: 250px;
  }
  @media ${device.maxSm} {
    margin: 25px;
  }
`;

export const XprofileWrap = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
  overflow: unset;
  min-height: 400px;
  .height-50 {
    height: 50px;
    width: auto;
  }
  .m-right-23 {
    margin-right: 23px;
  }
  .m-left-24 {
    margin-left: 24px;
  }
  .m-left-16 {
    margin-left: 16px;
  }
  .m-user-box {
    margin-left: 32px;
    margin-top: 24px;
  }
  .m-right-14 {
    margin-right: 14px;
  }
  .horizontal-line {
    width: 100%;
    border: 1px solid #e9e9e9;
    margin: 15px 0px;
  }
  .cirle-nav {
    border: 1px solid #ff8800;
    border-radius: 50%;
    width: 28px;
    height: 28px;
  }
  .margin-X--30 {
    margin-left: 30px;
    margin-right: 30px;
  }
  .img-wrap {
    border-radius: 6px;
    width: 134px;
    height: 83px;
  }
  .user-box {
    background: rgba(255, 136, 0, 0.06);
    border: 1px solid rgba(255, 136, 0, 0.2);
    border-radius: 6px;
    margin-bottom: 8px;
  }
  .hidden-on-small {
    @media ${device.maxLg} {
      display: none;
    }
  }
  @media ${device.maxMd} {
    min-height: 250px;
  }
  @media ${device.maxSm} {
    width: 100%;
  }
`;

export const XprofileText = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  text-align: start;
  .title-header {
    position: absolute;
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    color: #ff8800;
    text-transform: uppercase;
    @media ${device.maxSm} {
      height: 350px;
      width: 100%;
    }
  }
  .title-head {
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    color: #ff8800;
    text-transform: uppercase;
  }
  .category-text {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color: #33a7e2;
  }
  .date-text {
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #7a7a7a;
  }
  .content-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #7a7a7a;
  }
  .title-center {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #222222;
  }
  .title-other-news {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #222222;
  }
  .title-list-news {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #222222;
  }
  .title-outstanding {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #222222;
  }
  .content-other-news {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #222222;
  }
  .content-outstanding {
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
    color: #7a7a7a;
  }
`;
