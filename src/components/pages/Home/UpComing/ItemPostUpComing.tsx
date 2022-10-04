import { SRC_IMAGE } from '@core';
import {
  CalendarTue,
  VectorCalendar,
  VectorLocation,
} from '@root/public/icons';
import { Button, Typography } from 'antd';
import {
  ArticleWrap,
  DivWrap,
  ImageWrap,
  ItemUpcoming,
  SpotlightText,
} from '../Home.style';

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
        <button
          style={{
            width: '100%',
            background: 'rgba(249, 196, 31, 0.1)',
            border: '1px solid #f9c41f',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px',
            cursor: 'pointer',
            padding: '9px 0px',
          }}
          // icon={<VectorCalendar />}
        >
          {/* <Image src={VectorCalendar} width={20} height={20} /> */}
          <VectorCalendar />
          <label
            style={{
              fontSize: '14px',
              fontWeight: '500',
              fontFamily: 'Inter',
              lineHeight: '18px',
              marginLeft: '5px',
            }}
          >
            Add to Calendar
          </label>
        </button>
      </ItemUpcoming>
    </div>
  );
};

export default ItemPostUpComing;
