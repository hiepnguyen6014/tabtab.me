import { MPostDetail } from '@models/MPostDetail';
import {
  IconApartement,
  IconCertuficate,
  IconStair,
  IconHouse
} from '@root/public/icons';
import { Button, Divider, Image, Typography } from 'antd';
import dynamic from 'next/dynamic';
import {
  DefaultContentInWrapper,
  DefaultRowTitle,
  DefaultWrapperWithBg,
} from '..';
import { ListWrapper } from "../../../shared/Utilities/Utilities.style"
import { RowPriceLeft, ImageSize, DefaultContentInWrapperMajor } from './Component.style';
import { SRC_IMAGE } from '@constants';

export const LayoutPartners = (props: { t: any; post: MPostDetail }) => {
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
        <DefaultContentInWrapperMajor grid={true}>
          <RowPriceLeft>
            <DefaultRowTitle>
                <label style={{ fontFamily: "Inter",fontSize:28, fontWeight:"700", marginBottom:20 }}>Partners</label>
            </DefaultRowTitle>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{marginRight:20}}>
                <label style={{ fontFamily: "Inter", fontWeight: '700', fontSize: 16, color: "#A7A7A7", marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
                  Thiết kế thi công
                </label>
                <ImageSize src={SRC_IMAGE.FITNESS} height={'auto'} width={'auto'} />
              </div>
              <div>
                <label style={{ fontFamily: "Inter", fontWeight: '700', fontSize: 16, color: "#A7A7A7", marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
                  Thiết kế thi công
                </label>
                <ImageSize src={SRC_IMAGE.PROPX} height={'auto'} width={'auto'} />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 100 }}>
              <div style={{marginRight:20}}>
                <label style={{ fontFamily: "Inter", fontWeight: '700', fontSize: 16, color: "#A7A7A7", marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
                  Thiết kế thi công
                </label>
                <ImageSize src={SRC_IMAGE.GLOCAL} height={'auto'} width={'auto'} />
              </div>
              <div>
                <label style={{ fontFamily: "Inter", fontWeight: '700', fontSize: 16, color: "#A7A7A7", marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
                  Thiết kế thi công
                </label>
                <ImageSize src={SRC_IMAGE.FITNESS} height={'auto'} width={'auto'} />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 100 }}>
              <div style={{marginRight:20}}>
                <label style={{ fontFamily: "Inter", fontWeight: '700', fontSize: 16, color: "#A7A7A7", marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
                  Thiết kế thi công
                </label>
                <ImageSize src={SRC_IMAGE.GLOCAL} height={'auto'} width={'auto'} />
              </div>
              <div>
                <label style={{ fontFamily: "Inter", fontWeight: '700', fontSize: 16, color: "#A7A7A7", marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
                  Thiết kế thi công
                </label>
                <ImageSize src={SRC_IMAGE.PROPX} height={'auto'} width={'auto'} />
              </div>
            </div>
          </RowPriceLeft>
        </DefaultContentInWrapperMajor>
      </DefaultWrapperWithBg>
    </>
  );
};
