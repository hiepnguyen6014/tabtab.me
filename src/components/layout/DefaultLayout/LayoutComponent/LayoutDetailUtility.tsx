import { MPostDetail } from '@models/MPostDetail';
import dynamic from 'next/dynamic';
import {
  DefaultContentInWrapper,
  DefaultRowTitle,
  DefaultWrapperWithBg,
} from '..';

export const LayDetailUtility = (props: { t: any; post: MPostDetail }) => {
  const { t: translate, post } = props;
  const DynamicCheckBox: any = dynamic(() =>
    import('../../../shared/ListCheckBox').then((mod: any) => mod.ListCheckBox)
  );
  if(!post.realEstateUtilData.length) return <></>
  return (
    <>
      <DefaultWrapperWithBg>
        <DefaultContentInWrapper>
          <div>
            <DefaultRowTitle>
              <h1 typeof="title-detail">{translate('detail.utility')}</h1>
            </DefaultRowTitle>
            <DynamicCheckBox utils={post.realEstateUtilData} />
          </div>
        </DefaultContentInWrapper>
      </DefaultWrapperWithBg>
    </>
  );
};
