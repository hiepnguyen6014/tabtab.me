import { Global, css } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
      html {
        font-size: 1rem;
      }

      body {
        font-size: 0.875rem;
        line-height: 1.5;
        overflow-x: hidden;
      }
      .swiper-button-prev {
        width:24px !important;
        height:24px !important;
        background: #FFFFFF !important;
        border-radius: 50% !important;
      }
      .swiper-button-prev::after {
        font-size: 12px !important;
        color:#141414 !important;
        font-weight: 600; !important;
      }
      .swiper-button-next {
        width:24px !important;
        height:24px !important;
        background: #FFFFFF !important;
        border-radius: 50% !important;
      }
      .swiper-button-next::after {
        font-size: 12px !important;
        color:#141414 !important;
        font-weight: 600; !important;
      }
      .swiper-pagination-bullet {
        background: rgba(254, 255, 255, 0.8) !important;
      .swiper-pagination-bullet-active {
        background-color: #fff !important;
   }
    `}
  />
);
