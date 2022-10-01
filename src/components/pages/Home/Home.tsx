/* eslint-disable react-hooks/exhaustive-deps */
import { MPostDetail } from '@models/MPostDetail';
import dynamic from 'next/dynamic';
import { PlaceHolderLoading } from '../../shared';
import SpotLight from './HomeComponent/SpotLight';
import Opinion from './HomeComponent/Opinion';
import AdWords from './HomeComponent/AdWords';
import RecommendProperty from './HomeComponent/Recommend';
import Upcoming from './HomeComponent/Upcoming';
import { useContext } from 'react';
import { UserContext } from '@contexts';
import Academy from './HomeComponent/Academy';
import SocialNetwork from './HomeComponent/SocialNetwork';
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
    </div>
  );
};
export default HomePage;
