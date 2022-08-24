import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Typography } from 'antd';

export const SocialBigWrap = styled.div`
  display: block;
  width: 100%;
  margin: auto;
  min-height: auto;
  margin-top: 30px;
  text-align: center;
  position: relative;
  background: #f0f2f5;
  @media ${device.maxMd} {
    margin: 15px;
    min-height: 250px;
  }
  @media ${device.maxSm} {
    margin: 25px;
    min-height: 100px;
  }
`;

export const SocialWrap = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1200px;
  position: relative;
  overflow: unset;
  min-height: 500px;
  /* .height-50 {
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
  } */
  .horizontal-line {
    width: 100%;
    border: 1px solid #e9e9e9;
    margin: 20px 0px 10px 0px;
  }
  /* .cirle-nav {
    border: 1px solid #ff8800;
    border-radius: 50%;
    width: 28px;
    height: 28px;
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
  } */
  .img-first {
    z-index: 1;
    display: flex;
    justify-content: end;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 15%;
  }
  .img-second {
    z-index: 2;
    top: 15%;
    bottom: 0;
    left: 75%;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .img-third {
    z-index: 3;
    top: 15%;
    bottom: 0;
    left: 65%;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .box-category {
    background: #ffffff;
    border: 1px solid #e9e9e9;
    border-radius: 12px;
    box-sizing: border-box;
  }
  .button-connect {
    background: #ffffff;
    border: 1px solid #e0ab06;
    border-radius: 100px;
  }

  @media ${device.maxMd} {
    min-height: 250px;
  }
  @media ${device.maxSm} {
    width: 100%;
  }
`;

export const SocialText = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  text-align: start;
  .category-social {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #222222;
  }
  .category-post {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #7a7a7a;
  }
  .name-person {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
  }
  .role-person {
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #7a7a7a;
  }
  .coin-person {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #f9c41f;
  }
  .connect {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #e0ab06;
  }
  .name-center {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #222222;
  }
  .content-center {
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #222222;
  }
  .icon-center {
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;
    color: #4e4e4e;
  }
  .date-time {
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #7a7a7a;
  }
`;
