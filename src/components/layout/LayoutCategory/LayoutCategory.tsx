import { MPostDetail } from '@models/MPostDetail';
import { Typography } from 'antd';
import dynamic from 'next/dynamic';

import CategoryLayout from '.';
import {
  DefaultContentNoGrid,
  DefaultProductWrapper,
  DefaultWrapperWithBg,
  TitlePage,
} from '..';
import { PlaceHolderLoading } from '../../shared';
import { RowCountResult } from '../../shared/RowCountResult';

interface Props {
  posts?: MPostDetail[];
  t: any;
  children?: any;
  total?: number;
  title?: string;
  toggle?: boolean;
  arrayHref?: any[];
}

const LayoutCategory = (props: Props) => {
  const {
    t: translate,
    posts,
    total,
    title,
    arrayHref,
    toggle = false,
  } = props;

  const renderTotal = (total, range) => {
    return `${range[0]} - ${range[1]} của ${total} tin`;
  };

  const DynamicDefaultItem = dynamic(
    () => import('../../shared/PostItem/PostItemSell'),
    {
      loading: () => <PlaceHolderLoading height="300px" />,
    },
  );

  const DynamicPagination: any = dynamic(() =>
    import('../../shared/Pagination/index').then(
      (mod: any) => mod.PaginationCustom,
    ),
  );

  const renderItems = !posts?.length ? (
    <Typography.Title level={4}>
      {translate('common.noResult')}
    </Typography.Title>
  ) : (
    posts.map((post, key) => (
      <DynamicDefaultItem t={translate} post={post} key={key} />
    ))
  );

  return (
    <CategoryLayout t={translate} toggleType={toggle}>
      <DefaultWrapperWithBg />

      <DefaultWrapperWithBg>
        <DefaultContentNoGrid>
          <TitlePage t={translate} arrayHref={arrayHref} title={title} />
        </DefaultContentNoGrid>
      </DefaultWrapperWithBg>

      {props.children ? (
        props.children
      ) : (
        <DefaultWrapperWithBg>
          <DefaultContentNoGrid>
            <RowCountResult t={translate} count={total} />
            <DefaultProductWrapper>{renderItems}</DefaultProductWrapper>
            <DynamicPagination total={total} showTotal={renderTotal} />
          </DefaultContentNoGrid>
        </DefaultWrapperWithBg>
      )}
    </CategoryLayout>
  );
};

export default LayoutCategory;
