import { PARAMS, POST_TYPE_PARAMS, PUBLIC_ROUTES, ROUTES } from '@constants';
import { getListRealEstate, getPostByRating } from '@root/src/core/services';
import { removeEmptyType } from '@utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { MFilter } from '@models/MFilter';
import { MPostDetail } from '@models/MPostDetail';
import { filterKey, UserContext } from '@contexts';
import FindpersonDetailsComponent from "@root/src/components/pages/FindPersonDetails"

const FindPersonDetails: React.FC<{
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
    <>
      <FindpersonDetailsComponent translate={translate} />
    </>

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

export default FindPersonDetails;
