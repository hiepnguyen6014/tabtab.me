import { SurroundingAdvantages } from '../../../shared/SurroundingAdvantages';
import { MPostDetail } from '@models/MPostDetail';
import {
  DefaultContentInWrapper,
  DefaultRowTitle,
  DefaultWrapperWithBg,
} from '..';

export const LayoutDetailAround = (props: { t: any; post: MPostDetail }) => {
  const { t: translate, post } = props;
  if(!post.realEstateCommonPlace.length) return <></>
  return (
    <>

      <DefaultWrapperWithBg>
        <DefaultContentInWrapper>
          <div>
            <DefaultRowTitle>
              <h1 typeof="title-detail">{translate('detail.commonPlace')}</h1>
            </DefaultRowTitle>
            <SurroundingAdvantages listAvantages={post.realEstateCommonPlace} />
          </div>
        </DefaultContentInWrapper>
      </DefaultWrapperWithBg>
    </>
  );
};
