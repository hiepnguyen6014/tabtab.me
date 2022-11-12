import { UserContext } from '@contexts';

/* eslint-disable react-hooks/exhaustive-deps */
import { MPostDetail } from '@models/MPostDetail';
import dynamic from 'next/dynamic';
import { useContext } from 'react';

import { PlaceHolderLoading } from '../../shared';
import { HomeLayout } from './Home.style';
import Academy from './HomeComponent/Academy';
import AdWords from './HomeComponent/AdWords';
import Opinion from './HomeComponent/Opinion';
import ProjectRealEstate from './HomeComponent/ProjectRealEstate';
import RealEstate from './HomeComponent/RealEstate';
import RecommendProperty from './HomeComponent/Recommend';
import SocialNetwork from './HomeComponent/SocialNetwork';
import SpotLight from './HomeComponent/SpotLight';
import Upcoming from './HomeComponent/Upcoming';

interface Props {
  postsByRating?: MPostDetail[];
  postsByPrice?: MPostDetail[];
  t?: any;
}
const HomePage = (props: Props) => {
  const { postsByRating, postsByPrice, t } = props;
  const { listUserSave, listPostLocation, currentUser } =
    useContext(UserContext);
  const DynamicBanner: any = dynamic(
    () => import('./BannerHome').then((mod: any) => mod.BannerHome),
    {
      loading: () => <PlaceHolderLoading height="500px" heightMb="250px" />,
    },
  );

  const DynamicRowPost = dynamic(() => import('./HomeComponent/RowPosts'), {
    loading: () => <PlaceHolderLoading height="500px" heightMb="150px" />,
  });

  return (
    <HomeLayout>
      <DynamicBanner t={t} />
      <Upcoming />

      <RecommendProperty />
    </HomeLayout>
  );
};
export default HomePage;
