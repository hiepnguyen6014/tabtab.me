import { Notification } from '../../../shared/Notification';
import { BoxVideo } from '../../../shared/BoxVideo';
import { MPostDetail } from '@models/MPostDetail';
import dynamic from 'next/dynamic';
import {
  DefaultContentInWrapper,
  DefaultRowTitle,
  DefaultWrapperWithBg,
} from '..';

export const LayoutDetailAttach = (props: { t: any; post: MPostDetail }) => {
  const { t: translate, post } = props;
  const DynamicImageAttach = dynamic(
    () => import('../../../shared/ImageCarouseWithCount/ImageCarouseWithCount')
  );
  return (
    <>
      <DefaultWrapperWithBg>
        <DefaultContentInWrapper>
          <div>
            {post.realEstateVideo && (
              <>
                <DefaultRowTitle>
                  <h1 typeof="title-detail">{translate('detail.video')}</h1>
                </DefaultRowTitle>
                <BoxVideo
                  thumbnail={post.realEstateImage}
                  videoUrl={post.realEstateVideo}
                />
              </>
            )}
            <br />
            <br />
            {
              post.arrayImage.length ? <>
                <DefaultRowTitle>
                  <h1 typeof="title-detail">{translate('detail.image')}</h1>
                </DefaultRowTitle>
                <DynamicImageAttach images={post.arrayImage} />
              </> : null
            }
            <Notification t={translate} idPost={post.realEstateId} />
          </div>
        </DefaultContentInWrapper>
      </DefaultWrapperWithBg>
    </>
  );
};
