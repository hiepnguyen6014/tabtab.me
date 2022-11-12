import { PostItemSell } from '@components';
import { MPostDetail } from '@models/MPostDetail';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

import { ListWrapper } from '../../../shared/ListPostsHorizontal/ListPostHorizontal.style';
import { ColWrap, SpotLightWrap, WrapperSpot } from '../Home.style';
import PostItem from './PostItem';
import PostItemH from './PostItemH';
import PostItemProp from './PostItemProp';
import PostItemV from './PostItemV';

interface Props {
  posts: MPostDetail[];
  noWrap?: boolean;
  t: any;
  arrayPostItem?: any[]; // Components item
  data: [];
  type: any;
}
const ListItem = (props: Props) => {
  const { data, t, type } = props;
  const [limitItems, setLimitItems] = React.useState(12);
  // layout for desktop only 8 products if screen is mobile, product will be 20 posts
  const listPost = () => {
    if (!limitItems) return data;
    const postShow = [];
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (postShow.length !== limitItems && data[i]?.isHidden !== 1) {
          postShow.push(data[i]);
        }
      }
    }
    return postShow;
  };

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

  const RenderItem = type => {
    switch (type) {
      case 1:
        return (
          <>
            {listPost().map((item, key) => (
              <ColWrap key={key} className="gutter-row" sm={24} lg={6} md={8}>
                <PostItem post={item} t={t} />
              </ColWrap>
            ))}
          </>
        );
      case 2:
        return (
          <>
            {listPost().map((item, key) => (
              <ColWrap key={key} className="gutter-row" sm={24} lg={12}>
                <PostItemV post={item} t={t} />
              </ColWrap>
            ))}
          </>
        );
      case 3:
        return (
          <>
            {listPost().map((item, key) => (
              <ColWrap key={key} className="gutter-row" sm={24} lg={12}>
                <PostItemH post={item} t={t} />
              </ColWrap>
            ))}
          </>
        );
      case 4:
        return (
          <>
            {listPost().map((item, key) => (
              <ColWrap key={key} className="gutter-row" sm={24} lg={6} md={8}>
                <PostItemProp post={item} t={t} />
              </ColWrap>
            ))}
          </>
        );
      default:
    }
  };

  const renderList = data ? <>{RenderItem(type)}</> : <></>;

  return renderList;
};

export default ListItem;
