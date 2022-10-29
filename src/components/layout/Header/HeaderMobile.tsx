import { ROUTES, SRC_IMAGE, SRC_LOGO } from '@constants';
import React from 'react';
import {
  ButtonOnSearch,
  ColContentMobile,
  LogoWrapper,
  MainContentMobile,
  MainMobile,
  RowContentMobile,
  SearchMobile,
  TextWrap,
} from './Header.style';
import { Col, Image, Typography } from 'antd';
import { MenuBugger } from './MenuBugger';
import { VectorTextMessage, VectorTextMessageBlack } from '@root/public/icons';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface Props {
  tabCurrent?: any;
  onRedirect: (href: string) => void;
  themeLight?: boolean;
  t: any;
}

const HeaderMobile = (props: Props) => {
  const { tabCurrent, onRedirect, themeLight, t: translate } = props;

  return (
    <MainMobile style={{ position: themeLight ? 'absolute' : 'relative' }}>
      <MainContentMobile>
        {/* <LogoWrapper>
          <Image
            preview={false}
            height={24}
            width={110}
            src={themeLight ? SRC_LOGO.DARK : SRC_LOGO.LIGHT} 
            onClick={() => onRedirect(ROUTES.HOME)}
          />
        </LogoWrapper>
        <MenuBugger onRedirect={onRedirect}  t={translate} tabCurrent={tabCurrent}/> */}
        <RowContentMobile>
          <ColContentMobile span={3}>
            <Link href={`${process.env.NEXT_PUBLIC_USER_WEB}`}>
              <a>
                <Image
                  alt="icon"
                  src={SRC_IMAGE.ICONUSER}
                  preview={false}
                  style={{ cursor: 'pointer' }}
                />
              </a>
            </Link>
          </ColContentMobile>

          <ColContentMobile span={18}>
            <SearchMobile>
              <Col span={5} className="d-flex">
                <DownOutlined
                  style={{ fontSize: 8, color: '#7A7A7A' }}
                  className="d-flex align-self-center mx-2"
                />
                <TextWrap>
                  <Typography className="text-select">Sell</Typography>
                </TextWrap>
              </Col>
              <Col span={1}>
                <div className="vertical-line-search" />
              </Col>
              <Col span={14}>
                {/* <TextWrap>
                    <Typography className="text-search">
                      Bắt đầu tìm kiếm
                    </Typography>
                  </TextWrap> */}
                <input className="inputSearch" placeholder="Bắt đầu tìm kiếm" />
              </Col>
              <Col span={4} className="d-flex justify-content-end">
                <ButtonOnSearch className="mx-1">
                  <SearchOutlined style={{ fontSize: '17px' }} />
                </ButtonOnSearch>
              </Col>
            </SearchMobile>
          </ColContentMobile>
          <ColContentMobile span={3}>
            {themeLight ? <VectorTextMessage /> : <VectorTextMessageBlack />}
          </ColContentMobile>
        </RowContentMobile>
      </MainContentMobile>
    </MainMobile>
  );
};

export default HeaderMobile;
