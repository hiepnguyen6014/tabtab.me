
import { PUBLIC_ROUTES, ROUTES } from '@constants';
import { filterKey } from '@contexts';
import { MPostDetail } from '@models/MPostDetail';
// import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { IconBathub, IconBed, IconSharetabtab, IconStartabtab } from '@root/public/icons';
import { formatNumToUnit } from '@root/src/core/utils/HandleNumber';
import { colors } from '@styles/theme/colors';
import Link from 'next/link';
import { useState } from 'react';
import {
  DefaultContentInWrapper, DefaultWrapperWithBg
} from '..';
import { BreadcrumbCustom } from '../../../shared/Breadcrum/index';
import { ButtonSave } from '../../../shared/ButtonSave/index';
import { ButtonShare } from '../../../shared/ButtonShare';
import { ButtonRatingReview, RowActions, RowPrice, RowPriceLeft, TagProperty } from './Component.style';



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
            <Typography noWrap variant="h3">
              {post.realEstateTitle}
            </Typography>
            {post.realEstateJuridical && (
              <TagProperty style={{ background: hrefMain.href == PUBLIC_ROUTES.BROKERAGE_FLOOR.href ? colors.common : colors.button }}>{post.realEstateJuridical}</TagProperty>
            )}
            <RowPrice>
              <RowPriceLeft gap={true}>
                <Typography variant="h5">The Brevoort</Typography>
                {post.realEstateLocation && (
                  <span>
                    {/* <IconMark /> */}
                    <label style={{ fontWeight: "500", fontSize: 14 }}>{post.realEstateLocation}</label>
                    {/* <DefaultLinkText target="_blank" href={post.linkLocation}>
                      {translate('button.viewLocation')}
                    </DefaultLinkText> */}
                  </span>
                )}
                <span style={{ marginTop: 20 }}>
                  <span style={{ marginRight: 25 }}>
                    <IconBed />
                    <label style={{ fontWeight: "500", fontSize: 16, color: '#7A7A7A' }}>Beds</label>
                    <label style={{ fontWeight: "700", fontSize: 16 }}>{post.realEstateHouseBedRooms}</label>
                  </span>
                  <span style={{ marginRight: 25 }}>
                    <IconBathub />
                    <label style={{ fontWeight: "500", fontSize: 16, color: '#7A7A7A' }}>Bath</label>
                    <label style={{ fontWeight: "700", fontSize: 16 }}>{post.realEstateHouseToilets}</label>
                  </span>
                  <span>
                    <label style={{ fontWeight: "500", fontSize: 16, color: '#7A7A7A' }}>
                      — / Sq. Ft.
                    </label>
                  </span>
                  <span>
                    <label style={{ fontWeight: "500", fontSize: 16, color: '#222222' }}>
                      — / Sq. Ft.
                    </label>
                  </span>
                  {/* <span style={{ marginRight: 10 }}>
                    <IconBed />
                    <label style={{  fontWeight: "500", fontSize: 16 }}>Beds</label>
                    <label style={{  fontWeight: "700", fontSize: 16 }}>2</label>
                  </span>
                  <span style={{ marginRight: 25 }}>
                    <IconBed />
                    <label style={{  fontWeight: "500", fontSize: 16 }}>Beds</label>
                    <label style={{  fontWeight: "700", fontSize: 16 }}>2</label>
                  </span> */}
                </span>
              </RowPriceLeft>
              <div >
                {
                  hrefMain.href == PUBLIC_ROUTES.BROKERAGE_FLOOR.href ? <div>
                    <label >{translate('common.commission')}</label>
                    <Typography variant="h1">{post.agencyPercent} %</Typography>
                  </div> : null
                }
                <div>
                  {/* <label>{translate('detail.price')}</label> */}
                  <Typography variant="h1" style={{ color: '#FF8800', fontWeight: "700", fontSize: 28 }}>
                    {formatNumToUnit(post.realEstateValueSalePrice, translate)}{post.realEstatePostTypeId === 2 ? "/" + translate('common.month') : ""}
                  </Typography>
                  <Typography variant="h3" style={{ marginBottom: 50, color: '#7A7A7A', fontWeight: "700", fontSize: 18 }}>
                    {formatNumToUnit(post.realEstateValueSalePrice, translate)}{post.realEstatePostTypeId === 2 ? "/" + translate('common.month') : ""}
                  </Typography>
                  <RowActions style={{ marginTop: -15 }}>
                    <ButtonSave t={translate} idPost={post.realEstateId} IconDefault={<IconStartabtab />} bg="#F9C41F" />
                    <a>
                      <ButtonShare t={translate} icon={<IconSharetabtab />} bg="white" borderColor="#F9C41F" />
                    </a>
                    <div style={{ cursor: 'pointer' }} className='d-flex justify-space-between'>
                      <Link href={'#rating-review'}>
                        <div className='d-flex'>
                          <div className='d-flex flex-column' style={{ textAlign: 'right', marginRight: '8px' }}>
                            <span style={{ color: '#262626', fontSize: '16px', fontWeight: '700' }}>Tuyệt vời</span>
                            <span style={{ color: '#6B6B6B', fontSize: '12px' }}>270 đánh giá</span>
                          </div>
                          <ButtonRatingReview>
                            <span>8.7</span>
                          </ButtonRatingReview>
                        </div>
                      </Link>
                    </div>
                    {/* <ButtonVote style={{ borderRadius: 8 }}>
                      <IconStar />
                      4,88 · 17 đánh giá
                    </ButtonVote> */}

                  </RowActions>
                </div>
              </div>
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
