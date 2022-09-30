import { Button, Col, Divider, Row, Skeleton, Typography } from 'antd';
import {
  VectorBuilding,
  VectorCalendar,
  VectorDirection,
  VectorHouse,
  VectorSquare,
  VectorTalk,
  VectorTree,
  VectorUser,
  Favorited,
  SFavorite,
  NextArrow,
  PrevArrow,
} from 'public/icons';
import { ItemWrapper } from './PostItem/PostItemWrapper';
import { PostThumbnail } from './PostItem/PostComponent/PostThumbnail';
import {
  PostContent,
  PostMiddle,
  PostMiddleItem,
  PostTitle,
  PostMiddleFooter,
  TypographyText,
  Wrapper,
  Prices,
  DetailItem,
  CardTitle,
  CardBottom,
  CardButton,
  CardThumbnail,
} from './Recommend.style';
import { SRC_IMAGE } from '@core';
import { formatNumToUnit } from '@root/src/core/utils/HandleNumber';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants';
import TenXLogo from '@root/public/static/Ten-X-Logo.png';
import ThumbnailCard from '@root/public/static/images-recommend.png';
import Image from 'next/image';

export function RecommendItem() {
  return (
    <>
      <Wrapper>
        <CardThumbnail>
          <div className="sale-off">sale 15% off</div>
          <button className="btn-prev">
            <PrevArrow />
          </button>
          <button className="btn-next">
            <NextArrow />
          </button>
          <div className="icon-favorite">
            <SFavorite />
          </div>
          <Image src={ThumbnailCard} alt="" width={282} height={188} />
        </CardThumbnail>

        <PostContent>
          <Prices>
            <div>
              <div className="now-price">3.000.000$</div>
              <div className="was-price">was 4.500.000$ </div>
            </div>
            <div>
              <Image src={TenXLogo} width={76} height={24} />
            </div>
          </Prices>
          <CardTitle>
            <div>
              Sir Francis Drake Blvd. Retail /Office 312 Sir Francis Drake
            </div>
            <div className="sub-title">23 Willow Way, Bletchley, USA</div>
          </CardTitle>

          <DetailItem>
            <div className="item">
              <VectorSquare />
              <div className="item-content">72m²</div>
            </div>
            <div className="item">
              <VectorTree /> <div className="item-content">---</div>
            </div>

            <div className="item">
              <VectorUser />
              <div className="item-content">Chính chủ</div>
            </div>

            <div className="item">
              <VectorHouse /> <div className="item-content">4m</div>
            </div>

            <div className="item">
              <VectorDirection />
              <div className="item-content">West</div>
            </div>
            <div className="item">
              <VectorBuilding />
              <div className="item-content">Chung cư</div>
            </div>
          </DetailItem>

          <Divider style={{ marginTop: '5px', marginBottom: '7px' }} />

          <CardBottom>
            <div className="time">
              <VectorCalendar />
              <div>15 giờ trước</div>
            </div>
            <CardButton>
              <VectorTalk />
              <div className="chat">Chat now</div>
            </CardButton>
          </CardBottom>
        </PostContent>
      </Wrapper>
    </>
  );
}
