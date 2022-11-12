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

const BoxComment = () => {
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
        The bun runs along the road and meets a wolf. «Little bun, little bun, I
        want to eat you!» says the wolf. «I ran away from Grandfather, I ran
        away from Grandmother, I ran away from the hare. And I can run away from
        you, grey wolf!» says the bun and runs away.
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
      <Divider type="horizontal" style={{ margin: '0px 0px' }} />

      <Flex style={{ margin: '0px 0px' }}>
        <Image alt="pic" src={SRC_IMAGE.ACADEMY8} height="36px" width="36px" />
        <Flex
          style={{
            background: ' #EEF0F3',
            borderRadius: '59px',
            height: '36px',
            width: '100%',
          }}
        >
          <Typography className="comment__write">Viết bình luận</Typography>
        </Flex>
      </Flex>
      <Flex style={{ margin: '0px 0px', alignItems: 'flex-start' }}>
        <div>
          <Image
            alt="pic"
            src={SRC_IMAGE.ACADEMY8}
            height="36px"
            width="36px"
          />
        </div>
        <div>
          <div
            style={{
              background: ' #EEF0F3',
              borderRadius: '12px',
              width: '75%',
              padding: '10px',
            }}
          >
            <Typography>Floyd Miles</Typography>
            <Flex style={{ margin: '0px 0px 8px 0px' }}>
              <Typography className="date-box_text">Sale Manager</Typography>
              <Divider type="vertical" style={{ borderColor: '#7a7a7a' }} />
              <Typography className="date-box_text">CMC Corp</Typography>
              <Divider type="vertical" style={{ borderColor: '#7a7a7a' }} />
              <Typography className="coin-dollar">24t</Typography>
              <VectorDollarS />
            </Flex>
            <Typography className="content-social__text">
              The bun runs along the road and meets a wolf.ran away from
              Grandfather, I ran away from Grandmother
            </Typography>
          </div>
          <Flex style={{ marginTop: '10px' }}>
            <Typography className="name-box__text-color">
              Tặng Tabcoin
            </Typography>
            <Typography className="comment__dot">.</Typography>
            <Typography className="name-box__text-color">Phản hồi</Typography>
            <Typography className="comment__dot">.</Typography>
            <Typography className="header-content">1 giờ trước</Typography>
          </Flex>
        </div>
      </Flex>

      <Flex style={{ margin: '0px 0px', alignItems: 'flex-start' }}>
        <div>
          <Image
            alt="pic"
            src={SRC_IMAGE.ACADEMY8}
            height="36px"
            width="36px"
          />
        </div>
        <div>
          <div
            style={{
              background: ' #EEF0F3',
              borderRadius: '12px',
              width: '75%',
              padding: '10px',
            }}
          >
            <Typography>Floyd Miles</Typography>
            <Flex style={{ margin: '0px 0px' }}>
              <Typography className="date-box_text">Sale Manager</Typography>
              <Divider type="vertical" style={{ borderColor: '#7a7a7a' }} />
              <Typography className="date-box_text">CMC Corp</Typography>
              <Divider type="vertical" style={{ borderColor: '#7a7a7a' }} />
              <Typography className="coin-dollar">24t</Typography>
              <VectorDollarS />
            </Flex>
            <Typography className="content-social__text">
              The bun runs along the road and meets a wolf.ran away from
              Grandfather, I ran away from Grandmother
            </Typography>
          </div>
          <Flex style={{ marginTop: '10px' }}>
            <Typography className="name-box__text-color">
              Tặng Tabcoin
            </Typography>
            <Typography className="comment__dot">.</Typography>
            <Typography className="name-box__text-color">Phản hồi</Typography>
            <Typography className="comment__dot">.</Typography>
            <Typography className="header-content">1 giờ trước</Typography>
          </Flex>
        </div>
      </Flex>
      <Typography className="comment__dot">Xem thêm bình luận</Typography>
    </BoxWrap>
  );
};

export default BoxComment;
