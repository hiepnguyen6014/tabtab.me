import { ROUTES } from '@constants';
import { UserContext } from '@contexts';
import Config from '@root/config';
import {
  Account,
  HelpCenter,
  LogoDark,
  Logo as LogoLight,
  Logout,
  Message,
  Properties,
  SocialBlack,
  Transaction,
  VectorGlobal,
  VectorMenuOutline,
  VectorPeople,
} from '@root/public/icons';
import { FilterProvider } from '@root/src/core/contexts/filterContext';
import { Navigator } from '@utils';
import { Divider, Modal, Popover } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import { Login } from '../../shared/AuthForm';
import { REFormSearchInput } from '../RealEstateFilter/FilterSearch';
import {
  ButtonWrap,
  ButtonWrapLogin,
  LogoWrapper,
  MainContentDesktop,
  TabTabWrap,
  TextPost,
} from './Header.style';

interface Props {
  t: any;
  isTransparentBg: boolean;
  isShowSearchBar: boolean;
  tabCurrent?: string;
  onRedirect?: (href: string) => void;
}
const HeaderDesktop = ({
  t: translate,
  onRedirect,
  isTransparentBg,
  isShowSearchBar = false,
}: Props) => {
  const { currentUser } = useContext(UserContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const renderLogo = () => {
    const props = {
      height: 44,
      width: 100,
      style: { cursor: 'pointer' },
      onClick: () => onRedirect(ROUTES.HOME),
    };

    return isTransparentBg ? <LogoLight {...props} /> : <LogoDark {...props} />;
  };

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
      <a onClick={showModal}>
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
          <Link href="/help-center" style={{ marginLeft: 8, color: '#4e4e4e' }}>
            Help Center
          </Link>
        </ButtonWrap>
      </a>
    </div>
  );

  return (
    <MainContentDesktop className="not-login">
      <LogoWrapper>{renderLogo()}</LogoWrapper>
      <Login
        title="Login Form"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
      <TabTabWrap>
        {isShowSearchBar && (
          <FilterProvider>
            <REFormSearchInput t={translate} />
          </FilterProvider>
        )}
        <div className="d-flex">
          <Link href="/find-person">
            <TextPost
              style={{
                color: isTransparentBg ? '#FEFFFF' : '#222222',
                marginRight: 40,
              }}
            >
              Find person
            </TextPost>
          </Link>
          <Link href={ROUTES.ADD_LISTING.href}>
            <TextPost
              style={{
                color: isTransparentBg ? '#FEFFFF' : '#222222',
              }}
            >
              Add listing
            </TextPost>
          </Link>
        </div>

        <div>
          {isTransparentBg ? (
            <VectorGlobal style={{ marginLeft: 20, cursor: 'pointer' }} />
          ) : (
            <SocialBlack style={{ marginLeft: 20, cursor: 'pointer' }} />
          )}
        </div>
        <div>
          <Popover
            placement="bottomRight"
            content={Object.keys(currentUser).length ? content : content1}
            trigger={isModalOpen ? 'hover' : 'click'}
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
              {Object.keys(currentUser).length ? (
                <img src={currentUser.userAvatar} alt="avatar" />
              ) : (
                <VectorPeople
                  className="d-flex align-self-center"
                  style={{ marginRight: 4 }}
                />
              )}
            </div>
          </Popover>
        </div>
      </TabTabWrap>
    </MainContentDesktop>
  );
};

export default HeaderDesktop;
