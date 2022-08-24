import {
    VectorUnion,
    VectorUnion1,
    VectorUnion2,
  } from '@root/public/icons';
  import { Col, Row } from 'antd';
import { AboutUsParagraph, AboutUsText } from '../AboutUs.style';
  
  const WhyUs: React.FC<{}> = () => {
    return (
      <div className='my-4'>
      <AboutUsParagraph>
        <h2>Why us</h2>
        <Row className='container-fluid'>
          <Col xs={24} sm={24} lg={8}>
            <VectorUnion className="my-4" />
            <h3 className='whyus-title'>Thông tin đầy đủ và chính xác</h3>
            <div className="horizontal-separate" />
            <p className='whyus-content'>
              As an innovative residential real estate firm, we empower our agents
              so they have more time for advising their clients. With the
              solutions-driven mindset of a startup and the sophistication.
            </p>
          </Col>
          <Col xs={24} sm={24} lg={8}>
            <VectorUnion1 className="my-4" />
            <h3 className='whyus-title'>Thông tin đầy đủ và chính xác</h3>
            <div className="horizontal-separate" />
            <p className='whyus-content'>
              As an innovative residential real estate firm, we empower our agents
              so they have more time for advising their clients. With the
              solutions-driven mindset of a startup and the sophistication.
            </p>
          </Col>
          <Col xs={24} sm={24} lg={8}>
            <VectorUnion2 className="my-4" />
            <h3 className='whyus-title'>Thông tin đầy đủ và chính xác</h3>
            <div className="horizontal-separate" />
            <p className='whyus-content'>
              As an innovative residential real estate firm, we empower our agents
              so they have more time for advising their clients. With the
              solutions-driven mindset of a startup and the sophistication.
            </p>
          </Col>
        </Row>
        </AboutUsParagraph>
      </div>
    );
  };
  
  export default WhyUs;  