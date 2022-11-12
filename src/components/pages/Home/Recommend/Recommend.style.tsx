import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { Button, Col, Image, Radio, Row, Typography } from 'antd';

// PROJECT, AGENCY
export const Wrapper = styled(props => <div {...props} />)`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;

  height: auto;
  /* min-width: 280px; */
  width: 282px;
  height: 484px;
  max-width: 100%;
  margin-top: 20px;
  border-radius: 6px;
  background-color: #fff;
  border: 2px solid #f0f0f0;
  overflow: hidden;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  /* transition: all.2s ease; */
  cursor: pointer;

  @media ${device.maxLg} {
    /* height: 500px;  
    width: 100%; */
  }
  @media ${device.minSm} {
    &:hover {
      transform: scale(1.05);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 25px,
        rgba(0, 0, 0, 0.1) 0px 6px 6px;
    }
  }
  @media ${device.maxSm} {
    height: auto;
    width: 100%;
  }
`;

export const CardThumbnail = styled.div`
  position: relative;

  .sale-off {
    position: absolute;
    top: 12px;
    left: 8px;
    z-index: 9;

    color: #000000;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    padding: 2px 8px;
  }
  .icon-favorite {
    position: absolute;
    top: 12px;
    right: 8px;
    z-index: 9;
  }

  .btn-prev {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    z-index: 9;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #ffffff;
    border-radius: 50%;
    border: none;
  }
  .btn-next {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    z-index: 9;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #ffffff;
    border-radius: 50%;
    border: none;
  }

  .btn-next.swiper-button-disabled {
    display: none;
  }
  .btn-prev.swiper-button-disabled {
    display: none;
  }

  .swiper-pagination {
    display: block;
  }
  .swiper .swiper-pagination-bullet {
    background-color: rgba(254, 255, 255, 0.8);
    transition: all 0.3s;
    margin-bottom: 10px;
  }
  .swiper .swiper-pagination-bullet.swiper-pagination-bullet-active-prev-prev,
  .swiper .swiper-pagination-bullet.swiper-pagination-bullet-active-next-next {
    transform: scale(0.6) !important;
  }

  .swiper .swiper-pagination-bullet.swiper-pagination-bullet-active-prev,
  .swiper .swiper-pagination-bullet.swiper-pagination-bullet-active-next {
    transform: scale(0.8) !important;
  }

  .swiper .swiper-pagination-bullet.swiper-pagination-bullet-active-main {
    background-color: #feffff;
  }
`;

export const ImageWapper = styled.div`
  img {
    width: 282px !important;
    height: 188px !important;
  }
  @media ${device.maxSm} {
    img {
      width: 342px !important;
      height: 228px !important;
    }
  }
`;

export const PostContent = styled.div`
  padding: 10px 12px 14px;
  height: 100%;
`;

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  .now-price {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;

    color: #ff8800;
  }
  .was-price {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: line-through;

    color: #7a7a7a;
  }
`;

export const CardTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #222222;

  .sub-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #7a7a7a;

    margin-top: 10px;
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 64px;
      height: 1px;
      background: #e9e9e9;
      bottom: -12px;

      position: absolute;
    }
  }
`;

export const DetailItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  margin-top: 24px;
  .item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0;
  }
  .item:nth-of-type(2) {
    margin-left: -11px;
  }
  .item:nth-of-type(5) {
    margin-left: -11px;
  }
  .item:nth-of-type(3) {
    margin-left: -25px;
  }
  .item:nth-of-type(6) {
    margin-left: -25px;
  }
  .item-content {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #4e4e4e;
    margin-left: 10px;
  }
`;

export const CardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9c41f;
  border-radius: 6px;
  padding: 8px 12px;
  border: none;
  & > svg {
    margin-right: 10px;
  }
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .time {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }
  .time > div {
    margin-left: 10px;
  }
`;
