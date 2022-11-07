// Import Swiper styles

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { BoxWrapper, ImageHome, ImageHomeRow } from './SwipperGlobal';
// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { NextArrow, PrevArrow } from 'public/icons';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SwipperSlice {
  arrayImage: any[];
  width?: string;
  height?: string;
  imageRow?: boolean;
}

const SwiperGlobal: FC<SwipperSlice> = ({
  arrayImage,
  width,
  height,
  imageRow,
}) => {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  return (
    <>
      {imageRow ? (
        <BoxWrapper>
          <button className="btn-prev" ref={prevRef}>
            <PrevArrow />
          </button>
          <button className="btn-next" ref={nextRef}>
            <NextArrow />
          </button>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            className="mySwiperRow"
          >
            {arrayImage.map((image) => (
              <SwiperSlide key={image.id}>
                <ImageHomeRow
                  width={width}
                  height={height}
                  preview={false}
                  src={image.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </BoxWrapper>
      ) : (
        <BoxWrapper>
          <button className="btn-prev" ref={prevRef}>
            <PrevArrow />
          </button>
          <button className="btn-next" ref={nextRef}>
            <NextArrow />
          </button>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            className="mySwiper"
          >
            {arrayImage.map((image) => (
              <SwiperSlide key={image.id}>
                <ImageHome
                  width={width}
                  height={height}
                  preview={false}
                  src={image.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </BoxWrapper>
      )}
    </>
  );
};

export default SwiperGlobal;
