import ThumbnailCard from '@root/public/static/images-recommend.png';
import ThumbnailCard2 from '@root/public/static/thumbnail2.png';
import {
  Avatar,
  Breadcrumb,
  Button,
  Checkbox,
  Col,
  Divider,
  Dropdown,
  Form,
  Input,
  Menu,
  Radio,
  Row,
  Typography,
  notification,
} from 'antd';
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
import { useTranslation } from 'react-i18next';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CardThumbnail } from '../../Home/Recommend/Recommend.style';
import {
  ContentInItem,
  ContentInItemPost,
  DetailItem,
  PostContent,
  PostMiddle,
  PostMiddleFooter,
  PostThumbnailWrapper,
  PostTitle,
  PostWrapper,
  TypographyText,
  Vip1Image,
} from '../AddListing.style';

const { Title, Text } = Typography;
type Props = {
  breadcrumb: any;
  InnerContentRight?: any;
};

const Vip1 = () => {
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
    <PostWrapper>
      <PostThumbnailWrapper>
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
                  <div>
                    <Image src={item.src} alt="recomend-image" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </CardThumbnail>
      </PostThumbnailWrapper>
      <PostContent>
        <TypographyText>
          <PostTitle>
            <Row>
              <Col sm={18}>
                <Typography.Title className="price">
                  3.000.000$
                </Typography.Title>
                <Typography.Title
                  className="wasPrice"
                  style={{ marginTop: '-13px' }}
                >
                  was 4.500.000$ • 400$/m²
                </Typography.Title>
              </Col>
              <Col sm={6}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Avatar
                    style={{ borderRadius: '50%', width: 61, height: 61 }}
                    alt="userAvatar"
                    // src={'@root/public/static/preson6.png'}
                  />
                </div>
              </Col>
            </Row>
            <div>
              <Typography.Title
                className="detailPost"
                style={{ overflow: 'clip' }}
              >
                Sir Francis Drake Blvd. Retail /Office 312
              </Typography.Title>
              <Typography.Title
                className="addressPost"
                style={{ marginTop: '0px' }}
              >
                23 Willow Way, Bletchley, USA
              </Typography.Title>
            </div>
          </PostTitle>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 10px',
            }}
          >
            {detailItemList.map(item => (
              <div className="item" key={item.id}>
                <span>{item.icon}</span>
                <span
                  className="item-content"
                  style={{ marginLeft: '5px', marginTop: '4px' }}
                >
                  {item.content}
                </span>
              </div>
            ))}
          </div>
          <Divider style={{ marginTop: '5px', marginBottom: '7px' }} />
          <PostMiddle className="wrap-post">
            <PostMiddleFooter>
              {
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <VectorCalendar />
                  <Typography.Text className="textPostMiddle">
                    15 giờ trước
                  </Typography.Text>
                </span>
              }
            </PostMiddleFooter>

            <PostMiddleFooter>
              {
                <>
                  <a
                    style={{
                      borderRadius: '6px',
                      display: 'flex',

                      alignItems: 'center',
                      background: '#F9C41F',
                      padding: '7px 12px',
                    }}
                  >
                    <VectorTalk />
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: '600',
                        fontFamily: 'Inter',

                        marginLeft: 10,
                      }}
                    >
                      CHAT NOW
                    </span>
                  </a>
                </>
              }
            </PostMiddleFooter>
          </PostMiddle>
        </TypographyText>
      </PostContent>
    </PostWrapper>
  );
};

export default Vip1;
