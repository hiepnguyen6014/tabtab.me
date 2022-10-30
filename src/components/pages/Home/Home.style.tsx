import { Button, Carousel, Col, Image, Row, Typography } from 'antd';

import { device } from '@styles/theme/device';
import { styled } from '@styles/theme';

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  margin-bottom: 60px;
`

export const BannerWrapper = styled.div`
  height: 600px;
  margin-bottom: 81px;
  position: relative;
  width: 100%;
  
  .ant-carousel {
    height: 100%;
    .slick-slider, .slick-list, .slick-track {
      height: 100%;
      .slick-slide, .slick-slide > div {
        height: 100%;
      }
    }
    .ant-image {
      height: 100%;
      width: 100%;
    }
  }

  @media ${device.maxSm} {
    height: 447px;
  }

  @media ${device.maxSm} {
    .ant-carousel .slick-slider {
      position: static;
    }
    .ant-carousel .slick-dots {
      justify-content: center;
      margin: auto;
      bottom: 10px;
    }
  }
`;

export const BackgroundGradient = styled.div`
  background: linear-gradient(180deg, #000 0%, transparent 100%);
  height: 101px;
  left: 0;
  opacity: 0.4;
  top: 0;
  position: absolute;
  width: 100%;
`

export const BannerImage = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ContentInBanner = styled.div`
  left: 50%;
  max-width: 1300px;
  padding: 0 152px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  
  .ant-typography {
    color: #fff;
    font-weight: 700;
    width: 498px;
  }
  h1 {
    font-size: 64px;
    margin-bottom: 12px;
    line-height: 1.2;
  }
  span {
    display: block;
    font-size: 16px;
  }

  @media ${device.maxSm} {
    display: flex;
    justify-content: center;
  }
`;

export const SearchWrapper = styled.div`
  bottom: 0;
  left: 50%;
  position: absolute;
  transform: translate(-50%, 50%);
`

export const ButtonShowAll = styled(Button)`
  height: 40px;
  min-width: 100px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.maxSm} {
    display: none;
  }
`;
export const ButtonShowAllMobile = styled(ButtonShowAll)`
  display: none;
  margin-top: 15px;
  text-align: center;
  @media ${device.maxSm} {
    display: block;
  }
`;

export const RowWithAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSpotLight = styled.div`
  width: 70%;
  .padTop {
    padding-top: 20px;
  }
  @media ${device.maxSm} {
    width: 100%;
  }
`;

export const RightSpotLight = styled.div`
  width: 30%;
  .padView {
    padding: 15px;
  }
  @media ${device.maxMd} {
    display: none;
  }
`;

export const BannerSpotWrapper = styled.div`
  max-height: 100%;
  min-height: 453px;
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

export const WrapperSpot = styled.div`
  display: block;
  width: 100%;
  margin: auto;
  min-height: auto;
  text-align: center;
  max-width: 1200px;
  position: relative;
  .shadowA {
    background: #ffffff;
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.16);
    border-radius: 8px;
    padding: 12px 12px 15px 12px;

    &:hover {
      transform: scale(1.05);
    }
  }
  .horizotalLine {
    background: #f9c41f;
    width: 100%;
    height: 8px;
  }
  .vertical-line {
    border: 1px solid #e9e9e9;
    width: 100%;
  }

  .right > :nth-last-child(1) .vertical-line {
    display: none;
  }
  .container {
    padding: 25px 20px 35px;
  }

  .swiper-pagination {
    display: none;
  }

  /* @media ${device.maxMd} {
    margin: 15px;
    min-height: 250px;
  } */

  @media ${device.maxSm} {
    padding: 16px;
    min-height: 550px;

    .swiper-pagination-bullet-active {
      background: black;
      transition: all 0.3s;
    }
    .swiper-pagination {
      display: block;
      bottom: 0px !important;
    }
  }
`;

export const ViewWrap = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  height: 70px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  position: relative;
  @media ${device.maxMd} {
    min-height: 250px;
  }
`;

export const ColWrap = styled(Col)`
  /* background: linear-gradient(180deg, rgba(245, 245, 245, 0) 0%, #f5f5f5 100%); */
  .flex-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrap-text {
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.maxMd} {
      min-height: 200px;
    }
    @media ${device.maxSm} {
      min-height: 150px;
    }
  }
  .circle-wrap {
    position: relative;
    object-fit: contain;
    object-position: cover;
    @media ${device.maxSm} {
      min-height: 50px;
      width: 60%;
      height: 50%;
    }
  }
  .image-wrap {
    position: absolute;
    object-fit: cover;
    @media ${device.maxSm} {
      min-height: 50px;
      width: 60%;
      height: 40%;
    }
  }
  @media ${device.maxSm} {
    margin-bottom: 30px;
  }
`;

export const TextWrap = styled(Typography)`
  margin: 20px;
  text-align: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: clip;
  .text-opinion {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    margin-bottom: 35px;
    @media ${device.maxLg} {
      font-weight: 700;
      font-size: 13px;
      line-height: 17px;
      margin-top: 20px;
      margin-bottom: 25px;
    }
    @media ${device.maxMd} {
      font-weight: 700;
      font-size: 13px;
      line-height: 17px;
      margin-top: 20px;
      margin-bottom: 0px;
    }
  }
  .text-name {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #4e4e4e;
    @media ${device.maxLg} {
      font-weight: 700;
      font-size: 13px;
      line-height: 17px;
    }
  }
  .text-role {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 15px;
    margin-top: -10px;
    @media ${device.maxLg} {
      font-weight: 400;
      font-size: 11px;
      line-height: 13px;
    }
  }
  .text-company {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: -7px;
    @media ${device.maxLg} {
      font-weight: 700;
      font-size: 12px;
      line-height: 13px;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: -4px;
    }
  }
  .title-custom {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const VerticalLine = styled.div`
  border-left: 2px solid #f9c41f;
  height: 32px;
`;

export const AdWordsWrap = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  text-align: center;
`;

export const ItemPostWrap = styled.div`
  min-height: 500px;
  border-radius: 6px;
  margin-top: 20px;
`;

export const SpotlightText = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  text-align: start;
  .titlePostSpot {
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    text-transform: uppercase;
    color: #33a7e2;
    @media ${device.maxMd} {
      font-size: 17px;
      line-height: 21px;
    }
  }
  .contentPostSpot {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    color: #222222;
    margin: 6px 0px 0px 0px !important;

    @media ${device.maxMd} {
      font-size: 18px;
      line-height: 24px;
    }
  }
  .timePostSpot {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    margin-left: 10px;
    color: #7a7a7a;
    margin-bottom: 2px !important;
    @media ${device.maxMd} {
      font-size: 16px;
      line-height: 19px;
    }
  }
  .userPostSpot {
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    color: #222222;
    @media ${device.maxMd} {
      font-size: 17px;
      line-height: 21px;
    }
  }
  .detailPostSpot {
    font-size: 16px;
    line-height: 20px;
    color: #222222;
    font-weight: 700;
    margin-top: 15px;
  }
  .optionPostSpot {
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #222222;
  }
  .bannerText {
    font-weight: 700;
    width: 50%;
    font-size: 64px;
    line-height: 77px;
    color: #ffffff;
    @media ${device.maxMd} {
      font-size: 30px;
      line-height: 37px;
    }
    @media ${device.maxSm} {
      font-size: 40px;
      line-height: 48px;
      width: 100%;
    }
  }
  .bannerSmallText {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    @media ${device.maxMd} {
      font-size: 30px;
      line-height: 37px;
    }
    @media ${device.maxSm} {
      font-size: 16px;
      line-height: 19px;
      padding-bottom: 20px;
    }
  }
  .dateBanner {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #ffffff;
    @media ${device.maxMd} {
      font-size: 8px;
      line-height: 10px;
    }
  }
  .nameBanner {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    @media ${device.maxMd} {
      font-size: 9px;
      line-height: 11px;
    }
  }
  .titleBannerTop {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-right: 50px;
    color: rgba(254, 255, 255, 0.6);
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
    margin-left: 30px;
    margin-top: 10px;
    @media ${device.maxMd} {
      font-size: 14px;
      line-height: 17px;
    }
  }
  .titleBannerMiddle {
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #ffffff;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
    margin-left: 30px;
    margin-top: 10px;
    @media ${device.maxMd} {
      font-size: 32px;
      line-height: 36px;
    }
  }
  .titleBannerBottom {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-left: 30px;
    margin-top: 10px;
    color: #ffffff;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
    @media ${device.maxMd} {
      font-size: 14px;
      line-height: 17px;
      margin-top: 100px;
    }
  }
  .date-upcoming {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #222222;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .add-calendar {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    /* color: #222222; */
    margin-left: 4px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const ItemPostSpot = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

export const ItemUpcoming = styled.div`
  text-align: start;
  .button-calendar {
    display: flex;
    margin-top: 10px;
    margin-bottom: 17px;
  }
  @media ${device.maxSm} {
  }
`;

export const LeftPostSpot = styled.div`
  width: 60%;
  .padTop {
    padding-top: 20px;
  }
`;

export const RightPostSpot = styled.div`
  width: 40%;
  .padView {
    padding: 15px;
  }
`;

export const ArticleWrap = styled.article`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 16px;
  &:hover {
    transform: scale(1.05);
  }
  @media ${device.maxSm} {
    min-height: 228px;
  }
`;

export const BannerWrap = styled.article`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .bookmark {
    position: absolute;
    top: 32px;
    right: 32px;
    z-index: 9;
  }
  @media ${device.maxSm} {
    min-height: 453px;
  }
`;

export const ImageWrap = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
  @media ${device.maxSm} {
    min-height: 228px;
    object-fit: cover;
  }
`;

export const ImageBannerWrap = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
  @media ${device.maxSm} {
    min-height: 453px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const TypographyWrap = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin-left: 5px;
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
  .info-calendar {
    position: absolute;
    margin: auto;
    text-align: start;
    margin-bottom: -20px;
    margin-left: -20px;
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

export const ButtonUpComing = styled(Button)`
  width: 100%;
  background: rgba(249, 196, 31, 0.1);
  border: 1px solid #f9c41f;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  @media ${device.maxSm} {
    padding: 7px 25px;
    background: rgba(249, 196, 31, 0.1);
    border: 1.20513px solid #f9c41f;
    border-radius: 9.64103px;
  }
`;

export const HubSlide = styled.div`
  background: #1c2d49;
  border-radius: 8px;
  .top-hub {
    padding-top: 20px;
  }
  .divider {
    width: 38px;
    height: 4px;
    display: inline-flex;
    justify-self: center;
    background: #f9c41f;
    border-radius: 19px;
    margin-bottom: 10px;
  }
  .divider-hub {
    width: 90%;
    height: 1px;
    opacity: 0.21;
    border: 1px solid #ffffff;
  }
`;

export const HubText = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  .top-text {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    color: #ffffff;
    margin-bottom: 0px;
  }
  .mid-text-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    text-align: start;
    margin-left: 5px;
  }
  .mid-text-content {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(254, 255, 255, 0.6);
    text-align: start;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
  }
`;

export const ColA = styled(Col)`
  width: 100%;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  @media ${device.maxSm} {
    padding-bottom: 20px;
  }
`;

//Title home Upcoming, Spotlight, ...

export const GeneralWrap = styled.div`
  width: 100%;
  margin-bottom: 5px;
  .general-between-wrap {
    display: flex;
    justify-content: space-between;
  }
  .general-wrap {
    display: flex;
  }
`;

export const GeneralText = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  margin: 0px 0px 10px 0px;
  .title-general {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 700;
    font-size: 32px;
    text-align: left;
    line-height: 36px;
    color: #222222;

    .title-hide {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      text-transform: uppercase;
      color: #7a7a7a;
    }

    @media ${device.maxSm} {
      font-size: 24px;
      line-height: 32px;
    }

    @media ${device.minSm} {
      display: block;

      .title-hide {
        display: none;
      }
    }
  }
  .content-general {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #7a7a7a;
    @media ${device.maxSm} {
      font-size: 14px;
      line-height: 17px;
    }
  }
  .content-hide {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #7a7a7a;
    @media ${device.maxSm} {
      /* font-size: 16px;
      line-height: 20px; */
      display: none;
    }
  }
`;

export const ButtonViewAll = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 28px;

  border: 0.7px solid #d3d3d3;
  border-radius: 100px;
  background: white;

  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
`;

//Recommend

export const WrapperContent = styled.div`
  font-family: 'Inter';
  font-style: normal;
  text-align: start;
  .linkShowPost {
    margin-left: 30px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #000000;
  }
  .container {
    padding-bottom: 20px;
  }
  .swiper-pagination-bullet-active {
    background: black;
    transition: all 0.3s;
  }
  .swiper-pagination {
    bottom: 0px !important;
  }

  .swiper .swiper-pagination-bullet.swiper-pagination-bullet-active-prev-prev,
  .swiper .swiper-pagination-bullet.swiper-pagination-bullet-active-next-next {
    transform: scale(0.6) !important;
  }

  .swiper .swiper-pagination-bullet.swiper-pagination-bullet-active-prev,
  .swiper .swiper-pagination-bullet.swiper-pagination-bullet-active-next {
    transform: scale(0.8) !important;
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-active-main {
    background-color: black;
  }

  @media ${device.minSm} {
    .swiper-pagination {
      display: none;
    }
  }
  @media ${device.maxSm} {
    .linkShowPost {
      display: none;
    }
  }
`;
export const ButtonTag = styled.button<any>`
  border-radius: 100px;
  border: none;
  background-color: ${(props) => (props.active ? '#222222' : 'white')};
  color: ${(props) => (props.active ? 'white' : '#4E4E4E')};
  padding: 8px 20px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-right: 5px;

  @media ${device.maxSm} {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    padding: 7px 18px;
  }
`;

export const ButtonNav = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #e9e9e9;
  border-radius: 50%;
  background: white;

  display: flex;
  justify-content: center;
  align-items: center;

  & > svg > path {
    stroke-width: 1px;
  }

  @media ${device.maxSm} {
    display: none;
  }
`;

export const AllItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
