import {
  ButtonClasses,
  FDesktop,
  RowWrap,
} from '../../components/pages/Search/Search.style';
import { Col, Divider, Dropdown, Menu, Popover, Row, Typography } from 'antd';
import { IconArrowDown, IconBell } from '@root/public/icons';
import { PARAMS, POST_TYPE_PARAMS, PUBLIC_ROUTES, ROUTES } from '@constants';
import { UserContext, filterKey } from '@contexts';
import { checkIsHomePage, removeEmptyType } from '@utils';
import { getListRealEstate, getPostByRating } from '@root/src/core/services';

import { FilterBackground } from '@root/src/components/layout/LayoutCategory/Container.style';
import { FilterProvider } from '@root/src/core/contexts/filterContext';
import HeaderComponent from '@root/src/components/layout/Header';
import { MFilter } from '@models/MFilter';
import { MPostDetail } from '@models/MPostDetail';
import RealEstateFilter from '@root/src/components/layout/RealEstateFilter';
import Search from '../../components/pages/Search/Search';
import { SearchDataProps } from '@root/src/core/types/filter';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const SearchPage: React.FC<{
  postList: SearchDataProps;
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
      <HeaderComponent t={translate} />
      <Search t={translate} posts={postList} />
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { query, locale } = context;

  let listPost: any = [];
  let title = '';
  const filter = removeEmptyType({ ...new MFilter(query) });
  if (!query[filterKey.realEstatePostType.idQuery]) {
    filter['filter'] = { ...filter['filter'] };
  }
  filter['filter'] = { ...filter['filter'] };
  const data: any = await getListRealEstate(filter);
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

export default SearchPage;
