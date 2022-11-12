import { SRC_IMAGE } from '@core';
import { VectorDollar } from '@root/public/icons';
import { Button, Col, Image, Row, Typography } from 'antd';
import { DivA, RowA } from '../Spotlight/ItemSpotlight.style';

const LeftCol: React.FC<{}> = () => {
  return (
    <>
      <div className="box-category m-2">
        <div className="m-4">
          <Typography className="category-social">Category</Typography>
          <div className="horizontal-line" />
          <DivA className="d-flex justify-content-between mb-4">
            <div style={{ position: 'relative', width: '40%' }}>
              <Typography className="category-social">CRM</Typography>
              <Typography className="category-post">19,259 post</Typography>
            </div>
            <div style={{ position: 'relative', width: '60%' }}>
              <div className="img-first">
                <Image
                  alt="crm"
                  src={SRC_IMAGE.ACADEMY7}
                  width="24px"
                  height="24px"
                  preview={false}
                />
              </div>
              <div className="img-second">
                <Image
                  alt="crm"
                  src={SRC_IMAGE.ACADEMY7}
                  width="24px"
                  height="24px"
                  preview={false}
                />
              </div>
              <div className="img-third">
                <Image
                  alt="crm"
                  src={SRC_IMAGE.ACADEMY7}
                  width="24px"
                  height="24px"
                  preview={false}
                />
              </div>
            </div>
          </DivA>
          <DivA className="d-flex justify-content-between my-4">
            <div style={{ position: 'relative', width: '40%' }}>
              <Typography className="category-social">Property</Typography>
              <Typography className="category-post">26,254 post</Typography>
            </div>
            <div style={{ position: 'relative', width: '60%' }}>
              <div className="img-first">
                <Image
                  alt="crm"
                  src={SRC_IMAGE.ACADEMY7}
                  width="24px"
                  height="24px"
                  preview={false}
                />
              </div>
              <div className="img-second">
                <Image
                  alt="crm"
                  src={SRC_IMAGE.ACADEMY7}
                  width="24px"
                  height="24px"
                  preview={false}
                />
              </div>
              <div className="img-third">
                <Image
                  alt="crm"
                  src={SRC_IMAGE.ACADEMY7}
                  width="24px"
                  height="24px"
                  preview={false}
                />
              </div>
            </div>
          </DivA>
          <DivA className="d-flex justify-content-between my-4">
            <div style={{ position: 'relative', width: '40%' }}>
              <Typography className="category-social">Roomate</Typography>
              <Typography className="category-post">1,987,254 post</Typography>
            </div>
            <div style={{ position: 'relative', width: '60%' }}>
              <div className="img-first">
                <Image
                  alt="crm"
                  src={SRC_IMAGE.ACADEMY7}
                  width="24px"
                  height="24px"
                  preview={false}
                />
              </div>
              <div className="img-second">
                <Image
                  alt="crm"
                  src={SRC_IMAGE.ACADEMY7}
                  width="24px"
                  height="24px"
                  preview={false}
                />
              </div>
              <div className="img-third">
                <Image
                  alt="crm"
                  src={SRC_IMAGE.ACADEMY7}
                  width="24px"
                  height="24px"
                  preview={false}
                />
              </div>
            </div>
          </DivA>
        </div>
      </div>

      <div className="box-category m-2">
        <div className="m-4">
          <Typography className="category-social">
            Most Interested Person
          </Typography>
          <div className="horizontal-line" />
          <RowA className="my-4">
            <Col span={5}>
              <Image
                alt="interest"
                width="40px"
                height="40px"
                src={SRC_IMAGE.ACADEMY7}
              />
            </Col>
            <Col span={11}>
              <Typography className="name-person">Steve Jobs</Typography>
              <Typography className="role-person">Sale Manager</Typography>
              <Typography className="role-person">| CMC Corp</Typography>
              <div className="d-flex align-items-center">
                <Typography className="coin-person">24t</Typography>
                <VectorDollar className="mx-1" />
              </div>
            </Col>
            <Col span={8}>
              <Button className="button-connect">
                <Typography className="connect">Connect</Typography>
              </Button>
            </Col>
          </RowA>
          <RowA className="my-4">
            <Col span={5}>
              <Image
                alt="interest"
                width="40px"
                height="40px"
                src={SRC_IMAGE.ACADEMY7}
              />
            </Col>
            <Col span={11}>
              <Typography className="name-person">Steve Jobs</Typography>
              <Typography className="role-person">Sale Manager</Typography>
              <Typography className="role-person">| CMC Corp</Typography>
              <div className="d-flex align-items-center">
                <Typography className="coin-person">24t</Typography>
                <VectorDollar className="mx-1" />
              </div>
            </Col>
            <Col span={8}>
              <Button className="button-connect">
                <Typography className="connect">Connect</Typography>
              </Button>
            </Col>
          </RowA>
          <RowA className="my-4">
            <Col span={5}>
              <Image
                alt="interest"
                width="40px"
                height="40px"
                src={SRC_IMAGE.ACADEMY7}
              />
            </Col>
            <Col span={11}>
              <Typography className="name-person">Steve Jobs</Typography>
              <Typography className="role-person">Sale Manager</Typography>
              <Typography className="role-person">| CMC Corp</Typography>
              <div className="d-flex align-items-center">
                <Typography className="coin-person">24t</Typography>
                <VectorDollar className="mx-1" />
              </div>
            </Col>
            <Col span={8}>
              <Button className="button-connect">
                <Typography className="connect">Connect</Typography>
              </Button>
            </Col>
          </RowA>
          <RowA className="my-4">
            <Col span={5}>
              <Image
                alt="interest"
                width="40px"
                height="40px"
                src={SRC_IMAGE.ACADEMY7}
              />
            </Col>
            <Col span={11}>
              <Typography className="name-person">Steve Jobs</Typography>
              <Typography className="role-person">Sale Manager</Typography>
              <Typography className="role-person">| CMC Corp</Typography>
              <div className="d-flex align-items-center">
                <Typography className="coin-person">24t</Typography>
                <VectorDollar className="mx-1" />
              </div>
            </Col>
            <Col span={8}>
              <Button className="button-connect">
                <Typography className="connect">Connect</Typography>
              </Button>
            </Col>
          </RowA>
          <RowA className="my-4">
            <Col span={5}>
              <Image
                alt="interest"
                width="40px"
                height="40px"
                src={SRC_IMAGE.ACADEMY7}
              />
            </Col>
            <Col span={11}>
              <Typography className="name-person">Steve Jobs</Typography>
              <Typography className="role-person">Sale Manager</Typography>
              <Typography className="role-person">| CMC Corp</Typography>
              <div className="d-flex align-items-center">
                <Typography className="coin-person">24t</Typography>
                <VectorDollar className="mx-1" />
              </div>
            </Col>
            <Col span={8}>
              <Button className="button-connect">
                <Typography className="connect">Connect</Typography>
              </Button>
            </Col>
          </RowA>
          <RowA className="my-4">
            <Col span={5}>
              <Image
                alt="interest"
                width="40px"
                height="40px"
                src={SRC_IMAGE.ACADEMY7}
              />
            </Col>
            <Col span={11}>
              <Typography className="name-person">Steve Jobs</Typography>
              <Typography className="role-person">Sale Manager</Typography>
              <Typography className="role-person">| CMC Corp</Typography>
              <div className="d-flex align-items-center">
                <Typography className="coin-person">24t</Typography>
                <VectorDollar className="mx-1" />
              </div>
            </Col>
            <Col span={8}>
              <Button className="button-connect">
                <Typography className="connect">Connect</Typography>
              </Button>
            </Col>
          </RowA>
          <RowA className="my-4">
            <Col span={5}>
              <Image
                alt="interest"
                width="40px"
                height="40px"
                src={SRC_IMAGE.ACADEMY7}
              />
            </Col>
            <Col span={11}>
              <Typography className="name-person">Steve Jobs</Typography>
              <Typography className="role-person">Sale Manager</Typography>
              <Typography className="role-person">| CMC Corp</Typography>
              <div className="d-flex align-items-center">
                <Typography className="coin-person">24t</Typography>
                <VectorDollar className="mx-1" />
              </div>
            </Col>
            <Col span={8}>
              <Button className="button-connect">
                <Typography className="connect">Connect</Typography>
              </Button>
            </Col>
          </RowA>
          <RowA className="my-4">
            <Col span={5}>
              <Image
                alt="interest"
                width="40px"
                height="40px"
                src={SRC_IMAGE.ACADEMY7}
              />
            </Col>
            <Col span={11}>
              <Typography className="name-person">Steve Jobs</Typography>
              <Typography className="role-person">Sale Manager</Typography>
              <Typography className="role-person">| CMC Corp</Typography>
              <div className="d-flex align-items-center">
                <Typography className="coin-person">24t</Typography>
                <VectorDollar className="mx-1" />
              </div>
            </Col>
            <Col span={8}>
              <Button className="button-connect">
                <Typography className="connect">Connect</Typography>
              </Button>
            </Col>
          </RowA>
          <RowA className="my-4">
            <Col span={5}>
              <Image
                alt="interest"
                width="40px"
                height="40px"
                src={SRC_IMAGE.ACADEMY7}
              />
            </Col>
            <Col span={11}>
              <Typography className="name-person">Steve Jobs</Typography>
              <Typography className="role-person">Sale Manager</Typography>
              <Typography className="role-person">| CMC Corp</Typography>
              <div className="d-flex align-items-center">
                <Typography className="coin-person">24t</Typography>
                <VectorDollar className="mx-1" />
              </div>
            </Col>
            <Col span={8}>
              <Button className="button-connect">
                <Typography className="connect">Connect</Typography>
              </Button>
            </Col>
          </RowA>
          <RowA className="my-4">
            <Col span={5}>
              <Image
                alt="interest"
                width="40px"
                height="40px"
                src={SRC_IMAGE.ACADEMY7}
              />
            </Col>
            <Col span={11}>
              <Typography className="name-person">Steve Jobs</Typography>
              <Typography className="role-person">Sale Manager</Typography>
              <Typography className="role-person">| CMC Corp</Typography>
              <div className="d-flex align-items-center">
                <Typography className="coin-person">24t</Typography>
                <VectorDollar className="mx-1" />
              </div>
            </Col>
            <Col span={8}>
              <Button className="button-connect">
                <Typography className="connect">Connect</Typography>
              </Button>
            </Col>
          </RowA>
        </div>
      </div>
    </>
  );
};

export default LeftCol;
