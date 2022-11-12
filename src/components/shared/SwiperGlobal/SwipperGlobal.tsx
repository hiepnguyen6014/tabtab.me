import styled from '@emotion/styled';
import { device } from '@styles/theme/device';
import { Image } from 'antd';
import { Swiper } from 'swiper/react';

export const BoxWrapper = styled.div`
  position: relative;
  .mySwiper {
    @media ${device.maxSm} {
      height: 175px;
    }
  }
  .mySwiperRow {
    @media ${device.maxSm} {
      max-width: 190px;
      width: 100%;
      height: 220px;
    }
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

export const ImageHome = styled(Image)`
  position: relative;
  object-fit: cover;
  border-radius: 6px 6px 0px 0px;
`;

export const ImageHomeRow = styled(Image)`
  border-radius: 6px 0px 0px 6px;
  position: relative;
  object-fit: center;
`;
