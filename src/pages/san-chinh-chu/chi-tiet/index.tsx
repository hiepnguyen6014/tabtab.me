/* eslint-disable react-hooks/exhaustive-deps */
import { PARAMS, ROUTES } from '@constants';
import { TRACKING_GOOGLE } from '@constants';
import * as ga from '@ga';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

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
    name: translate(`${ROUTES.MAIN_FLOOR.name}`),
    href: ROUTES.MAIN_FLOOR.href,
  };
  useEffect(() => {
    ga.event(window, TRACKING_GOOGLE.USER_POST);
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
