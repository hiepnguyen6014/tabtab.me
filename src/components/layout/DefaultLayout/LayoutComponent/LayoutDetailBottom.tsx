
import { ROUTES } from '@constants';
import { filterKey } from '@contexts';
import { MPostDetail } from '@models/MPostDetail';
import { Grid, Typography } from '@mui/material';
import { IconCheck } from '@root/public/icons';
import { Col, Divider, Row } from 'antd';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import {
  DefaultContentInWrapper, DefaultRowTitle,
  DefaultWrapperWithBg
} from '..';
import { TextParagraph } from '../../../shared/TextParagraph';
import { WidgetUserInfo } from '../../../shared/WidgetUserInfo';
import { Block, RowActions, RowPrice, RowPriceLeft } from './Component.style';



export const LayoutDetailBottom = (props: {
  t: any;
  hrefMain?: { name: string; href: string };
  post?: MPostDetail;
}) => {
  const { t: translate, post, hrefMain } = props;

  const [pathname, setPathname] = useState({
    1: ROUTES.MAIN_FLOOR.href,
    2: ROUTES.BROKERAGE_FLOOR_PAGE.href,
    default: ROUTES.MAIN_FLOOR.href
  }[post.agency])
  const arrHref = [
    hrefMain,
    { name: post.AreaProvinceName, href: pathname, query: { [filterKey.areaProvinceId.idQuery]: post.AreaProvinceId } },
    { name: post.AreaDistrictName, href: pathname, query: { [filterKey.areaProvinceId.idQuery]: post.AreaProvinceId, [filterKey.areaDistrictId.idQuery]: post.AreaDistrictId } },
    { name: post.AreaWardName, href: pathname, query: { [filterKey.areaProvinceId.idQuery]: post.AreaProvinceId, [filterKey.areaDistrictId.idQuery]: post.AreaDistrictId, [filterKey.areaWardId.idQuery]: post.AreaWardId } },
  ];

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
            <RowPrice>
              <RowPriceLeft>
                <label style={{ fontSize: 28, fontWeight: "700" }}>Highlight</label>
                <Grid container spacing={2}>
                  <Grid style={{ textAlign: 'center' }} item xs={4} md={4} lg={2}>
                    <Block>
                      <div style={{ fontSize: 36, fontWeight: '900' }}>7.0%</div>
                      <Divider style={{ height: 2, marginTop: 8, marginBottom: 8, backgroundColor: '#222222' }} />
                      <div style={{ fontWeight: '700' }}>Guaranteed Rental Return</div>
                    </Block>
                  </Grid>

                  <Grid item xs={4} md={4} lg={2}>
                    <Block>
                      <div style={{ fontSize: 36, fontWeight: '900' }}>10%</div>
                      <Divider style={{ height: 2, marginTop: 8, marginBottom: 8, backgroundColor: '#222222' }} />
                      <div style={{ fontWeight: '700' }}>Downpayment Ratio</div>
                    </Block>
                  </Grid>
                  <Grid item xs={4} md={4} lg={2}>
                    <Block>
                      <div style={{ fontSize: 36, fontWeight: '900' }}>40%</div>
                      <Divider style={{ height: 2, marginTop: 8, marginBottom: 8, backgroundColor: '#222222' }} />
                      <div style={{ fontWeight: '700' }}>Sold Rate</div>
                    </Block>
                  </Grid>
                  <Grid item xs={4} md={4} lg={2}>
                    <Block>
                      <div style={{ fontSize: 36, fontWeight: '900' }}>12%</div>
                      <Divider style={{ height: 2, marginTop: 8, marginBottom: 8, backgroundColor: '#222222' }} />
                      <div style={{ fontWeight: '700' }}>Price Increase</div>
                    </Block>
                  </Grid>
                  <Grid item xs={4} md={4} lg={2}>
                    <Block>
                      <div style={{ fontSize: 36, fontWeight: '900' }}>80%</div>
                      <Divider style={{ height: 2, marginTop: 8, marginBottom: 8, backgroundColor: '#222222' }} />
                      <div style={{ fontWeight: '700' }}>Contruction Progress</div>
                    </Block>
                  </Grid>
                  <Grid item xs={4} md={4} lg={2}>
                    <Block>
                      <div style={{ fontSize: 36, fontWeight: '900' }}>2022</div>
                      <Divider style={{ height: 2, marginTop: 8, marginBottom: 8, backgroundColor: '#222222' }} />
                      <div style={{ fontWeight: '700' }}>Completion Year</div>
                    </Block>
                  </Grid>
                </Grid>
              </RowPriceLeft>
            </RowPrice>
            <DefaultRowTitle style={{ marginTop: 80 }}>
              <label style={{ fontFamily: "Inter", fontSize: 28, fontWeight: "700", marginBottom: 20 }}>{translate('detail.description')}</label>
            </DefaultRowTitle>
            <TextParagraph t={translate} text={post.realEstateDescription} size={16} />
            <div style={{ marginTop: 80 }}>
              <DefaultRowTitle>
                <label style={{ fontFamily: "Inter", fontSize: 28, fontWeight: "700", marginBottom: 20 }}>{translate('detail.feature')}</label>
              </DefaultRowTitle>
              <DynamicUtility t={translate} post={post} />
            </div>
          </div>
          <div>
            <RowActions />
            <WidgetUserInfo t={translate} post={props.post} />
            {/* <DynamicNotifyOutdate /> */}
          </div>
        </DefaultContentInWrapper>
      </DefaultWrapperWithBg>
    </>
  );
};
