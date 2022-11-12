import { MPostDetail } from '@models/MPostDetail';
import dynamic from 'next/dynamic';
import {
  DefaultContentInWrapper,
  DefaultRowTitle,
  DefaultWrapperWithBg,
} from '..';

export const LayoutDetailRESSpecify= (props: { t: any; post: MPostDetail }) => {
  const { t: translate, post } = props;
  const DynamicUtility = dynamic(
    () => import('../../../shared/Utilities/ListUtilities')
  );
  const DynamicNotifyOutdate = dynamic(
    () => import('../../../shared/WidgetUserInfo/NotifyOutdate').then(
      (mod: any) => mod.NotifyOutdate
    )
  );
  
  return (
    <>
      <DefaultWrapperWithBg>
        <DefaultContentInWrapper grid={true}>
          <div>
            <DefaultRowTitle>
              <h1 style={{fontFamily:"Inter"}} typeof="title-detail">Project overview</h1>
            </DefaultRowTitle>
            <DynamicUtility t={translate} post={post} />
          </div>
          <div>
            <div style={{height:20}}/>
            <DynamicNotifyOutdate/>
          </div>
        </DefaultContentInWrapper>
      </DefaultWrapperWithBg>
    </>
  );
};
