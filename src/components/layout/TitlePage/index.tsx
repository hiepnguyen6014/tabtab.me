import { filterKey } from '@contexts';
import { Typography } from 'antd';
import { useRouter } from 'next/router';
import { BreadcrumbCustom } from '../../shared/Breadcrum/index';

interface Props {
  t: any;
  arrayHref?: { name: string; href?: string }[];
  title?: string;
}

export const TitlePage = (props: Props) => {
  const { t, arrayHref, title } = props;
  const { query } = useRouter();
  return (
    <>
      <BreadcrumbCustom t={t} arrHref={arrayHref} />
      <Typography.Title level={4} ellipsis={{ rows: 2 }}>
        {t(title)}
      </Typography.Title>
      {query[filterKey.searchText.idQuery]?.toString()?.trim() && (
        <Typography.Title level={5} ellipsis={{ rows: 2 }}>
          {t('filter.keyWord')}:{' '}
          {query[filterKey.searchText.idQuery]?.toString()?.trim()}
        </Typography.Title>
      )}
    </>
  );
}