import { PARAMS, ROUTES } from '@constants';
import { TRACKING_GOOGLE } from '@constants';
import * as ga from '@ga';
import { getPostTypeId } from '@utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import DefaultLayout from '../../../components/layout/DefaultLayout/DefaultLayout';
import { PlaceHolderLoading } from '../../../components/shared/Loading';

const DetailProjectPage: React.FC<{ query: any }> = ({ query }) => {
  const { t: translate } = useTranslation('common');
  const DynamicDetail = dynamic(
    () => import('../../../components/layout/DefaultLayout/LayoutDetail'),
    {
      loading: () => <PlaceHolderLoading height="500px" />,
    },
  );
  const hrefMain = {
    name: translate(`${ROUTES.BROKERAGE_FLOOR_PAGE.name}`),
    href: ROUTES.BROKERAGE_FLOOR_PAGE.href,
  };
  useEffect(() => {
    ga.event(window, TRACKING_GOOGLE.AGENCY_POST);
    ga.pageView(window, {
      page_title: 'Chi tiết bài đăng',
      // page_path: ROUTES.BROKERAGE_FLOOR_PAGE.href + ROUTES.DETAIL.href + '?id=' + query[PARAMS.DETAIL_POST]
    });
  }, []);
  return (
    <DefaultLayout t={translate} showHeaderMobile={false}>
      <DynamicDetail
        t={translate}
        hrefMain={hrefMain}
        idPost={query[PARAMS.DETAIL_POST]}
      />
    </DefaultLayout>
  );
};

export async function getServerSideProps(context: any) {
  const { query = {}, locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      query: query,
    },
  };
}

export default DetailProjectPage;
