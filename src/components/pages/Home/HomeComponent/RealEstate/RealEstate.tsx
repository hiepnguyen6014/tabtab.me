import { IconQuotes } from '@root/public/icons';
import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';
import { Typography } from 'antd';
import React, { useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { GeneralText, GeneralWrap, WrapperSpot } from '../../Home.style';
import ItemPostUpComing from '../../UpComing/ItemPostUpComing';
import { DATA_HOME_PAGE } from '../HomeData';

const RealEstate = () => {
  const [showContent, setShowContent] = useState(true);
  const handlePageChangeNumber = (page: any) => {
    console.log(page);
  };
  return (
    <WrapperSpot>
      <GeneralText>
        <Typography.Title className="title-general">
          Bất động sản chính chủ
          <Typography.Text className="title-hide">HIDE</Typography.Text>
        </Typography.Title>
        <GeneralWrap>
          <div className="general-between-wrap">
            <div className="general-wrap">
              <IconQuotes />
              <Typography.Title className="content-general">
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
        <div>
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
            {DATA_HOME_PAGE.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <ItemPostUpComing items={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div style={{ margin: '0 auto' }}>
            <PaginationWrapCustom
              defaultCurrent={1}
              total={10}
              pageSize={1}
              handlePageChange={handlePageChangeNumber}
            />
          </div>
        </div>
      )}
    </WrapperSpot>
  );
};

export default RealEstate;
