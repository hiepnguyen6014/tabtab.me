import {
  AllItem,
  ButtonNav,
  ButtonTag,
  ColWrap,
  GeneralText,
  GeneralWrap,
  SpotlightText,
  WrapperContent,
  WrapperSpot,
} from '../../Home/Home.style';
import { Button, Pagination, Radio, Row, Typography } from 'antd';
import {
  ContentWrapper,
  RowWrap,
  TypographyText,
} from '../FindPersonDetails.style';
import { IconQuotes, NextArrow, PrevArrow } from 'public/icons';
import { PostItem, RecommendItem } from '../../Home/Recommend';
import React, { useState } from 'react';

import ListItem from '../../Home/HomeComponent/ListItem';
import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';
import { RadioSearch } from '@root/src/components/shared/SearchHome/SearchHome.style';
import RecommendProperty from '../../Home/HomeComponent/Recommend';

const Recommend = ({ data, t, fontSize }) => {
  const [limitItems, setLimitItems] = React.useState(12);
  // layout for desktop only 8 products if screen is mobile, product will be 20 posts

  const handleResize = (e: any) => {
    if (e.target.outerWidth <= 1025 && e.target.outerWidth >= 768) {
      setLimitItems(6); // Tablet will be 6 items on row
    } else if (e.target.outerWidth <= 768) {
      setLimitItems(0); // List scroll
    } else if (e.target.outerWidth > 1024) {
      setLimitItems(8); //
    }
  };
  React.useEffect(() => {
    window.addEventListener('resize', handleResize, true);
    return () => window.removeEventListener('resize', handleResize, true);
  }, []);

  const [showContent, setShowContent] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState(1);

  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);

  const listTag = [
    { id: 1, value: 'Sell' },
    { id: 2, value: 'Auction ' },
    { id: 3, value: 'Rent' },
    { id: 4, value: 'Transfer' },
  ];

  const postItem: PostItem = {
    price: '3.000.000$',
    wasPrice: '4.500.000$ ',
    title: 'Sir Francis Drake Blvd. Retail /Office 312 Sir Francis Drake',
  };

  const listPost: PostItem[] = Array(8).fill(postItem);

  const handleBtnClick = (id: number) => {
    setActive(id);
  };
  const hanldeShowAll = () => {
    setShowAll(true);
  };
  return (
    <WrapperSpot>
      <GeneralText>
        <Typography.Title
          className="title-general"
          // style={{ fontSize: fontSize ? fontSize : '' }}
        >
          Recommend Property
        </Typography.Title>
        <GeneralWrap>
          <div className="general-between-wrap">
            <div className="general-wrap">
              <IconQuotes />
              <Typography.Title className="content-general">
                Bất động sản đề xuất cho anh/chị [display name]
              </Typography.Title>
            </div>
          </div>
        </GeneralWrap>
      </GeneralText>

      <WrapperContent>
        <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div></div>
        </Row>
        <RowWrap
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <ListItem t={t} data={data} type={1} posts={[]} />
        </RowWrap>
      </WrapperContent>

      <PaginationWrapCustom total={10} pageSize={1} />
    </WrapperSpot>
  );
};

export default Recommend;
