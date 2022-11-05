import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';
import { Col, Row, Typography } from 'antd';
import { IconQuotes } from 'public/icons';
import { useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  GeneralText,
  GeneralWrap,
  HideOnMobile,
  ItemDesktopWrapper,
  ShowOnMobile,
  WrapperSpot,
} from '../Home.style';
import { ColA } from '../Home.style';
import ItemPostUpComing from '../UpComing/ItemPostUpComing';
import { DATA_HOME_PAGE } from './HomeData';

const Upcoming: React.FC<{}> = () => {
  const [showContent, setShowContent] = useState(true);
  const handlePageChangeNumber = (page: any) => {
    console.log(page);
  };
  const limitData = DATA_HOME_PAGE.slice(0, 4);
  return (
    <WrapperSpot>
      <GeneralText>
        <Typography.Title className="title-general">
          Sự kiện sắp diễn ra
          <Typography.Text className="title-hide">HIDE</Typography.Text>
        </Typography.Title>
        <GeneralWrap>
          <div className="general-between-wrap">
            <div className="general-wrap">
              <IconQuotes />
              <Typography.Title
                className="content-general"
                style={{ textAlign: 'start' }}
              >
                anh/chị [Display Name] đừng bỏ qua sự kiện sắp tới nha
              </Typography.Title>
            </div>
            <div
              onClick={e => setShowContent(showContent ? false : true)}
              style={{ cursor: 'pointer' }}
            >
              <Typography.Text className="content-hide">HIDE</Typography.Text>
            </div>
          </div>
        </GeneralWrap>
      </GeneralText>
      {showContent && (
        <>
          <HideOnMobile>
            <div className="d-flex justify-content-between align-items-center">
              {limitData.map((item, idx) => {
                return (
                  <ItemDesktopWrapper key={idx}>
                    <ItemPostUpComing items={item} />
                  </ItemDesktopWrapper>
                );
              })}
            </div>
          </HideOnMobile>
          <ShowOnMobile>
            <div className="d-flex">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                draggable
                spaceBetween={40}
                speed={750}
                grabCursor
                pagination={{ dynamicBullets: true }}
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
                className="container"
              >
                {limitData.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <ItemPostUpComing items={item} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </ShowOnMobile>
        </>
      )}
    </WrapperSpot>
  );
};

export default Upcoming;
