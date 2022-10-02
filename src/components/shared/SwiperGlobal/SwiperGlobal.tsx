// Import Swiper styles

import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Image } from 'antd';
import { ImageHome } from '../../pages/Search/Search.style';

interface SwipperSlice {
  arrayImage: any[];
  width: string;
  height: string;
  hidden?: boolean;
}

const SwiperGlobal: FC<SwipperSlice> = ({ arrayImage, width, height, hidden }) => {
  return (
   <>{!hidden ? (
    <Swiper
    cssMode={true}
    navigation={true}
    pagination={{
      dynamicBullets: true,
    }}
    mousewheel={true}
    keyboard={true}
    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
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
   ) : (
    <Swiper
    cssMode={true}
    navigation={true}
    mousewheel={true}
    keyboard={true}
    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
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
   )}</>
  );
};

export default SwiperGlobal;
