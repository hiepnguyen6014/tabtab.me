/* eslint-disable react/jsx-no-target-blank */
import { SRC_IMAGE } from '@constants';
import { UserContext } from '@contexts';
import {
  IconGlobalLang,
  VectorEarth,
  VectorMoney,
  VectorRuler,
} from '@root/public/icons';
import { Col, Image, Typography } from 'antd';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';
import {
  IconTabFacebook,
  IconTabInstagram,
  IconTabLinkedin,
  IconTabRSS,
  IconTabSpotify,
  IconTabTwitter,
  IconTabYoutube,
} from 'public/icons';
import { useContext } from 'react';
import { Flex, FooterDefault } from '../Footer/Footer.style';
import {
  FlexFooter,
  FooterBackgroundTop,
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

  const findPage = (e, path) => {
    router.push(path);
  };

  return (
    <FooterWrapper>
      <div style={{ width: '1200px' }}>
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

              <div style={{ marginTop: '30px' }}>
                <FooterText style={{ marginBottom: '30px' }}>
                  <Typography.Title className="titleTextFooter">
                    Follow Us
                  </Typography.Title>
                </FooterText>
                <div className="d-flex justify-content-between w-75  followus">
                  <IconTabFacebook style={{ cursor: 'pointer' }} />
                  <IconTabInstagram style={{ cursor: 'pointer' }} />
                  <IconTabTwitter style={{ cursor: 'pointer' }} />
                  <IconTabYoutube style={{ cursor: 'pointer' }} />
                  <IconTabLinkedin style={{ cursor: 'pointer' }} />
                  <IconTabRSS style={{ cursor: 'pointer' }} />
                  <IconTabSpotify style={{ cursor: 'pointer' }} />
                </div>
              </div>
            </Col>

            <Col sm={12} md={5} lg={6}>
              <div className="followUs-ctx">
                <FooterText>
                  <Typography.Title className="titleTextFooter">
                    Follow Us
                  </Typography.Title>
                  <Typography.Title className="textFooter">
                    Property Management{' '}
                  </Typography.Title>
                  <Typography.Title className="textFooter">
                    CRM
                  </Typography.Title>
                  <Typography.Title
                    className="textFooter"
                    onClick={(e) => findPage(e, '/roommate')}
                  >
                    Roommate
                  </Typography.Title>
                  {/* <Typography.Title className="textFooter">
                    Academy
                  </Typography.Title> */}
                  <Typography.Title className="textFooter">
                    Find An Agent
                  </Typography.Title>
                  <Typography.Title className="textFooter">
                    Event
                  </Typography.Title>
                </FooterText>
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
                    onClick={(e) => findPage(e, '/about-us')}
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
                    onClick={(e) => findPage(e, '/help-center')}
                  >
                    Help Center
                  </Typography.Title>
                </FooterText>
              </div>
            </Col>
          </FooterMainTop>
        </FooterBackgroundTop>

        <FooterText className="d-none d-md-block">
          <div
            className="d-flex justify-content-center"
            style={{
              background: '#f6f6f6',
              position: 'relative',
              borderTop: '1px solid #E9E9E9',
            }}
          >
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
                    <a>
                      <Typography.Text className="text-Footer">
                        Privacy Policy
                      </Typography.Text>
                    </a>
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
              </Flex>
              <Flex>
                <span className="footerBottom">
                  <VectorEarth className="mx-2" />
                  <Typography.Text className="text-Footer">
                    <span style={{ textDecoration: 'underline' }}>
                      Việt Nam
                    </span>
                  </Typography.Text>
                </span>
                <span className="footerBottom">
                  <IconGlobalLang className="mx-2" />
                  <Typography.Text className="text-Footer">
                    <span style={{ textDecoration: 'underline' }}>
                      Tiếng Việt
                    </span>
                  </Typography.Text>
                </span>
                <span className="footerBottom">
                  <VectorMoney className="mx-2" />
                  <Typography.Text className="text-Footer">
                    <span style={{ textDecoration: 'underline' }}>USD</span>
                  </Typography.Text>
                </span>
                <span className="footerBottom">
                  <VectorRuler className="mx-2" />
                  <Typography.Text className="text-Footer">
                    <span style={{ textDecoration: 'underline' }}>met</span>
                  </Typography.Text>
                </span>
              </Flex>
            </FooterDefault>
          </div>
        </FooterText>
      </div>
    </FooterWrapper>
  );
}
