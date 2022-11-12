import { MPostDetail } from '@models/MPostDetail';
import dynamic from 'next/dynamic';
import {
  DefaultContentInWrapper,
  DefaultLinkText,
  DefaultRowTitle,
  DefaultWrapperWithBg,
} from '..';

export const LayoutDetailRESLocation = (props: {
  t: any;
  post: MPostDetail;
}) => {
  const { t: translate, post } = props;
  const DynamicLocation: any = dynamic(() =>
    import('../../../shared/LocationRealEstate').then(
      (mod: any) => mod.LocationRealEstate
    )
  );
  if(!post.linkLocation) return <></>
  return (
    <>
      <DefaultWrapperWithBg>
        <DefaultContentInWrapper>
          <div>
            <DefaultRowTitle>
              <h1 typeof="title-detail">
                {translate('detail.location.title')}
              </h1>
              <DefaultLinkText target="_blank" href={post.linkLocation}>
                {translate('button.viewLocation')}
              </DefaultLinkText>
            </DefaultRowTitle>
            <DynamicLocation
              t={translate}
              arrayLocation={[
                post.realEstateLocationHomeNumber,
                post.AreaWardName,
                post.AreaDistrictName,
                post.AreaProvinceName,
              ]}
            />
          </div>
        </DefaultContentInWrapper>
      </DefaultWrapperWithBg>
    </>
  );
};
