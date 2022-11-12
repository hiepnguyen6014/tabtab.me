import { INFOMATION_ROUTES, ROUTES } from '@constants';
import { LayoutLandingPage } from '@root/src/components/layout/DefaultLayout/LayoutLandingPage';
import { IGeneral } from '@root/src/core/types/post';
import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getContentForLandingPage } from '../../core/services/post/index';

const Landing: NextPage<{ content?: string }> = ({ content }) => {
  const { t: translate } = useTranslation('common');
  const arrHref = [
    {
      name: translate(INFOMATION_ROUTES.RULES.name),
      href: INFOMATION_ROUTES.RULES.href,
    },
  ];
  return (
    <LayoutLandingPage
      t={translate}
      content={content}
      href={arrHref}
      title={INFOMATION_ROUTES.RULES.title}
    />
  );
};

export async function getServerSideProps(context: any) {
  const { locale } = context;
  const content: IGeneral = await getContentForLandingPage();
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      content: content.generalRule || '',
    },
  };
}

export default Landing;
