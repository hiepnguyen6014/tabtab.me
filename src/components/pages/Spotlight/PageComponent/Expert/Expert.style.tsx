import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { Divider, Image, Typography } from 'antd';

export const BannerExpertWrap = styled.div`
  max-height: 100%;
  min-height: 553px;
  overflow: hidden;
  width: 100%;
  margin: auto;
  text-align: center;
  object-fit: contain;
  object-position: center;
  position: relative;
  @media ${device.maxMd} {
    min-height: 350px;
  }
  @media ${device.maxSm} {
    min-height: 350px;
    span {
      display: none;
    }
  }
`;

export const BannerWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  @media ${device.maxSm} {
    min-height: 453px;
  }
`;

export const ImageBannerWrap = styled(Image)`
  object-fit: cover;
  border-radius: 5px;
  @media ${device.maxSm} {
    min-height: 453px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const DivWrap = styled.div`
  width: 90%;
  height: 90%;
  .bookmark {
    position: absolute;
    margin: auto;
    margin-top: 10px;
    margin-right: 10px;
    text-align: end;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .info-group {
    position: absolute;
    margin: auto;
    text-align: start;
    margin-bottom: 10px;
    margin-left: 10px;
    top: 100;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .title-post {
    position: absolute;
    margin: auto;
    margin-top: 10px;
    margin-right: 10px;
    text-align: start;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    @media ${device.maxMd} {
    }
  }
`;

export const TextBanner = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  .first-banner__text--style {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: rgba(254, 255, 255, 0.6);
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
    padding-top: 20px;
    padding-left: 30px;
  }
  .second-banner__text--style {
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #ffffff;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
    padding-top: 20px;
    padding-left: 30px;
    width: 560px;
  }
  .third-banner__text--style {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
    padding-top: 20px;
    padding-left: 30px;
    width: 345px;
  }
  .date-banner__text--style {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.16);
    color: #feffff;
    margin-right: 5px;
  }
  .name-banner__text--style {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.16);
  }
`;
