import React, { useEffect } from 'react';
import { DownOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { PUBLIC_ROUTES, ROUTES, SRC_IMAGE, SRC_LOGO } from '@constants';
import { UserContext } from '@contexts';
import { useRouter } from 'next/router';
import { FilterProvider } from '@root/src/core/contexts/filterContext';

import {
  IconAccount,
  Logo,
  VectorGlobal,
  VectorMenuOutline,
  VectorPeople,
  Message,
  Account,
  Properties,
  Transaction,
  CRM,
  PMA,
  Community,
  Roommate,
  HelpCenter,
  Logout,
  SocialBlack,
  LogoDark,
} from '@root/public/icons';
import { Button, Divider, Image, Popover } from 'antd';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useContext } from 'react';
import {
  ButtonWrap,
  LogoWrapper,
  MainContentDesktop,
  TabTabWrap,
  TextPost,
  ButtonWrapLogin,
} from './Header.style';
import HeaderUserAction from './HeaderUserAction';
import { Navigator, reactLocalStorage } from '@utils';
import Config from '@root/config';
import { REFormSearchInput } from '../RealEstateFilter/FilterSearch';
import RealEstateFilter from '../RealEstateFilter';

interface Props {
  t: any;
  themeLight?: boolean;
  tabCurrent?: string;
  onRedirect?: (href: string) => void;
}
const HeaderDesktop = (props: Props) => {
  const { t: translate, themeLight, tabCurrent, onRedirect } = props;
  const { currentUser } = useContext(UserContext);
  const router = useRouter();
  const isLogin = Object.keys(currentUser).length > 0;
  const isHome = router.asPath === '/';
  console.log(`${process.env.NEXT_PUBLIC_USER_WEB}`);
  
  const content = (
    <div style={{ width: 282 }}>
      <a>
        <ButtonWrap>
          <Message />
          <a style={{ marginLeft: 8 }}>Message</a>
        </ButtonWrap>
      </a>
      <a href={Config.USER_ACCOUNT}>
        <ButtonWrap>
          <Account />
          <a style={{ marginLeft: 8, color: '#4E4E4E' }}>Account</a>
        </ButtonWrap>
      </a>
      <a>
        <ButtonWrap>
          <Properties />
          <a style={{ marginLeft: 8 }}>My Properties</a>
        </ButtonWrap>
      </a>
      <a>
        <ButtonWrap>
          <Transaction />
          <a style={{ marginLeft: 8 }}>Transaction Managerment</a>
        </ButtonWrap>
      </a>
      <Divider style={{ marginTop: 10, marginBottom: 10 }} />
      {/* <a>
        <ButtonWrap>
          <CRM />
          <a style={{ marginLeft: 8 }}>CRM</a>
        </ButtonWrap>
      </a>
      <a>
        <ButtonWrap>
          <PMA />
          <a style={{ marginLeft: 8 }}>PMA</a>
        </ButtonWrap>
      </a>
      <a>
        <ButtonWrap>
          <Community />
          <a style={{ marginLeft: 8 }}>Community</a>
        </ButtonWrap>
      </a>
      <a>
        <ButtonWrap>
          <Roommate />
          <a style={{ marginLeft: 8 }}>Roommate</a>
        </ButtonWrap>
      </a> */}
      {/* <Divider style={{ marginTop: 10, marginBottom: 10 }} /> */}
      <a>
        <ButtonWrap>
          <HelpCenter />
          <a style={{ marginLeft: 8 }}>Help Center11</a>
        </ButtonWrap>
      </a>
      <a onClick={() => Navigator.client.jump(Config.AUTO_LOGOUT)}>
        <ButtonWrap style={{ paddingLeft: 8 }}>
          <Logout />
          <a style={{ marginLeft: 8 }}>Logout</a>
        </ButtonWrap>
      </a>
    </div>
  );

  const content1 = (
    <div style={{ width: 280 }}>
      <a href={Config.USER_LOGIN}>
        <ButtonWrapLogin>
          <label>Signup / Login</label>
        </ButtonWrapLogin>
      </a>
      <a href={Config.USER_ACCOUNT}>
        <ButtonWrap style={{ paddingLeft: 8 }}>
          <Account />
          <a style={{ marginLeft: 8, color: '#4E4E4E' }}>Account</a>
        </ButtonWrap>
      </a>
      <Divider style={{ marginTop: 10, marginBottom: 10 }} />
      <a>
        <ButtonWrap style={{ paddingLeft: 8 }}>
          <HelpCenter />
          <Link href="/help-center">
            <a style={{ marginLeft: 8, color: '#4e4e4e' }}>Help Center</a>
          </Link>
        </ButtonWrap>
      </a>
    </div>
  );

  return (
    <MainContentDesktop className="not-login">
      <LogoWrapper>
        {/* <div>
        <Image
          preview={false}
          style={{ cursor: 'pointer' }}
          src={themeLight ? SRC_LOGO.LIGHT : SRC_LOGO.DARK}
          alt=""
          onClick={() => onRedirect(ROUTES.HOME)}
          height={44}
          width={110}
        />
        </div> */}
        <div>
          {themeLight ? (
            <Logo
              height={44}
              width={110}
              style={{ cursor: 'pointer' }}
              onClick={() => onRedirect(ROUTES.HOME)}
            />
          ) : (
            <LogoDark
              height={44}
              width={110}
              style={{ cursor: 'pointer' }}
              onClick={() => onRedirect(ROUTES.HOME)}
            />
          )}
        </div>
      </LogoWrapper>
      {/* <LinksWrap typeof={`${themeLight}`}>
        {Object.keys(PUBLIC_ROUTES).map((item, key) => (
          <a
            onClick={() => onRedirect(PUBLIC_ROUTES[item].href)}
            key={key}
            typeof={`${
              PUBLIC_ROUTES[item].href == tabCurrent ? 'current' : ''
            }`}
          >
            {translate(`${PUBLIC_ROUTES[item].name}`)}
          </a>
        ))}
      </LinksWrap> */}

      <TabTabWrap>
        <FilterProvider>
          {themeLight ? <></> : <REFormSearchInput t={translate} />}

          {/* <RealEstateFilter toggleType={false} t={translate} /> */}
        </FilterProvider>

        {/* {themeLight?
        <label className="text-primary">12312</label>
        :
        <label style={{ color: "#222222", marginLeft: 100 }}>Find person</label>

      } */}
        {/* <Link href="/find-person">
          <a>
            <TextPost
              style={{
                color: themeLight ? '#FEFFFF' : '#222222',
                marginLeft: 100,
              }}
            >
              Find person
            </TextPost>
          </a>
        </Link>
        <Link href={`${process.env.NEXT_PUBLIC_USER_WEB}post-news`}>
          <a>
        <TextPost style={{ color: themeLight ? '#FEFFFF' : '#222222' }}>
          Add listing
        </TextPost>
        </a>
        </Link> */}
        <div>
          {themeLight ? (
            <div className="d-flex">
              <Link href="/find-person">
                <a>
                  <TextPost
                    style={{
                      color: '#FEFFFF',
                      marginRight: 40,
                    }}
                  >
                    Find person
                  </TextPost>
                </a>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_USER_WEB}post-news`}>
                <a>
                  <TextPost style={{ color: '#FEFFFF' }}>Add listing</TextPost>
                </a>
              </Link>
            </div>
          ) : (
            <div className="d-flex">
              <Link href="/find-person">
                <a>
                  <TextPost
                    style={{
                      color: '#222222',
                      marginRight: 40,
                    }}
                  >
                    Find person
                  </TextPost>
                </a>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_USER_WEB}post-news`}>
                <a>
                  <TextPost style={{ color: '#222222' }}>Add listing</TextPost>
                </a>
              </Link>
            </div>
          )}
        </div>

        <div>
          {themeLight ? (
            <VectorGlobal style={{ marginLeft: 20, cursor: 'pointer' }} />
          ) : (
            <SocialBlack style={{ marginLeft: 20, cursor: 'pointer' }} />
          )}
        </div>
        <div>
          <Popover
            placement="bottomRight"
            content={Object.keys(currentUser).length ? content : content1}
            trigger="click"
          >
            <div
              className="d-flex rounded-pill justify-content-between"
              style={{
                display: 'flex',
                backgroundColor: '#F9C41F',
                width: '80px',
                height: '36px',
                cursor: 'pointer',
              }}
            >
              <div
                style={{ flex: 1 }}
                className="d-flex align-self-center justify-content-center"
              >
                <VectorMenuOutline className="d-flex align-self-center" />
              </div>
              <VectorPeople
                className="d-flex align-self-center"
                style={{ marginRight: 4 }}
              />
            </div>
          </Popover>
        </div>
      </TabTabWrap>
      {/* <HeaderUserAction
        themeLight={themeLight}
        onRedirect={onRedirect}
        t={props.t}
      /> */}

      <div className={isHome ? 'blur' : null}></div>
    </MainContentDesktop>
  );
};




export default HeaderDesktop;
