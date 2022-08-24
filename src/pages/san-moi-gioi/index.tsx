import { PARAMS, PUBLIC_ROUTES, ROUTES } from '@constants';
import { getListRealEstate } from '@root/src/core/services';
import { removeEmptyType } from '@utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { MPostDetail } from '@models/MPostDetail';
import { MFilter } from '@models/MFilter';
import LayoutCategory from '@root/src/components/layout/LayoutCategory/LayoutCategory';
import { filterKey } from '@contexts';

const Landing: React.FC<{
  postList: MPostDetail[];
  total: number;
  title?: string;
}> = ({ postList, total, title }) => {
  const { t: translate } = useTranslation('common');
  const arrHref = [
    {
      name: translate(ROUTES.BROKERAGE_FLOOR_PAGE.name),
      href: ROUTES.BROKERAGE_FLOOR_PAGE.href,
    },
  ];

  return (
    <LayoutCategory
      t={translate}
      toggle
      posts={postList}
      total={total}
      title={title}
      arrayHref={arrHref}
    />
  );
};

export async function getServerSideProps(context: any) {
  const { query, locale } = context;
  const filter = removeEmptyType({
    ...new MFilter(query),
  });
  if(!query[filterKey.realEstatePostType.idQuery]){
    filter['filter'] = {...filter['filter'], realEstatePostTypeId: 1}  
  }
  filter['filter'] = {...filter['filter'], agency : 0}
  const data: any = await getListRealEstate(filter, query[PARAMS.PAGE]);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      postList: data.data,
      total: data.total || 0,
      title: PUBLIC_ROUTES.BROKERAGE_FLOOR.title,
    },
  };
}
export default Landing;
