
import { BreadcrumbCustom } from '../../../shared/Breadcrum/index';
import { ButtonSave } from '../../../shared/ButtonSave/index';
import { ButtonShare } from '../../../shared/ButtonShare';
import { TextParagraph } from '../../../shared/TextParagraph';
import { WidgetUserInfo } from '../../../shared/WidgetUserInfo';

import { PUBLIC_ROUTES, ROUTES } from '@constants';
import { filterKey } from '@contexts';
import { MPostDetail } from '@models/MPostDetail';
import { IconMark, IconTimer, IconBed, IconBathub, IconStarWhite, IconShare, IconSharetabtab, IconStar, IconStartabtab } from '@root/public/icons';
import { formatNumToUnit } from '@root/src/core/utils/HandleNumber';
import { colors } from '@styles/theme/colors';
import { Divider, Typography } from 'antd';
import { useState } from 'react';
import {
  DefaultContentInWrapper,
  DefaultLinkText,
  DefaultRowTitle,
  DefaultWrapperWithBg,
} from '..';
import { TagProperty, RowPrice, RowActions, RowPriceLeft, RowPriceRight, ButtonVote } from './Component.style';
import { device } from '@styles/theme/device';

export const LayoutDetailTop = (props: {
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

  return (
    <>
      <DefaultWrapperWithBg style={{ marginBottom: -70 }}>
        <DefaultContentInWrapper>
          <div>
            <BreadcrumbCustom t={translate} arrHref={arrHref} />
            <Typography.Title style={{ fontFamily: 'Inter' }} level={3} ellipsis={{ rows: 2 }}>
              {post.realEstateTitle}
            </Typography.Title>
            {post.realEstateJuridical && (
              <TagProperty style={{ background: hrefMain.href == PUBLIC_ROUTES.BROKERAGE_FLOOR.href ? colors.common : colors.button }}>{post.realEstateJuridical}</TagProperty>
            )}
            <RowPrice>
              <RowPriceLeft gap={true}>
                <Typography.Title style={{ fontFamily: 'Inter' }} level={5}>The Brevoort</Typography.Title>
                {post.realEstateLocation && (
                  <span>
                    {/* <IconMark /> */}
                    <label style={{ fontFamily: 'Inter', fontWeight: "500", fontSize: 14 }}>{post.realEstateLocation}</label>
                    {/* <DefaultLinkText target="_blank" href={post.linkLocation}>
                      {translate('button.viewLocation')}
                    </DefaultLinkText> */}
                  </span>
                )}
                <span style={{ marginTop: 20 }}>
                  <span style={{ marginRight: 25 }}>
                    <IconBed />
                    <label style={{ fontFamily: 'Inter', fontWeight: "500", fontSize: 16 }}>Beds</label>
                    <label style={{ fontFamily: 'Inter', fontWeight: "700", fontSize: 16 }}>2</label>
                  </span>
                  <span style={{ marginRight: 25 }}>
                    <IconBathub />
                    <label style={{ fontFamily: 'Inter', fontWeight: "500", fontSize: 16 }}>Bath</label>
                    <label style={{ fontFamily: 'Inter', fontWeight: "700", fontSize: 16 }}>2</label>
                  </span>
                  <span style={{ marginRight: 10 }}>
                    <IconBed />
                    <label style={{ fontFamily: 'Inter', fontWeight: "500", fontSize: 16 }}>Beds</label>
                    <label style={{ fontFamily: 'Inter', fontWeight: "700", fontSize: 16 }}>2</label>
                  </span>
                  <span style={{ marginRight: 25 }}>
                    <IconBed />
                    <label style={{ fontFamily: 'Inter', fontWeight: "500", fontSize: 16 }}>Beds</label>
                    <label style={{ fontFamily: 'Inter', fontWeight: "700", fontSize: 16 }}>2</label>
                  </span>
                </span>
              </RowPriceLeft>
              <RowPriceRight >
                {
                  hrefMain.href == PUBLIC_ROUTES.BROKERAGE_FLOOR.href ? <div>
                    <label >{translate('common.commission')}</label>
                    <h1>{post.agencyPercent} %</h1>
                  </div> : null
                }
                <div>
                  {/* <label>{translate('detail.price')}</label> */}
                  <h1 style={{ color: '#FF8800', fontFamily: 'Inter', fontWeight: "700", fontSize: 28 }}>
                    {formatNumToUnit(post.realEstateValueSalePrice, translate)}{post.realEstatePostTypeId === 2 ? "/" + translate('common.month') : ""}
                  </h1>
                  <Typography.Title delete={true} level={3} style={{ marginBottom: 50, color: '#7A7A7A', fontFamily: 'Inter', fontWeight: "700", fontSize: 18 }}>
                    {formatNumToUnit(post.realEstateValueSalePrice, translate)}{post.realEstatePostTypeId === 2 ? "/" + translate('common.month') : ""}
                  </Typography.Title>
                  <RowActions style={{ marginTop: -15 }}>
                    <ButtonSave t={translate} idPost={post.realEstateId} IconDefault={<IconStartabtab />} bg="#F9C41F" />
                    <a>
                      <ButtonShare t={translate} icon={<IconSharetabtab />} bg="white" borderColor="#F9C41F" />
                    </a>
                    <ButtonVote style={{borderRadius:8}}>
                      <IconStar />
                      4,88 · 17 đánh giá
                    </ButtonVote>
                  </RowActions>
                </div>
              </RowPriceRight>
            </RowPrice>
            {/* <Divider />
            <DefaultRowTitle>
              <h1>{translate('detail.infoDescription')}</h1>
            </DefaultRowTitle>
            <TextParagraph t={translate} text={post.realEstateDescription} /> */}
          </div>
        </DefaultContentInWrapper>
      </DefaultWrapperWithBg>
    </>
  );
};
