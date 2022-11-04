import {
  ArticleWrap,
  DivWrap,
  ImageWrap,
  ItemUpcoming,
  SpotlightText,
} from '../Home.style';
import { Button, Typography } from 'antd';
import {
  CalendarTue,
  VectorCalendar,
  VectorLocation,
  Advantage,
} from '@root/public/icons';
import { UpComingFooterButton } from './UpComing.style';
import { SRC_IMAGE } from '@core';

const ItemPostUpComing = ({ items }) => {
  return (
    <div className="shadowA">
      <div>
        <ArticleWrap>
          <ImageWrap
            alt="imagePost"
            src={items.image}
            height="100%"
            width="100%"
            preview={false}
          />
          <DivWrap>
            <div className="info-calendar">{items.calendar}</div>
          </DivWrap>
        </ArticleWrap>

        <SpotlightText className="mt-1">
          <Typography.Title className="date-upcoming">
            {items.date}
          </Typography.Title>
          <Typography.Title className="contentPostSpot">
            {items.content}
          </Typography.Title>
        </SpotlightText>
      </div>
      <ItemUpcoming>
        <div className="button-calendar">
          <VectorLocation />
          <SpotlightText>
            <Typography.Text>{items.address}</Typography.Text>
          </SpotlightText>
        </div>
      </ItemUpcoming>
      <UpComingFooterButton>
        <Advantage /> <span> Add to Calendar</span>
      </UpComingFooterButton>
    </div>
  );
};

export default ItemPostUpComing;
