import { Pagination, Row, Typography } from 'antd';
import { IconQuotes, PrevArrow, NextArrow } from 'public/icons';
import React, { useState } from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  AllItem,
  ButtonNav,
  ButtonTag,
  GeneralText,
  GeneralWrap,
  WrapperSpot,
} from '../Home.style';
import { PostItem, RecommendItem } from '../Recommend';
import { TypographyText } from './PostItem/PostItem.style';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RecommendProperty = () => {
  const [limitItems, setLimitItems] = React.useState(12);
  // layout for desktop only 8 products if screen is mobile, product will be 20 posts

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

  const listTag = [
    { id: 1, value: 'Sell' },
    { id: 2, value: 'Auction ' },
    { id: 3, value: 'Rent' },
    { id: 4, value: 'Transfer' },
  ];

  const postItem: PostItem = {
    price: '3.000.000$',
    wasPrice: '4.500.000$ ',
    title: 'Sir Francis Drake Blvd. Retail /Office 312 Sir Francis Drake',
  };

  const listPost: PostItem[] = Array(16).fill(postItem);

  const handleBtnClick = (id: number) => {
    setActive(id);
  };
  const hanldeShowAll = () => {
    setShowAll(true);
  };

  return (
    <WrapperSpot>
      <GeneralText>
        <Typography.Title
          className="title-general"
          // style={{ fontSize: fontSize ? fontSize : '' }}
        >
          Recommend Property
        </Typography.Title>
        <GeneralWrap>
          <div className="general-between-wrap">
            <div className="general-wrap">
              <IconQuotes />
              <Typography.Title className="content-general">
                anh Hùng đừng bỏ qua sự kiện sắp tới nha
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
        <TypographyText>
          <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div>
                {listTag.map((item) => (
                  <ButtonTag
                    key={item.id}
                    active={active === item.id ? 'active' : ''}
                    onClick={() => handleBtnClick(item.id)}
                  >
                    {item.value}{' '}
                  </ButtonTag>
                ))}
              </div>
            </div>

            <div
              style={{ display: 'flex', alignItems: 'center' }}
              className="my-1"
            >
              <div>
                <Typography.Link
                  style={{ textDecoration: 'underline', color: showAll ? "#7A7A7A":"" }}
                  className="linkShowPost"
                  onClick={hanldeShowAll}
                >
                  Show all(+{listPost.length})
                </Typography.Link>
              </div>
              <ButtonNav style={{ margin: '0px 12px 0px 16px' }} ref={prevRef}>
                <PrevArrow />
              </ButtonNav>
              <ButtonNav ref={nextRef}>
                <NextArrow />
              </ButtonNav>
            </div>
          </Row>

          {showAll ? (
            <AllItem>
              {listPost.map((item, idx) => (
                <RecommendItem {...item} key={idx} />
              ))}
            </AllItem>
          ) : (
            <div className="">
              <Swiper
                modules={[Navigation, Autoplay]}
                draggable
                spaceBetween={40}
                speed={750}
                grabCursor
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                breakpoints={{
                  '1024': {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 24,
                  },
                }}
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
          )}
        </TypographyText>
      )}
    </WrapperSpot>
  );
};

export default RecommendProperty;
