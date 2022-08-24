import ColPost from '@root/src/components/shared/ItemPostInfo/ColPost';
import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';
import { Col, Divider, Row, Typography } from 'antd';
import CenterCol from './CenterCol';
import LeftCol from './LeftCol';
import PostRow from './PostRow';
import RightCol from './RightCol';
import { XprofileText, XprofileWrap } from './Xprofile.styled';

const Xprofile = () => {
  return (
    <>
      <XprofileWrap>
        <XprofileText>
          <Typography className="title-spotlight__text--style">
            X Profile
          </Typography>
          <Row>
            <Col xs={0} sm={0} lg={5}>
              <LeftCol />
            </Col>
            <Col xs={24} sm={24} lg={19}>
              <Row>
                <Col xs={24} sm={24} lg={17}>
                  <CenterCol />
                </Col>
                <Col xs={24} sm={24} lg={7}>
                  <RightCol />
                </Col>
              </Row>
              <Row>
                <PostRow />
              </Row>
            </Col>
            <div className="d-flex justify-content-center w-100">
              <PaginationWrapCustom defaultCurrent={1} total={50} />
            </div>
          </Row>
        </XprofileText>
      </XprofileWrap>
    </>
  );
};

export default Xprofile;
