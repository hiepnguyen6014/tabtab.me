import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Carousel } from 'antd';
import { Swiper } from 'swiper/react';

export const ImageAttach = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  img {
    object-fit: cover;
  }
  @media ${device.maxMd} {
    img {
      height: 200px !important;
    }
  }
`;

export const SwiperWrap = styled(Swiper)`
  .ant-image {
    height: 100% !important;
  }
`;

export const ImageNumber = styled.div`
  position: absolute;
  width: 70px;
  z-index: 99;
  cursor: pointer;
  bottom: 20px;
  right: 20px;
  background: rgba(34, 34, 34, 0.8);
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
  border-radius: 2px;
  color: #fff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 5px;
  svg > path {
    fill: #fff;
  }
`;
