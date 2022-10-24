import ColPost from '@root/src/components/shared/ItemPostInfo/ColPost';
import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';
import { Col, Divider, Row, Typography } from 'antd';
import ColBottom from './ColBottom';
import { DiscoveryText, DiscoveryWrap } from './Discovery.styled';
import LeftColTop from './LeftColTop';
import RightColTop from './RightColTop';

const Discovery = () => {
  return (
    <>
      <DiscoveryWrap>
        <DiscoveryText>
          <Typography className="title-spotlight__text--style">
            Discovery
          </Typography>
          <Row>
            <Col xs={24} sm={24} lg={12}>
              <LeftColTop />
            </Col>
            <Col xs={24} sm={24} lg={12}>
              <RightColTop />
            </Col>
          </Row>
          <ColBottom />
          <div className="d-flex justify-content-center w-100">
            <PaginationWrapCustom total={5} pageSize={1} />
          </div>
        </DiscoveryText>
      </DiscoveryWrap>
    </>
  );
};

export default Discovery;
