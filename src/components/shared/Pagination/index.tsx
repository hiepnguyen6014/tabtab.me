import { PARAMS } from '@constants';
import { useRouter } from 'next/router';
import { HTMLAttributes } from 'react';

import { PaginationWrapper } from './Pagination.style';

interface Props extends HTMLAttributes<HTMLDivElement> {
  total?: number;
  showTotal?: Function;
  defaultCurrent?: number;
  className?: string;
}

export const PaginationCustom = (props: Props) => {
  const { total, showTotal, className } = props;
  const router = useRouter();
  const onPageChange = (page: number) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, [PARAMS.PAGE]: page },
    });
  };
  return (
    <>
      <PaginationWrapper
        showSizeChanger={false}
        total={total}
        defaultPageSize={20}
        current={parseInt(
          router.query.page && typeof router.query.page == 'string'
            ? router.query.page
            : '1',
        )}
        showTotal={(total, range) => (showTotal ? showTotal(total, range) : '')}
        className={className ? className : ''}
        onChange={onPageChange}
        hideOnSinglePage
      />
    </>
  );
};
