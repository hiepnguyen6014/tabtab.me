import { Button, Col, Divider, Row, Skeleton, Typography } from 'antd';
import React, { useState } from 'react';

import {
  VectorBuilding,
  VectorCalendar,
  VectorDirection,
  VectorHouse,
  VectorSquare,
  VectorTalk,
  VectorTree,
  VectorUser,
  Favorited,
  SFavorite,
  NextArrow,
  PrevArrow,
} from 'public/icons';
import { ItemWrapper } from './PostItem/PostItemWrapper';
import { PostThumbnail } from './PostItem/PostComponent/PostThumbnail';
import {
  PostContent,
  PostMiddle,
  PostMiddleItem,
  PostTitle,
  PostMiddleFooter,
  TypographyText,
  Wrapper,
  Prices,
  DetailItem,
  CardTitle,
  CardBottom,
  CardButton,
  CardThumbnail,
} from './Recommend.style';
import { SRC_IMAGE } from '@core';
import { formatNumToUnit } from '@root/src/core/utils/HandleNumber';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants';
import TenXLogo from '@root/public/static/Ten-X-Logo.png';
import ThumbnailCard from '@root/public/static/images-recommend.png';
import ThumbnailCard2 from '@root/public/static/thumbnail2.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface PostItem {
  price?: string;
  wasPrice?: string;
  title?: string;
}

export function RecommendItem(props: PostItem) {
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
      <Wrapper>
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
          >
            {imageSrc.map((item, idx) => {
              return (
                <SwiperSlide key={item.id}>
                  <Image src={item.src} alt="" width={282} height={188} />
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* <Image src={imageSrc[1].src} alt="" width={282} height={188} /> */}
        </CardThumbnail>

        <PostContent>
          <Prices>
            <div>
              <div className="now-price">{props.price}</div>
              <div className="was-price">was {props.wasPrice} </div>
            </div>
            <div>
              <Image src={TenXLogo} width={76} height={24} />
            </div>
          </Prices>
          <CardTitle>
            <div>{props.title}</div>
            <div className="sub-title">23 Willow Way, Bletchley, USA</div>
          </CardTitle>

          <DetailItem>
            {detailItemList.map((item) => (
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
              <div className="chat">Chat now</div>
            </CardButton>
          </CardBottom>
        </PostContent>
      </Wrapper>
    </>
  );
}
