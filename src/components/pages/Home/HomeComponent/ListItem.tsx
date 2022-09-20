import React, { useEffect, useState } from 'react';
import { MPostDetail } from '@models/MPostDetail';
import PostItem from './PostItem';
import PostItemH from './PostItemH';
import PostItemV from './PostItemV';
import PostItemProp from './PostItemProp';
interface Props {
  posts: MPostDetail[];
  noWrap?: boolean;
  t: any,
  arrayPostItem?: any[], // Components item
  data: [],
  type: any
}
const ListItem = (props: Props) => {
  const { data, t, type } = props
  const [limitItems, setLimitItems] = React.useState(12);
  // layout for desktop only 8 products if screen is mobile, product will be 20 posts
  const listPost = () => {
    if (!limitItems) return data
    const postShow = []
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (postShow.length !== limitItems && data[i]?.isHidden !== 1) {
          postShow.push(data[i])
        }
      }
    }
    return postShow
  }

  const handleResize = (e: any) => {
    if (e.target.outerWidth <= 1025 && e.target.outerWidth >= 768) {
      setLimitItems(6); // Tablet will be 6 items on row
    } else if (e.target.outerWidth <= 768) {
      setLimitItems(0); // List scroll
    } else if (e.target.outerWidth > 1024) {
      setLimitItems(8); //
    }
  }
  React.useEffect(() => {
    window.addEventListener('resize', handleResize, true)
    return () => window.removeEventListener('resize', handleResize, true)
  }, [])

  const RenderItem = (type) => {
    switch (type) {
      case 1:
        return (
          <>
            {listPost().map((item, key) => (
              <div style={{ margin: '5px', height: '100%', width: '290px' }}>
                <PostItem post={item} t={t} />
              </div>
            )
            )}
          </>
        )
      case 2:
        return (
          <>
            {listPost().map((item, key) => (
              <div style={{ margin: '5px', height: '100%', width: '290px' }}>
                <PostItemV post={item} t={t} />
              </div>
            )
            )}
          </>
        )
      case 3:
        return (
          <>
            {listPost().map((item, key) => (
              <div style={{ margin: '5px', height: '100%', width: '290px' }}>
                <PostItemH post={item} t={t} />
              </div>
            )
            )}
          </>
        )
      case 4:
        return (
          <>
            {listPost().map((item, key) => (
              <div style={{ margin: '5px', height: '100%', width: '290px' }}>
                <PostItemProp post={item} t={t} />
              </div>
            )
            )}
          </>
        )
      default:
    }
  }

  const renderList = data ? (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {RenderItem(type)}
    </div>
  ) : (
    <></>
  );

  return renderList;
}

export default ListItem