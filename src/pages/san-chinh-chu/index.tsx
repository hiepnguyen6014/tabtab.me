import { PARAMS, POST_TYPE_PARAMS, PUBLIC_ROUTES, ROUTES } from '@constants';
import { UserContext, filterKey } from '@contexts';
import { MFilter } from '@models/MFilter';
import { MPostDetail } from '@models/MPostDetail';
import LayoutCategory from '@root/src/components/layout/LayoutCategory/LayoutCategory';
import { getListRealEstate } from '@root/src/core/services';
import { removeEmptyType } from '@utils';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useContext } from 'react';

const ProjectPage: React.FC<{
  postList: MPostDetail[];
  total: number;
  title?: string;
  query?: any;
}> = ({ postList, total, title, query }) => {
  const { t: translate } = useTranslation('common');
  const arrHref = [
    { name: translate(ROUTES.MAIN_FLOOR.name), href: ROUTES.MAIN_FLOOR.href },
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
  let listPost: any = [];
  let title = '';
  const filter = removeEmptyType({ ...new MFilter(query) });
  if (!query[filterKey.realEstatePostType.idQuery]) {
    filter['filter'] = { ...filter['filter'], realEstatePostTypeId: 1 };
  }
  filter['filter'] = { ...filter['filter'], agency: 1 };
  const data: any = await getListRealEstate(filter, query[PARAMS.PAGE]);
  listPost = data;
  title = ROUTES.MAIN_FLOOR.title;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      postList: listPost.data || [],
      total: listPost.total || 0,
      title: title,
      query: query,
    },
  };
}

export default ProjectPage;
