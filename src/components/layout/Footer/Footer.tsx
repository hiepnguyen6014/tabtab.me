/* eslint-disable react/jsx-no-target-blank */
import { INFOMATION_ROUTES, SRC_IMAGE } from '@constants';
import { UserContext } from '@contexts';
import React, { useContext } from 'react';
import {
  ColInFooter,
  FlexFooter,
  FooterBackgroundBottom,
  FooterBackgroundTop,
  FooterMainBottom,
  FooterMainMiddle,
  FooterMainTop,
  FooterText,
  FooterWrapper,
  RowInCol,
} from './Footer.style';
import {
  IconTabFacebook,
  IconTabInstagram,
  IconTabLinkedin,
  IconTabRSS,
  IconTabSpotify,
  IconTabYoutube,
  IconTabTwitter,
} from 'public/icons';
import { FooterBottom } from './FooterBottom';
import { FooterMiddle } from './FooterMiddle';
import { RoutesContact } from './RoutesFooter';
import Link from 'next/dist/client/link';
import { Col, Row, Typography, Image, Space } from 'antd';
import Router, { useRouter } from 'next/router';

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
                  <span>
                    <Typography.Title
                      className="textFooter pt-3"
                      onClick={(e) => findPage(e, '/policy')}
                    >
                      Privacy Policy
                    </Typography.Title>
                    <Typography.Title className="textFooter">
                      Responsible Disclosure
                    </Typography.Title>
                  </span>
                </FooterText>
              </div>
            
            
           
            </Col>
            
          </FooterMainTop>
        </FooterBackgroundTop>

        {/* <FooterBackgroundBottom>
          <FooterMainBottom>
            <FooterBottom t={t} />
          </FooterMainBottom>
        </FooterBackgroundBottom> */}
        {/* <div className="footer-bottom-wrap">
          <FooterText>
            <Typography className="footer-bottom-text">
              Giấy phép thiết lập MXH số 69/GP-BTTTT, Ký ngày 29/01/2021
            </Typography>
          </FooterText>
        </div> */}
        <FooterText>
          <div className="footer-bottom-wrap1">
            <Typography.Text className="text-Footer">
              © 2021 Tabtab
            </Typography.Text>
            <Link href="/policy">
              <a>
                <Typography.Text className="text-Footer">
                  Privacy Policy
                </Typography.Text>
              </a>
            </Link>

            <Typography.Text className="text-Footer">
              Responsible Disclosure
            </Typography.Text>
          </div>
        </FooterText>
      </div>
    </FooterWrapper>
  );
}
