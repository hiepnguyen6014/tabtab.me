import { SRC_IMAGE } from '@core';
import {
  VectorPicture,
  VectorSpeak,
  VectorVideoCamera,
} from '@root/public/icons';
import { Col, Divider, Image, Row, Typography } from 'antd';

import { BoxWrap, Flex, SearchWrap } from '../SocialNetworkPage.style';

const BoxSearch = () => {
  return (
    <BoxWrap style={{ padding: '0px 20px' }}>
      <Flex style={{ margin: '20px 0px 0px 0px' }}>
        <Image
          alt="box-img"
          src={SRC_IMAGE.ACADEMY7}
          width="52px"
          height="52px"
          preview={false}
        />
        <SearchWrap
          size="large"
          style={{ borderRadius: '39px', background: '#F0F2F5' }}
          placeholder="Start a post"
        />
      </Flex>
      <Divider type="horizontal" style={{ margin: '10px 0px' }} />
      <Row justify="space-around" align="middle">
        <Col>
          <Flex>
            <VectorPicture />
            <Typography className="tag__choice">Picture</Typography>
          </Flex>
        </Col>
        <Col>
          <Flex>
            <VectorVideoCamera />
            <Typography className="tag__choice">Video</Typography>
          </Flex>
        </Col>
        <Col>
          <Flex>
            <VectorSpeak />
            <Typography className="tag__choice">Topic</Typography>
          </Flex>
        </Col>
      </Row>
    </BoxWrap>
  );
};

export default BoxSearch;
