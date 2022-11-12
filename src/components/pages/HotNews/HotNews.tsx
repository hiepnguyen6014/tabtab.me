import { ROUTES } from '@constants';
import { MNewsPost } from '@models/MNewsPost';
import { Divider, Typography } from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';

import { DefaultContentNoGrid, DefaultWrapperWithBg } from '../../layout';
import { PaginationCustom } from '../../shared/Pagination';
import { ProductWrapper } from './hotnews-style.style';

export default function HotNews(props: {
  postList: MNewsPost[];
  total: number;
  title?: string;
  t: any;
}) {
  const { postList, total, title, t: translate } = props;
  const renderTotal = (total, range) => {
    return `${range[0]} - ${range[1]} của ${total} tin`;
  };
  const DynamicNewsItem = dynamic(
    () => import('../../shared/PostItem/PostItemHotNews'),
  );
  const arrHref = [
    {
      name: translate(ROUTES.HOTNEWS_PAGE.name),
      href: ROUTES.HOTNEWS_PAGE.href,
    },
  ];

  return (
    <>
      <DefaultWrapperWithBg>
        <DefaultContentNoGrid>
          <Typography.Title level={5}>
            {translate('common.preResult')} {total}{' '}
            {translate('common.subResult')}
          </Typography.Title>
          <br />
          <br />
          <ProductWrapper>
            {postList.length > 0 ? (
              postList.map((post, key) => (
                <>
                  <DynamicNewsItem t={translate} post={post} key={key} />
                  <Divider />
                </>
              ))
            ) : (
              // Return no result if postList empty
              <Typography.Title level={4}>
                {translate('common.noResult')}
              </Typography.Title>
            )}

            <PaginationCustom total={total} showTotal={renderTotal} />
          </ProductWrapper>
        </DefaultContentNoGrid>
      </DefaultWrapperWithBg>
    </>
  );
}
