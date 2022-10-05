import { Row, Typography } from 'antd';
import { WrapperSpot, ColA, GeneralText, GeneralWrap } from '../Home.style';
import {
  CalendarSun,
  CalendarTue,
  CalendarWed,
  IconQuotes,
} from 'public/icons';
import { SRC_IMAGE } from '@constants';
import ItemPostUpComing from '../UpComing/ItemPostUpComing';
import ItemBoostHub from '../UpComing/ItemBoostHub';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

const Upcoming: React.FC<{}> = () => {
  const UPCOMINGLIST = [
    {
      image: SRC_IMAGE.IMAGEPOST,
      date: '21 DEC 2021 AT 13:00',
      content:
        'North Bondi block sells for $22m+ but duplex next door for sale.',
      address: '1 Sandal Road, London',
      calendar: <CalendarWed />,
    },
    {
      image: SRC_IMAGE.IMAGEPOST,
      date: '21 DEC 2021 AT 13:00',
      content:
        'North Bondi block sells for $22m+ but duplex next door for sale.',
      address: '1 Sandal Road, London',
      calendar: <CalendarTue />,
    },
    {
      image: SRC_IMAGE.IMAGEPOST,
      date: '21 DEC 2021 AT 13:00',
      content:
        'North Bondi block sells for $22m+ but duplex next door for sale.',
      address: '1 Sandal Road, London',
      calendar: <CalendarSun />,
    },
    {
      image: SRC_IMAGE.IMAGEPOST,
      date: '21 DEC 2021 AT 13:00',
      content:
        'North Bondi block sells for $22m+ but duplex next door for sale.',
      address: '1 Sandal Road, London',
      calendar: <CalendarSun />,
    },
  ];

  const [showContent, setShowContent] = useState(true);

  return (
    <WrapperSpot>
      <GeneralText>
        <Typography.Title className="title-general">Upcoming</Typography.Title>
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
        <div>
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            draggable
            spaceBetween={40}
            speed={750}
            grabCursor
            pagination={{ dynamicBullets: true }}
            // navigation={{
            //   prevEl: prevRef.current,
            //   nextEl: nextRef.current,
            // }}
            breakpoints={{
              '1024': {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 24,
              },
            }}
            className="container"
          >
            {UPCOMINGLIST.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <ItemPostUpComing items={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </WrapperSpot>
  );
};

export default Upcoming;
