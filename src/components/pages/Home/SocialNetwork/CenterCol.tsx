import { SRC_IMAGE } from '@core';
import {
  IconCoinTabTab,
  VectorCoin,
  VectorSend,
  VectorShare,
  VectorTalk,
  VectorThreeDot,
} from '@root/public/icons';
import { Button, Col, Divider, Image, Row, Typography } from 'antd';

const CenterCol: React.FC<{}> = () => {
  return (
    <>
      <div className="box-category m-2">
        <Row className="m-3">
          <Col sm={14} lg={14} className="d-flex align-item-center">
            <div>
              <Image preview={false} alt="info" src={SRC_IMAGE.ACADEMY8} />
            </div>
            <div className="mx-2">
              <Typography className='name-center'>Floyd Miles</Typography>
              <span className="align-items-center d-flex">
                <label
                  className='role-person'
                >
                  Sale Manager
                </label>
                <Divider type="vertical" />
                <label
                  className='role-person'
                >
                  CMC Corp
                </label>
                <Divider type="vertical" />
                <div className="align-items-center d-flex">
                  <label
                    className='coin-person'
                  >
                    24t
                  </label>
                  <IconCoinTabTab style={{ marginLeft: 5 }} />
                </div>
              </span>
              <Typography>3 phút trước</Typography>
            </div>
          </Col>
          <Col
            sm={10}
            lg={10}
            className="d-flex align-items-center justify-content-end"
          >
            <Button className="button-connect">
              <Typography className="connect">Connect</Typography>
            </Button>
            <VectorThreeDot className="mx-3" />
          </Col>
        </Row>
        <Row className="m-3">
          <Typography className='content-center'>
            The bun runs along the road and meets a wolf. «Little bun, little
            bun, I want to eat you!» says the wolf. «I ran away from
            Grandfather, I ran away from Grandmother, I ran away from the hare.
            And I can run away from you, grey wolf!» says the bun and runs away.
          </Typography>
          <div className="horizontal-line" />
        </Row>
        <Row className="pb-4">
          <div className="d-flex mx-4">
            <VectorCoin />
            <Typography className='icon-center'>Tặng Tabcoin</Typography>
          </div>
          <div className="d-flex mx-4">
            <VectorTalk />
            <Typography className='icon-center'>Comment</Typography>
          </div>
          <div className="d-flex mx-4">
            <VectorShare />
            <Typography className='icon-center'>Share</Typography>
          </div>
          <div className="d-flex mx-4">
            <VectorSend />
            <Typography className='icon-center'>Send</Typography>
          </div>
        </Row>
      </div>
      <div className="box-category m-2">
        <Row className="m-3">
          <Col sm={14} lg={14} className="d-flex align-item-center">
            <div>
              <Image preview={false} alt="info" src={SRC_IMAGE.ACADEMY8} />
            </div>
            <div className="mx-2">
              <Typography className='name-person'>Floyd Miles</Typography>
              <span className="align-items-center d-flex">
                <label
                  className='role-person'
                >
                  Sale Manager
                </label>
                <Divider type="vertical" />
                <label
                  className='role-person'
                >
                  CMC Corp
                </label>
                <Divider type="vertical" />
                <div className="align-items-center d-flex">
                  <label
                    className='coin-person'
                  >
                    24t
                  </label>
                  <IconCoinTabTab style={{ marginLeft: 5 }} />
                </div>
              </span>
              <Typography className='date-time'>3 phút trước</Typography>
            </div>
            <div></div>
          </Col>
          <Col
            sm={10}
            lg={10}
            className="d-flex align-items-center justify-content-end"
          >
            <Button className="button-connect">
              <Typography className="connect">Connect</Typography>
            </Button>
            <VectorThreeDot className="mx-3" />
          </Col>
        </Row>
        <Row className="m-3">
          <Typography className='content-center'>
            The bun runs along the road and meets a wolf. «Little bun, little
            bun, I want to eat you!» says the wolf. «I ran away from
            Grandfather, I ran away from Grandmother, I ran away from the hare.
            And I can run away from you, grey wolf!» says the bun and runs away.
          </Typography>
          <Image preview={false} alt="pic" src={SRC_IMAGE.ACADEMY3} width="100%"/>

          <div className="horizontal-line" />
        </Row>
        <Row className="pb-4">
          <div className="d-flex mx-4">
            <VectorCoin />
            <Typography className='icon-center'>Tặng Tabcoin</Typography>
          </div>
          <div className="d-flex mx-4">
            <VectorTalk />
            <Typography className='icon-center'>Comment</Typography>
          </div>
          <div className="d-flex mx-4">
            <VectorShare />
            <Typography className='icon-center'>Share</Typography>
          </div>
          <div className="d-flex mx-4">
            <VectorSend />
            <Typography className='icon-center'>Send</Typography>
          </div>
        </Row>
      </div>
      <div className="box-category m-2">
        <Row className="m-3">
          <Col sm={14} lg={14} className="d-flex align-item-center">
            <div>
              <Image preview={false} alt="info" src={SRC_IMAGE.ACADEMY8} />
            </div>
            <div className="mx-2">
              <Typography className='name-person'>Floyd Miles</Typography>
              <span className="align-items-center d-flex">
                <label
                  className='role-person'
                >
                  Sale Manager
                </label>
                <Divider type="vertical" />
                <label
                  className='role-person'
                >
                  CMC Corp
                </label>
                <Divider type="vertical" />
                <div className="align-items-center d-flex">
                  <label
                    className='coin-person'
                  >
                    24t
                  </label>
                  <IconCoinTabTab style={{ marginLeft: 5 }} />
                </div>
              </span>
              <Typography className='date-time'>3 phút trước</Typography>
            </div>
            <div></div>
          </Col>
          <Col
            sm={10}
            lg={10}
            className="d-flex align-items-center justify-content-end"
          >
            <Button className="button-connect">
              <Typography className="connect">Connect</Typography>
            </Button>
            <VectorThreeDot className="mx-3" />
          </Col>
        </Row>
        <Row className="m-3">
          <Typography className='content-center'>
            The bun runs along the road and meets a wolf. «Little bun, little
            bun, I want to eat you!» says the wolf. «I ran away from
            Grandfather, I ran away from Grandmother, I ran away from the hare.
            And I can run away from you, grey wolf!» says the bun and runs away.
          </Typography>
          <div className="horizontal-line" />
        </Row>
        <Row className="pb-4">
          <div className="d-flex mx-4">
            <VectorCoin />
            <Typography className='icon-center'>Tặng Tabcoin</Typography>
          </div>
          <div className="d-flex mx-4">
            <VectorTalk />
            <Typography className='icon-center'>Comment</Typography>
          </div>
          <div className="d-flex mx-4">
            <VectorShare />
            <Typography className='icon-center'>Share</Typography>
          </div>
          <div className="d-flex mx-4">
            <VectorSend />
            <Typography className='icon-center'>Send</Typography>
          </div>
        </Row>
      </div>
    </>
  );
};

export default CenterCol;
