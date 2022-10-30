import { Autoplay, Navigation, Pagination } from 'swiper';
import { GeneralText, GeneralWrap, WrapperSpot } from '../Home.style';
import { Row, Typography } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DATA_HOME_PAGE } from './HomeData';
import { IconQuotes } from 'public/icons';
import ItemPostUpComing from '../UpComing/ItemPostUpComing';
import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';
import { useState } from 'react';

const Upcoming: React.FC<{}> = () => {
  const [showContent, setShowContent] = useState(true);
  const handlePageChangeNumber = (page: any) => {
    console.log(page);
  };
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
              <Typography.Title className="content-general">
                anh/chị [Display Name] đừng bỏ qua sự kiện sắp tới nha
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
        // <Row
        //   gutter={{
        //     xs: 8,
        //     sm: 16,
        //     md: 24,
        //     lg: 32,
        //   }}
        // >
        //   {UPCOMINGLIST.map((item, key) => {
        //     return (
        //       <ColA className="gutter-row" sm={24} lg={6} key={key}>
        //         <ItemPostUpComing items={item} />
        //       </ColA>
        //     );
        //   })}
        //   {/* <ColA className="gutter-row" sm={24} lg={6}> */}
        //   {/* <ItemBoostHub /> */}
        //   {/* </ColA> */}
        // </Row>

        // <Row
        //   gutter={{
        //     xs: 8,
        //     sm: 16,
        //     lg: 24,
        //   }}
        // >
        //   {UPCOMINGLIST.map((item, idx) => {
        //     return (
        //       <Col key={idx} sm={24} lg={6}>
        //         <ItemPostUpComing items={item} />;
        //       </Col>
        //     );
        //   })}
        // </Row>

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

export default Upcoming;
