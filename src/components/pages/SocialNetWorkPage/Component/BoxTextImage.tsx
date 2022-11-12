import { SRC_IMAGE } from '@core';
import {
  IconCopy,
  IconMessages,
  IconReport,
  IconSave,
  IconSend,
  VectorCoin,
  VectorComponent,
  VectorDollarS,
  VectorPicture,
  VectorSpeak,
  VectorTalk,
  VectorThreeDot,
  VectorVideoCamera,
} from '@root/public/icons';
import { Col, Divider, Image, Popover, Row, Typography } from 'antd';
import Link from 'next/link';

import {
  BoxWrap,
  ButtonConnect,
  ButtonMenu,
  Flex,
  SearchWrap,
} from '../SocialNetworkPage.style';

const BoxTextImage = () => {
  const content1 = (
    <div style={{ width: 280 }}>
      <Link href="/roommate" legacyBehavior>
        <ButtonMenu>
          <IconSave />
          <Typography>Save</Typography>
        </ButtonMenu>
      </Link>
      <Link href="/detai-spotlight" legacyBehavior>
        <ButtonMenu>
          <IconCopy />
          <Typography>Copy link</Typography>
        </ButtonMenu>
      </Link>
      <Link href="/spotlight-page" legacyBehavior>
        <ButtonMenu>
          <IconReport />
          <Typography>Report</Typography>
        </ButtonMenu>
      </Link>
    </div>
  );

  const content2 = (
    <div style={{ width: 280 }}>
      <Link href="/policy" legacyBehavior>
        <ButtonMenu>
          <IconMessages />
          <Typography>Message</Typography>
        </ButtonMenu>
      </Link>
      <Link href="/help-center" legacyBehavior>
        <ButtonMenu>
          <IconSend />
          <Typography>Send to Community</Typography>
        </ButtonMenu>
      </Link>
    </div>
  );

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
          <Popover
            style={{ cursor: 'pointer' }}
            placement="bottomRight"
            content={content1}
            trigger="click"
          >
            <VectorThreeDot />
          </Popover>
        </Flex>
      </Flex>
      <Typography className="content-social__text my-3">
        Grandfather, I ran away from Grandmother, I ran away from the hare. And
        I can run away from you, grey wolf!» says the bun and runs away.
      </Typography>
      <Image alt="image" src={SRC_IMAGE.EXAMPLE1} width="100%" height="200px" />
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
          <Popover
            style={{ cursor: 'pointer' }}
            placement="bottomRight"
            content={content2}
            trigger="click"
          >
            <Flex style={{ cursor: 'pointer' }}>
              <VectorComponent />
              <Typography className="footer-social__text">Share</Typography>
            </Flex>
          </Popover>
        </Col>
      </Row>
    </BoxWrap>
  );
};

export default BoxTextImage;
