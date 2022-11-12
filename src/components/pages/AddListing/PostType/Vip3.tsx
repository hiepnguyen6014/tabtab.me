import ThumbnailCard from '@root/public/static/images-recommend.png';
import ThumbnailCard2 from '@root/public/static/thumbnail2.png';
import { Avatar, Divider } from 'antd';
import Image from 'next/image';
import {
  NextArrow,
  PrevArrow,
  SFavorite,
  VectorBuilding,
  VectorCalendar,
  VectorDirection,
  VectorHouse,
  VectorSquare,
  VectorTalk,
  VectorTree,
  VectorUser,
} from 'public/icons';
import React from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  CardBottom,
  CardButton,
  CardThumbnail,
  CardTitle,
  DetailItem,
  ImageWapper,
  PostContent,
  Prices,
  Wrapper,
} from '../../Home/Recommend/Recommend.style';
import { Vip3Wrapper } from '../AddListing.style';

const Vip3 = () => {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  const detailItemList = [
    { id: 1, icon: <VectorSquare />, content: '72m²' },
    { id: 2, icon: <VectorTree />, content: '---' },
    { id: 3, icon: <VectorUser />, content: 'Chính chủ' },
    { id: 4, icon: <VectorHouse />, content: '4m' },
    { id: 5, icon: <VectorDirection />, content: 'West' },
    { id: 6, icon: <VectorBuilding />, content: 'Chung cư' },
  ];

  const imageSrc = [
    { src: ThumbnailCard, id: 1 },
    { src: ThumbnailCard2, id: 2 },
    { src: ThumbnailCard, id: 3 },
    { src: ThumbnailCard2, id: 4 },
  ];

  return (
    <>
      <Vip3Wrapper>
        <CardThumbnail>
          <div className="sale-off">sale 15% off</div>
          <button className="btn-prev" ref={prevRef}>
            <PrevArrow />
          </button>
          <button className="btn-next" ref={nextRef}>
            <NextArrow />
          </button>
          <div className="icon-favorite">
            <SFavorite />
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ dynamicBullets: true }}
            draggable
            spaceBetween={10}
            slidesPerGroup={1}
            speed={750}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="swiper-img"
          >
            {imageSrc.map((item, idx) => {
              return (
                <SwiperSlide key={item.id}>
                  <ImageWapper>
                    <Image src={item.src} alt="recomend-image" />
                  </ImageWapper>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </CardThumbnail>

        <PostContent>
          <Prices>
            <div>
              <div className="now-price"> 3.000.000$</div>
              <div className="was-price"> was 4.500.000$ • 400$/m²</div>
            </div>
            <Avatar style={{ width: '46px', height: '46px' }} />
          </Prices>
          <CardTitle>
            <div> Sir Francis Drake Blvd. Retail /Office 312</div>
            <div className="sub-title">23 Willow Way, Bletchley, USA</div>
          </CardTitle>

          <DetailItem>
            {detailItemList.map(item => (
              <div className="item" key={item.id}>
                {item.icon}
                <div className="item-content">{item.content}</div>
              </div>
            ))}
          </DetailItem>

          <Divider style={{ marginTop: '16px', marginBottom: '12px' }} />

          <CardBottom>
            <div className="time">
              <VectorCalendar />
              <div>15 giờ trước</div>
            </div>
            <CardButton>
              <VectorTalk />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  fontFamily: 'Inter',
                }}
              >
                CHAT NOW
              </span>
            </CardButton>
          </CardBottom>
        </PostContent>
      </Vip3Wrapper>
    </>
  );
};
export default Vip3;
