import { Col, Row } from 'antd';
import Link from 'next/link';

import { AcademyText, AcademyWrap } from './Academy.style';
import CenterNews from './CenterNews';
import InOtherNews from './InOtherNews';
import ListNews from './ListNews';
import OutStanding from './OutStanding';

const AcademyDesktop: React.FC<{}> = () => {
  return (
    <div className="hidden-on-small">
      <AcademyText>
        <Row>
          <Col span={16}>
            <Row>
              <Col span={7}>
                <InOtherNews />
              </Col>
              <Col span={17}>
                <Link href="/academy" legacyBehavior>
                  <CenterNews />
                </Link>
              </Col>
              <Col span={24} style={{ marginTop: '10px' }}>
                <ListNews />
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <OutStanding />
          </Col>
        </Row>
      </AcademyText>
    </div>
  );
};

export default AcademyDesktop;
