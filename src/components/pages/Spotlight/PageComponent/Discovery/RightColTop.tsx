import { SRC_IMAGE } from '@core';
import { IconQuotes } from '@root/public/icons';
import { Col, Divider, Image, Row, Typography } from 'antd';

import { DiscoveryWrap } from './Discovery.styled';
import SlideDiscoveryPost from './SlideDiscoveryPost';

const RightColTop = () => {
  return (
    <>
      <div className="margin-md-style">
        <Row>
          <Col span={12}>
            <SlideDiscoveryPost />
          </Col>
          <Col span={12}>
            <SlideDiscoveryPost />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RightColTop;
