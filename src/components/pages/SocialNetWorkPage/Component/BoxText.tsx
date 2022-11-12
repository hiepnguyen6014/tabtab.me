import { SRC_IMAGE } from '@core';
import {
  VectorCoin,
  VectorComponent,
  VectorDollarS,
  VectorPicture,
  VectorSpeak,
  VectorTalk,
  VectorThreeDot,
  VectorVideoCamera,
} from '@root/public/icons';
import { Col, Divider, Image, Row, Typography } from 'antd';

import {
  BoxWrap,
  ButtonConnect,
  Flex,
  SearchWrap,
} from '../SocialNetworkPage.style';

const BoxText = () => {
  return (
    <BoxWrap style={{ padding: '0px 20px' }}>
      <Flex
        style={{
          margin: '20px 0px 0px 0px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Flex style={{ margin: '0px 0px' }}>
          <Image
            alt="box-img"
            src={SRC_IMAGE.ACADEMY7}
            width="52px"
            height="52px"
            preview={false}
          />
          <div>
            <Typography>Floyd Miles</Typography>
            <Flex style={{ margin: '0px 0px' }}>
              <Typography className="date-box_text">Sale Manager</Typography>
              <Divider type="vertical" style={{ borderColor: '#7a7a7a' }} />
              <Typography className="date-box_text">CMC Corp</Typography>
              <Divider type="vertical" style={{ borderColor: '#7a7a7a' }} />
              <Typography className="coin-dollar">24t</Typography>
              <VectorDollarS />
            </Flex>
            <Typography className="date-box_text">3 phút trước</Typography>
          </div>
        </Flex>
        <Flex>
          <ButtonConnect style={{ width: '71px' }}>Connect</ButtonConnect>
          <VectorThreeDot />
        </Flex>
      </Flex>
      <Typography className="content-social__text my-3">
        developments in the Labour party have once again highlighted how,
        despite the leader’s promise to end factionalism, internal divisions are
        alive and well. The party agreed last month to ban four groups
      </Typography>
      <Divider type="horizontal" style={{ margin: '0px 0px' }} />
      <Row justify="space-around" align="middle">
        <Col>
          <Flex>
            <VectorCoin />
            <Typography className="footer-social__text">
              Tặng Tabcoin
            </Typography>
          </Flex>
        </Col>
        <Col>
          <Flex>
            <VectorTalk />
            <Typography className="footer-social__text">Comment</Typography>
          </Flex>
        </Col>
        <Col>
          <Flex>
            <VectorComponent />
            <Typography className="footer-social__text">Share</Typography>
          </Flex>
        </Col>
      </Row>
    </BoxWrap>
  );
};

export default BoxText;
