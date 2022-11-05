/* eslint-disable react/jsx-no-target-blank */
import { SRC_IMAGE } from '@constants';
import { UserContext } from '@contexts';
import { IconGlobalLang } from '@root/public/icons';
import { Col, Image, Typography } from 'antd';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import { Flex, FooterDefault } from '../Footer/Footer.style';
import {
  FlexFooter,
  FooterBackgroundTop,
  FooterContainer,
  FooterMainTop,
  FooterText,
  FooterWrapper,
} from './Footer.style';

export default function Footer(props: { t: any }) {
  const { t } = props;
  const { systemConfig } = useContext(UserContext);
  const router = useRouter();

  const spanCol = {
    Col1: { lg: 9, sm: 9 },
    Col2: { lg: 7, sm: 9 },
  };

  const findPage = (e, path: string) => {
    router.push(path);
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterBackgroundTop>
          <FooterMainTop>
            <Col sm={24} md={12} lg={10} className="pb-4">
              <div className="d-block justify-items-center">
                <FooterText style={{ marginBottom: '30px' }}>
                  <Typography.Title className="titleTextFooter">
                    Mobile Apps
                  </Typography.Title>
                </FooterText>

                <FlexFooter>
                  <div className="items-between">
                    <Image
                      alt="playstore"
                      style={{ cursor: 'pointer' }}
                      src={SRC_IMAGE.PLAYSTORE}
                      preview={false}
                      width="45%"
                    />
                    <Image
                      alt="appstore"
                      style={{ cursor: 'pointer' }}
                      src={SRC_IMAGE.APPSTORE}
                      preview={false}
                      width="45%"
                    />
                  </div>
                </FlexFooter>
              </div>
            </Col>

            <Col sm={12} md={7} lg={8}>
              <div className="company">
                <FooterText>
                  <Typography.Title className="titleTextFooter">
                    Company
                  </Typography.Title>
                  <Typography.Title
                    className="textFooter"
                    onClick={e => findPage(e, '/about-us')}
                  >
                    About US{' '}
                  </Typography.Title>
                  <Typography.Title className="textFooter">
                    Offices
                  </Typography.Title>
                  <Typography.Title className="textFooter">
                    Careers
                  </Typography.Title>
                  <Typography.Title
                    className="textFooter"
                    onClick={e => findPage(e, '/help-center')}
                  >
                    Help Center
                  </Typography.Title>
                </FooterText>
              </div>
            </Col>
          </FooterMainTop>
        </FooterBackgroundTop>

        <FooterText className="d-none d-md-block">
          <FooterDefault>
            <Flex style={{ gap: 15 }}>
              <div className="footerBottom">
                <Typography.Text className="text-Footer">
                  © 2021 Tabtab
                </Typography.Text>
              </div>
              <Typography.Text
                style={{
                  fontSize: '25px',
                  display: 'flex',
                  marginBottom: '12px',
                }}
              >
                .
              </Typography.Text>
              <div className="footerBottom">
                <Link href="/policy">
                  <Typography.Text className="text-Footer">
                    Privacy Policy
                  </Typography.Text>
                </Link>
              </div>
              <Typography.Text
                style={{
                  fontSize: '25px',
                  display: 'flex',
                  marginBottom: '12px',
                }}
              >
                .
              </Typography.Text>
              <div className="footerBottom">
                <Typography.Text className="text-Footer">
                  Responsible Disclosure
                </Typography.Text>
              </div>
              <Typography.Text
                style={{
                  fontSize: '25px',
                  display: 'flex',
                  marginBottom: '12px',
                }}
              >
                .
              </Typography.Text>
              <div className="footerBottom">
                <Typography.Text className="text-Footer">
                  Site map
                </Typography.Text>
              </div>
              <span className="footerBottom">
                <IconGlobalLang className="mx-2" />
                <Typography.Text className="text-Footer">
                  <span style={{ textDecoration: 'underline' }}>
                    Tiếng Việt
                  </span>
                </Typography.Text>
              </span>
            </Flex>
          </FooterDefault>
        </FooterText>
      </FooterWrapper>
    </FooterContainer>
  );
}
