import { SRC_IMAGE } from '@core';
import {
  CalendarTue,
  VectorCRM,
  VectorCalendar,
  VectorLocation,
} from '@root/public/icons';
import { Button, Col, Row, Typography } from 'antd';

import {
  ArticleWrap,
  DivWrap,
  HubSlide,
  HubText,
  ImageWrap,
  ItemUpcoming,
  SpotlightText,
} from '../Home.style';

const ItemBoostHub = () => {
  return (
    <HubSlide>
      <div className="top-hub">
        <HubText>
          <Typography.Title className="top-text">Boost hub</Typography.Title>
          <div className="divider" />
        </HubText>
      </div>
      <Row className="m-2">
        <Col span={6}>
          <VectorCRM />
        </Col>
        <Col span={18}>
          <HubText>
            <Typography className="mid-text-title">CRM</Typography>
            <Typography className="mid-text-content">
              A shutdown would have devastating global
            </Typography>
          </HubText>
          <div className="divider-hub" />
        </Col>
      </Row>
      <Row className="mt-3 m-2">
        <Col span={6}>
          <VectorCRM />
        </Col>
        <Col span={18}>
          <HubText>
            <Typography className="mid-text-title">Property</Typography>
            <Typography className="mid-text-content">
              A shutdown would have devastating global
            </Typography>
          </HubText>
          <div className="divider-hub" />
        </Col>
      </Row>
      <Row className="mt-3 m-2">
        <Col span={6}>
          <VectorCRM />
        </Col>
        <Col span={18}>
          <HubText>
            <Typography className="mid-text-title">Roommate</Typography>
            <Typography className="mid-text-content">
              Devastating global impacts and must not be
            </Typography>
          </HubText>
        </Col>
      </Row>
    </HubSlide>
  );
};

export default ItemBoostHub;
