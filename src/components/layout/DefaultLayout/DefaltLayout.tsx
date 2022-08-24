import React from 'react';
import { DefaultRowHeader } from './DefaultComponent.style';
import { checkIsHomePage } from '@utils';
import HeaderComponent from '../Header/index';
import { useRouter } from 'next/router';
import Footer from '../Footer/Footer';
import ChatCustom from '../../shared/Chat/ChatCustom';
import { Button, Typography } from 'antd';
import { Flex, FooterDefault, FooterText } from '../Footer/Footer.style';
import {
  IconGlobalLang,
  VectorEarth,
  VectorMoney,
  VectorRuler,
} from '@root/public/icons';
import Link from 'next/link';
interface Props {
  t: any;
  children?: any;
  showHeaderMobile?: boolean;
}
const DefaultLayout = (props: Props) => {
  const { t: translate, showHeaderMobile = true } = props;
  const router = useRouter();
  return (
    <>
      <>
        <HeaderComponent
          t={translate}
          showHeaderMobile={showHeaderMobile}
          themeLight={checkIsHomePage()}
        />
        {!checkIsHomePage() && <DefaultRowHeader />}
      </>

      <main style={{ position: 'relative' }}>{props.children}</main>

      <Footer t={translate} />
      <ChatCustom />
      <FooterText className="d-none d-md-block">
        <div
          className="d-flex container-fluid justify-content-center"
          style={{ background: '#f6f6f6', position: 'relative' }}
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
                  <span style={{ textDecoration: 'underline' }}>Việt Nam</span>
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
    </>
  );
};

export default DefaultLayout;
