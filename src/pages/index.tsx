import { HomePage } from '../components/pages';
import DefaultLayout  from '../components/layout/DefaultLayout/DefaltLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {
  getPostByRating,
  getPostByPrice,
} from '../core/services';
import { useTranslation } from 'next-i18next';
import { MPostDetail } from '@models/MPostDetail';
import dynamic from 'next/dynamic';
import { Loading } from '../components/shared';
import { useEffect, useState } from 'react';
import * as ga from '@ga';
import { TRACKING_GOOGLE } from '@constants';
import "@fontsource/inter";
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css'; 
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css'; 
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';

const Home: React.FC<{
  postsByRating: MPostDetail[];
  postsByPrice: MPostDetail[];
}> = ({ postsByRating, postsByPrice }) => {
// }> = () => {
  const { t } = useTranslation('common')
  const DyanmicHomePage = dynamic(()=> import('../components/pages/Home/Home'), {
    loading:()=><Loading/>
  })

  // const [query, setQuery] = useState("");

  // const search = () => {
  //   ga.event({
  //     action: "search",
  //     params : {
  //       search_term: query
  //     }
  //   })
  // }

  // const searchItem = (event) => setQuery(event.target.value)

  // const [postsByPrice, setPostsByPrice] = useState<any>([]);
  // const [postsByRating, setPostsByRating] = useState<any>([]);

  // useEffect(() => {
  //   loadData();
  // }, []);

  // const loadData = async () => {
  //   const results = await Promise.all([getPostByPrice(), getPostByRating()]);
  //   setPostsByPrice(results[0].data);
  //   setPostsByRating(results[1].data);
  // }

  // Tracking event
  useEffect(() => {
    ga.event(window, TRACKING_GOOGLE.HOME_PAGE_ACCESS);
  }, []);

  return <DefaultLayout t={t}>
        <DyanmicHomePage
          postsByRating={postsByRating}
          postsByPrice={postsByPrice}
          t={t}
        />
      </DefaultLayout>
};
export async function getServerSideProps(context: any) {
  const {locale} = context
  const listByPrice: any = await getPostByPrice();
  const listByRating: any = await getPostByRating();
  // const results = await Promise.all([getPostByPrice(), getPostByRating()]);
  // const listByPrice: any = results[0];
  // const listByRating: any = results[1];
  return {
    props: {
      ...await serverSideTranslations(locale,['common']),      
      postsByRating: listByRating.data,
      postsByPrice: listByPrice.data,
    },
  };
}

export default Home;
