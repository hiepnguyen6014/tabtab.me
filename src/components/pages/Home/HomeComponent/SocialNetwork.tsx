import { IconQuotes } from '@root/public/icons';
import { Col, Row, Typography } from 'antd';
import Link from 'next/link';

import { GeneralText, GeneralWrap } from '../Home.style';
import CenterCol from '../SocialNetwork/CenterCol';
import LeftCol from '../SocialNetwork/LeftCol';
import RightCol from '../SocialNetwork/RightCol';
import {
  SocialBigWrap,
  SocialText,
  SocialWrap,
} from '../SocialNetwork/SocialNetwork.style';

const SocialNetwork = () => {
  return (
    <SocialBigWrap className="container-fluid py-5">
      <SocialText>
        <SocialWrap>
          <GeneralText>
            <Link href="/social-network">
              <Typography.Title className="title-general">
                Social network
              </Typography.Title>
            </Link>
            <GeneralWrap>
              <div className="general-between-wrap">
                <div className="general-wrap">
                  <IconQuotes />
                  <Typography.Title className="content-general">
                    anh Hùng đừng bỏ qua sự kiện sắp tới nha
                  </Typography.Title>
                </div>
                <div>
                  <Typography.Text className="content-hide">
                    HIDE
                  </Typography.Text>
                </div>
              </div>
            </GeneralWrap>
          </GeneralText>
          <Row>
            <Col xs={0} sm={0} md={0} lg={6}>
              <LeftCol />
            </Col>
            <Col md={24} lg={12}>
              <CenterCol />
            </Col>
            <Col xs={0} sm={0} md={0} lg={6}>
              <RightCol />
            </Col>
          </Row>
        </SocialWrap>
      </SocialText>
    </SocialBigWrap>
  );
};

export default SocialNetwork;
