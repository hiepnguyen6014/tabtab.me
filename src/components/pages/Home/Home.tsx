import Academy from './HomeComponent/Academy';
import AdWords from './HomeComponent/AdWords';
/* eslint-disable react-hooks/exhaustive-deps */
import { MPostDetail } from '@models/MPostDetail';
import Opinion from './HomeComponent/Opinion';
import { PlaceHolderLoading } from '../../shared';
import ProjectRealEstate from './HomeComponent/ProjectRealEstate';
import RealEstate from './HomeComponent/RealEstate';
import RecommendProperty from './HomeComponent/Recommend';
import SocialNetwork from './HomeComponent/SocialNetwork';
import SpotLight from './HomeComponent/SpotLight';
import Upcoming from './HomeComponent/Upcoming';
import { UserContext } from '@contexts';
import dynamic from 'next/dynamic';
import { useContext } from 'react';
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
    }
  );

  const DynamicRowPost = dynamic(() => import('./HomeComponent/RowPosts'), {
    loading: () => <PlaceHolderLoading height="500px" heightMb="150px" />,
  });

  return (
    <div>
      <DynamicBanner t={t} />
      <Upcoming />
      <SpotLight />
      <Opinion />
      <AdWords />
      {/* <Academy /> */}
      <RecommendProperty />
      {/* <SocialNetwork /> */}
      <RealEstate/>
      <ProjectRealEstate/>
    </div>
  );
};
export default HomePage;
