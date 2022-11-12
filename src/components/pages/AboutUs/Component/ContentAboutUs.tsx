import { SRC_IMAGE } from '@core';
import { VectorBuildingL, VectorTalkL } from '@root/public/icons';
import { Col, Image, Row } from 'antd';

import { AboutUsParagraph } from '../AboutUs.style';

const ContentAboutUs: React.FC<{}> = () => {
  return (
    <div className="my-3">
      <AboutUsParagraph>
        <div className="article">
          <Image
            src={SRC_IMAGE.IMAGECONTENT2}
            preview={false}
            alt="pictures"
            width="100%"
            height="95%"
          />
          <div className="content-on-img">
            <h1>About US</h1>
            <p className="content-aboutus">
              Compass is building the first modern real estate platform, pairing
              the industry’s top talent with technology to make the search and
              sell experience intelligent and seamless.
            </p>
            <div className="horizontal-divider" />
          </div>
        </div>

        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 40,
          }}
        >
          <Col xs={24} sm={24} lg={12} className="gutter-row res-col">
            <div className="text-center">
              <VectorTalkL className="my-5" />
              <h3 className="my-4">A brokerage of unparalleled agents</h3>
            </div>
            <p className="content-p">
              As an innovative residential real estate firm, we empower our
              agents so they have more time for advising their clients. With the
              solutions-driven mindset of a startup and the sophistication of a
              luxury brand, Compass is the future of real estate.
            </p>
          </Col>
          <Col xs={24} sm={24} lg={12} className="gutter-row res-col">
            <div className="text-center">
              <VectorBuildingL className="my-5" />
              <h3 className="my-4">A tech company reinventing the space</h3>
            </div>
            <p className="content-p">
              To lead the industry requires the smartest tools built by the
              brightest minds across engineering, design, and strategy. Through
              our proprietary platform, Compass is changing how agents and
              clients navigate the process of finding or selling a home.
            </p>
          </Col>
        </Row>
      </AboutUsParagraph>
    </div>
  );
};

export default ContentAboutUs;
