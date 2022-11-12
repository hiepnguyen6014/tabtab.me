import { PostItemSell } from '@components';
import { MPostDetail } from '@models/MPostDetail';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

import { ListWrapper } from './ListPostHorizontal.style';

interface Props {
  posts: MPostDetail[];
  noWrap?: boolean;
  t: any;
  arrayPostItem?: any[]; // Components item
}
const ListPostsHorizontal = (props: Props) => {
  const { noWrap = false, posts, t, arrayPostItem } = props;
  const [limitItems, setLimitItems] = useState(8);
  // layout for desktop only 8 products if screen is mobile, product will be 20 posts
  const listPost = () => {
    if (!limitItems) return props.posts;
    const postShow = [];
    for (let i = 0; i < posts.length; i++) {
      if (postShow.length !== limitItems && posts[i]?.isHidden !== 1) {
        postShow.push(posts[i]);
      }
    }
    return postShow;
  };
  // limitItems != 0 ? props.posts.slice(0, limitItems) : props.posts;

  const handleResize = (e: any) => {
    if (e.target.outerWidth <= 1025 && e.target.outerWidth >= 768) {
      setLimitItems(6); // Tablet will be 6 items on row
    } else if (e.target.outerWidth <= 768) {
      setLimitItems(0); // List scroll
    } else if (e.target.outerWidth > 1024) {
      setLimitItems(8); //
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize, true);
    return () => window.removeEventListener('resize', handleResize, true);
  }, []);

  const renderList = posts ? (
    <ListWrapper nowrap={noWrap.toString()}>
      {listPost().map(post => (
        <PostItemSell t={t} post={post} key={post.realEstateId} />
      ))}
    </ListWrapper>
  ) : (
    <></>
  );

  return renderList;
};

export default ListPostsHorizontal;
