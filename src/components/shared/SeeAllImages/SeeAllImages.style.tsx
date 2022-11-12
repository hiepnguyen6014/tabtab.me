import { IconArrowDown } from '@root/public/icons';
import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { Carousel, Modal } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ModalWrap = styled(Modal)`
  width: 100% !important;
  .ant-modal-content {
    position: relative;
    background: transparent;
    box-shadow: none;
    overflow: hidden;
    [aria-label='Close'] {
      transition: 0.3s ease;
      svg {
        transform: scale(1.2);
        & > path {
          fill: #fff;
        }
      }
      &:hover {
        transform: rotate(180deg);
      }
    }
  }
  .ant-modal-body {
    height: 100vh !important;
    margin: auto;
  }
  .ant-modal-footer {
    display: none;
  }
  @media ${device.maxSm} {
    width: 100% !important;
  }
`;

export const SwiperWrap = styled(Swiper)`
  height: 75%;
  width: 100%;
  text-align: center;
  .swiper-button-prev,.swiper-button-next{
    position:absolute;
    top:50%;
    z-index:9;
  }
  .swiper-button-prev{
    left:0%;
  }
  .swiper-button-next{
    right:0%;
  }

  .swiper-slide {
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
`;

export const ContentSwiperMini = styled.div`
  height:25%;
  margin-top:15px;
  background:black;
  position:relative;
  padding:5px 10px;
  border-radius:5px;
`
export const ActionInContent = styled.div`
  height:20%;
  display:flex;
  align-items:center;
  gap:10px;
  color:#fff;
`

export const SwiperWrapMini = styled(Swiper)`
  height: 80%;
  box-sizing: border-box;
  padding: 10px 0;
  .swiper-slide {
    width: 25%;
    height: 100%;
    cursor: pointer;
    user-select: none;
    border-radius: 5px;
    overflow: hidden;
    border: 2px solid transparent;
    transition:all 0.3s ease;
    
  }
  .swiper-slide-thumb-active {
    opacity: 1;
    border: 2px solid ${colors.common};
    img {
      transform: scale(1.2);
    }
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media ${device.maxSm}{
    .swiper-slide{
      width:50% !important;
    }
  }
`;

