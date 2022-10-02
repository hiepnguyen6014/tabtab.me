// Import Swiper styles

import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Image } from 'antd';

interface SwipperSlice {
  arrayImage: any[];
  width:string;
  height:string;
}

const SwiperGlobal: FC<SwipperSlice> = ({ arrayImage, width, height }) => {
  return (
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
          <Image
            width={width}
            height={height}
            preview={false}
            src={image.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperGlobal;
