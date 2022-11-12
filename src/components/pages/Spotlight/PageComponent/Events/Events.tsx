import ColPost from '@root/src/components/shared/ItemPostInfo/ColPost';
import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';
import { Col, Divider, Row, Typography } from 'antd';
import Link from 'next/link';

import { DivA } from '../../../Home/Spotlight/ItemSpotlight.style';
import { LayoutFake } from '../../SpotlightPage.style';
import Project from './Project';

const Event = () => {
  return (
    <>
      <Typography className="title-spotlight__text--style">Event</Typography>
      <Row>
        <Col lg={18}>
          <div className="d-flex justify-content-between ">
            <DivA>
              <Link href="/detail-spotlight">
                <ColPost />
              </Link>
            </DivA>
            <DivA>
              <Link href="/detail-spotlight">
                <ColPost />
              </Link>
            </DivA>

            <LayoutFake>
              <DivA>
                <Link href="/detail-spotlight">
                  <ColPost />
                </Link>
              </DivA>
            </LayoutFake>
          </div>
          <PaginationWrapCustom defaultCurrent={1} total={5} pageSize={1} />
        </Col>
        <Col lg={6} className="event-right-col">
          <Project />
          <PaginationWrapCustom total={5} pageSize={1} />
        </Col>
      </Row>
    </>
  );
};

export default Event;
