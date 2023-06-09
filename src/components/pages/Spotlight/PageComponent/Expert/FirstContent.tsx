import { Col, Row } from 'antd';
import BannerExpert from './BannerExpert';
import SlideExpert from './SlideExpert';

const FirstContent = () => {
  return (
    <>
      <Row style={{ marginBottom: '21px' }}>
        <Col lg={18}>
          <BannerExpert />
        </Col>
        <Col lg={6}>
          <SlideExpert />
        </Col>
      </Row>
    </>
  );
};

export default FirstContent;
