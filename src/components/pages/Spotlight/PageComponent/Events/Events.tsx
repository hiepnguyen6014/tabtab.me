import ColPost from '@root/src/components/shared/ItemPostInfo/ColPost';
import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';
import { Col, Divider, Row, Typography } from 'antd';
import Link from 'next/link';
import { DivA } from '../../../Home/Spotlight/ItemSpotlight.style';
import Project from './Project';

const Event = () => {
  return (
    <>
      <Typography className="title-spotlight__text--style">Event</Typography>
      <Row>
        <Col lg={18} >
          <div className="d-flex justify-content-between">
            <DivA>
              <Link href="/detail-spotlight">
                <a>
                  <ColPost />
                </a>
              </Link>
            </DivA>
            <DivA>
              <Link href="/detail-spotlight">
                <a>
                  <ColPost />
                </a>
              </Link>
            </DivA>
            <DivA>
              <Link href="/detail-spotlight">
                <a>
                  <ColPost />
                </a>
              </Link>
            </DivA>
          </div>
          <PaginationWrapCustom defaultCurrent={1} total={50} />
        </Col>
        <Col lg={6}>
          <Project />
          <PaginationWrapCustom defaultCurrent={1} total={50} />
        </Col>
      </Row>
    </>
  );
};

export default Event;
