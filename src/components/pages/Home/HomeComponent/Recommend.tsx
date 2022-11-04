import { Row, Typography } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { IconQuotes, PrevArrow, NextArrow } from 'public/icons';
import React, { useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  AllItem,
  ButtonNav,
  ButtonTag,
  GeneralText,
  GeneralWrap,
  WrapperContent,
  WrapperSpot,
  ShowOnMobile,
  HideOnMobile,
  ItemDesktopWrapper,
} from '../Home.style';
import { PostItem, RecommendItem } from '../Recommend';
import { TypographyText } from './PostItem/PostItem.style';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ROUTES } from '@constants';
const RecommendProperty = () => {
  const [limitItems, setLimitItems] = React.useState(12);
  // layout for desktop only 8 products if screen is mobile, product will be 20 posts
  const router = useRouter();
  const handleResize = (e: any) => {
    if (e.target.outerWidth <= 1025 && e.target.outerWidth >= 768) {
      setLimitItems(6); // Tablet will be 6 items on row
    } else if (e.target.outerWidth <= 768) {
      setLimitItems(0); // List scroll
    } else if (e.target.outerWidth > 1024) {
      setLimitItems(8); //
    }
  };
  React.useEffect(() => {
    window.addEventListener('resize', handleResize, true);
    return () => window.removeEventListener('resize', handleResize, true);
  }, []);

  const [showContent, setShowContent] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState(1);

  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);

  const postItem: PostItem = {
    price: '3.000.000$',
    wasPrice: '4.500.000$ ',
    title: 'Sir Francis Drake Blvd. Retail /Office 312 Sir Francis Drake',
  };

  const listPost: PostItem[] = Array(8).fill(postItem);

  const handleBtnClick = (id: number) => {
    setActive(id);
  };
  const hanldeShowAll = () => {
    setShowAll(showAll ? false : true);
  };

  return (
    <WrapperSpot>
      <GeneralText>
        <Typography.Title
          className="title-general"
          // style={{ fontSize: fontSize ? fontSize : '' }}
        >
          Recommend Property
          <Typography.Text className="title-hide">HIDE</Typography.Text>
        </Typography.Title>
        <GeneralWrap>
          <div className="general-between-wrap">
            <div className="general-wrap">
              <IconQuotes />
              <Typography.Title className="content-general">
                Bất động sản đề xuất cho anh/chị [display name]
              </Typography.Title>
            </div>
            <div
              onClick={(e) => setShowContent(showContent ? false : true)}
              style={{ cursor: 'pointer' }}
            >
              <Typography.Text className="content-hide">HIDE</Typography.Text>
            </div>
          </div>
        </GeneralWrap>
      </GeneralText>
      {showContent && (
        <WrapperContent>
          <HideOnMobile>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              {listPost.map((item, idx) => {
                return (
                  <div key={idx} >
                    <RecommendItem {...item} />
                  </div>
                );
              })}
            </div>
          </HideOnMobile>
          <ShowOnMobile>
            <div>
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                draggable
                spaceBetween={40}
                speed={750}
                grabCursor
                pagination={{ dynamicBullets: true }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                breakpoints={{
                  '1024': {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 50,
                  },

                  '1280': {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 24,
                  },
                }}
                style={{paddingBottom:'15px'}}
              >
                {listPost.map((item, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <RecommendItem {...item} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </ShowOnMobile>

          <div
            style={{ display: 'flex', alignItems: 'center', float: 'right' }}
            className="my-1"
          >
            <div>
              <Link href={ROUTES.SEARCH_PAGE.href}>
                <a
                  className="linkShowPost"
                  style={{ textDecoration: 'underline' }}
                >
                  Show all
                </a>
              </Link>
            </div>
          </div>
        </WrapperContent>
      )}
    </WrapperSpot>
  );
};

export default RecommendProperty;
