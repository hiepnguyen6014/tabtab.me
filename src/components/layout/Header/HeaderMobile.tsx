import { SearchOutlined } from '@ant-design/icons';
import { SRC_IMAGE } from '@constants';
import { VectorTextMessage, VectorTextMessageBlack } from '@root/public/icons';
import { useRoute } from '@utils';
import { Col, Image } from 'antd';
import Link from 'next/link';
import React from 'react';

import { DropdownSearchBar } from './DropdownSearchBar';
import {
  ButtonOnSearch,
  ColContentMobile,
  MainContentMobile,
  MainMobile,
  RowContentMobile,
  SearchMobile,
} from './Header.style';

interface Props {
  tabCurrent?: any;
  onRedirect: (href: string) => void;
  t: any;
}

const HeaderMobile = (props: Props) => {
  const { tabCurrent, onRedirect, t: translate } = props;
  const { isHome } = useRoute();

  return (
    <MainMobile style={{ position: isHome ? 'absolute' : 'relative' }}>
      <MainContentMobile>
        <RowContentMobile>
          <ColContentMobile span={3}>
            <Link href={`${process.env.NEXT_PUBLIC_USER_WEB}`}>
              <Image
                alt="icon"
                src={SRC_IMAGE.ICONUSER}
                preview={false}
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </ColContentMobile>

          <ColContentMobile span={18}>
            <SearchMobile>
              <Col
                span={5}
                className="d-flex justify-content-center align-items-center"
              >
                <DropdownSearchBar t={translate} />
              </Col>
              <Col span={1}>
                <div className="vertical-line-search" />
              </Col>
              <Col span={12}>
                <input className="inputSearch" placeholder="Bắt đầu tìm kiếm" />
              </Col>
              <Col span={4} className="d-flex justify-content-end">
                <ButtonOnSearch className="mx-1">
                  <SearchOutlined style={{ fontSize: '17px' }} />
                </ButtonOnSearch>
              </Col>
            </SearchMobile>
          </ColContentMobile>
          <ColContentMobile span={2}>
            {isHome ? <VectorTextMessage /> : <VectorTextMessageBlack />}
          </ColContentMobile>
        </RowContentMobile>
      </MainContentMobile>
    </MainMobile>
  );
};

export default HeaderMobile;
