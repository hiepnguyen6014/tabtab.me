
import { BreadcrumbCustom } from '../../../shared/Breadcrum/index';
import { ButtonSave } from '../../../shared/ButtonSave/index';
import { ButtonShare } from '../../../shared/ButtonShare';
import { TextParagraph } from '../../../shared/TextParagraph';
import { WidgetUserInfo } from '../../../shared/WidgetUserInfo';
import { Block } from './Component.style';

import { PUBLIC_ROUTES, ROUTES } from '@constants';
import { filterKey } from '@contexts';
import { MPostDetail } from '@models/MPostDetail';
import { IconCheck, IconMark, IconTimer } from '@root/public/icons';
import { formatNumToUnit } from '@root/src/core/utils/HandleNumber';
import { colors } from '@styles/theme/colors';
import { Col, Divider, Row, Typography } from 'antd';
import { useState } from 'react';
import {
  DefaultContentInWrapper,
  DefaultLinkText,
  DefaultRowTitle,
  DefaultWrapperWithBg,
} from '..';
import { TagProperty, RowPrice, RowActions, RowPriceLeft, RowPriceRight } from './Component.style';
import dynamic from 'next/dynamic';

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
                <label style={{ fontFamily: "Inter",fontSize:28, fontWeight:"700", marginBottom:20 }}>Highlight</label>
                <Row>
                  <Col md={6} xl={4} xs={7} sm={11} style={{ marginRight: 12, marginBottom: 12 }}>
                    <Block>
                      <div style={{ fontSize: 36, fontWeight: '900', fontFamily: "Inter" }}>7.0%</div>
                      <Divider style={{ height: 2, marginTop: 8, marginBottom: 8, backgroundColor: '#222222' }} />
                      <div style={{ fontSize: 14, fontWeight: '700', fontFamily: "Inter" }}>Guaranteed Rental Return</div>
                    </Block>
                  </Col>
                  <Col md={6} xl={4} xs={7} sm={11} style={{ marginRight: 12, marginBottom: 12 }}>
                    <Block>
                      <div style={{ fontSize: 36, fontWeight: '900', fontFamily: "Inter" }}>10%</div>
                      <Divider style={{ height: 2, marginTop: 8, marginBottom: 8, backgroundColor: '#222222' }} />
                      <div style={{ fontSize: 14, fontWeight: '700', fontFamily: "Inter" }}>Downpayment Ratio</div>
                    </Block>
                  </Col>
                  <Col md={6} xl={4} xs={7} sm={11} style={{ marginRight: 12, marginBottom: 12 }}>
                    <Block>
                      <div style={{ fontSize: 36, fontWeight: '900', fontFamily: "Inter" }}>40%</div>
                      <Divider style={{ height: 2, marginTop: 8, marginBottom: 8, backgroundColor: '#222222' }} />
                      <div style={{ fontSize: 14, fontWeight: '700', fontFamily: "Inter" }}>Sold Rate</div>
                    </Block>
                  </Col>
                  <Col md={6} xl={4} xs={7} sm={11} style={{ marginRight: 12, marginBottom: 12 }}>
                    <Block>
                      <div style={{ fontSize: 36, fontWeight: '900', fontFamily: "Inter" }}>12%</div>
                      <Divider style={{ height: 2, marginTop: 8, marginBottom: 8, backgroundColor: '#222222' }} />
                      <div style={{ fontSize: 14, fontWeight: '700', fontFamily: "Inter" }}>Price Increase</div>
                    </Block>
                  </Col>
                  <Col md={6} xl={4} xs={7} sm={11} style={{ marginRight: 12, marginBottom: 12 }}>
                    <Block>
                      <div style={{ fontSize: 36, fontWeight: '900', fontFamily: "Inter" }}>80%</div>
                      <Divider style={{ height: 2, marginTop: 8, marginBottom: 8, backgroundColor: '#222222' }} />
                      <div style={{ fontSize: 14, fontWeight: '700', fontFamily: "Inter" }}>Contruction Progress</div>
                    </Block>
                  </Col>
                  {/* <Col md={6} xl={3} xs={7} sm={11} style={{ marginRight: 12, marginBottom: 24 }}>
                    <Block>
                      <div style={{ fontSize: 36, fontWeight: '900' }}>7.0%</div>
                      <Divider style={{ height: 2, marginTop: 8, marginBottom: 8 , backgroundColor:'#222222'}} />
                      <div style={{ fontSize: 14, fontWeight: '700' }}>Guaranteed Rental Return</div>
                    </Block>
                  </Col> */}
                </Row>
                <Row>
                  <Col xl={8} md={12} xs={20}>
                    <span>
                      <IconCheck />
                      <label style={{ marginLeft: 12, fontSize: 18, fontWeight: "700", fontFamily: "Inter" }}>High Return Yield</label>
                    </span>
                  </Col>
                  <Col xl={8} md={12} xs={20}>
                    <span>
                      <IconCheck />
                      <label style={{ marginLeft: 12, fontSize: 18, fontWeight: "700", fontFamily: "Inter" }}>Promotional Discount</label>
                    </span>
                  </Col>
                  <Col xl={8} md={12} xs={20}>
                    <span>
                      <IconCheck />
                      <label style={{ marginLeft: 12, fontSize: 18, fontWeight: "700", fontFamily: "Inter" }}>High Appreciation Value</label>
                    </span>
                  </Col>
                </Row>
              </RowPriceLeft>
            </RowPrice>
            <DefaultRowTitle style={{ marginTop: 80 }}>
                <label style={{ fontFamily: "Inter",fontSize:28, fontWeight:"700", marginBottom:20 }}>Project overview</label>
            </DefaultRowTitle>
            <TextParagraph t={translate} text={post.realEstateDescription} size={16} />
            <div style={{marginTop:80}}>
              <DefaultRowTitle>
                <label style={{ fontFamily: "Inter",fontSize:28, fontWeight:"700", marginBottom:20 }}>Project overview</label>
              </DefaultRowTitle>
              <DynamicUtility t={translate} post={post} />
            </div>
          </div>
          <div>
            <RowActions />
            <WidgetUserInfo t={translate} post={props.post} />
            <DynamicNotifyOutdate />
          </div>
        </DefaultContentInWrapper>
      </DefaultWrapperWithBg>
    </>
  );
};
