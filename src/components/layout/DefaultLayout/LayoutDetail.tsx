/* eslint-disable react-hooks/exhaustive-deps */
import { MPostDetail } from '@models/MPostDetail';
import dynamic from 'next/dynamic';
import { DefaultContentNoGrid, DefaultWrapperWithBg } from '.';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@contexts';
import { POST_TYPE_PARAMS } from '@constants';
import { getDetailPost } from '../../../core/services/post';
import { getPostTypeId } from '@utils';
import { Loading, PlaceHolderLoading } from '../../shared';
import { Row, Col, Typography } from 'antd';
import { IconFly, IconVirtual, IconMap, IconImage } from '@root/public/icons';
import { ButtonWrap, ButtonWrapProperties } from './DefaultComponent.style'
import Link from 'next/link';

interface Props {
  t: any;
  typePage?: string;
  hrefMain?: { name: string; href: string };
  idPost?: string | number;
}

export const NoPost = (props: { translate: any }) => {
  return (
    <h1
      style={{ textAlign: 'center', marginTop: '100px', marginBottom: '100px' }}
    >
      {props.translate('detail.noDetail')}
    </h1>
  );
};

const LayoutDetail = (props: Props) => {
  const { t: translate, idPost, hrefMain } = props;
  const [dataDetail, setDataDetail] = useState(new MPostDetail({}));
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    let mounted = true;
    getDetailPost(idPost ? Number(idPost) : 0)
      .then((res: MPostDetail) => {
        if (res && mounted && window) {
          if (
            res.realEstateId &&
            (getPostTypeId(window.location.pathname).id == 1 && res.agency == 1) ||
            (getPostTypeId(window.location.pathname).id == 2 && res.agency == 0)
            && res?.isHidden !== 1
          ) {
            setDataDetail(res);
          } else {
            setNotFound(true);
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const { listUserSave } = useContext(UserContext);

  const DynamicBanner = dynamic(
    () => import('../../shared/BannerWithPicture/BannerWithPicture'),
    {
      loading: () => <PlaceHolderLoading height="500px" heightMb="250px" />,
    }
  );
  const DynamicRowPost = dynamic(
    () => import('../../pages/Home/HomeComponent/RowPosts')
  );

  const DynamicNavMobile = dynamic(
    () => import('../../shared/NavMobileAction/NavMobileAction')
  );
  const DynamicDetailTop: any = dynamic(() =>
    import('./LayoutComponent/LayoutDetailTop').then(
      (mod: any) => mod.LayoutDetailTop
    )
  );

  const DynamicDetailBottom: any = dynamic(() =>
    import('./LayoutComponent/LayoutDetailBottom').then(
      (mod: any) => mod.LayoutDetailBottom
    )
  );

  const DynamicSpecify: any = dynamic(() =>
    import('./LayoutComponent/LayoutDetailRESSpecify').then(
      (mod: any) => mod.LayoutDetailRESSpecify
    )
  );

  const DynamicFacilites: any = dynamic(() =>
    import('./LayoutComponent/LayoutDetailRESFacilities').then(
      (mod: any) => mod.LayoutDetailRESFacilities
    )
  );

  const DynamicREName: any = dynamic(() =>
    import('./LayoutComponent/LayoutBlockREName').then(
      (mod: any) => mod.LayoutBlockREName
    )
  );

  const DynamicTypeRoom: any = dynamic(() =>
    import('./LayoutComponent/LayoutTypeRoom').then(
      (mod: any) => mod.LayoutTypeRoom
    )
  );

  const DynamicTenants: any = dynamic(() =>
    import('./LayoutComponent/LayoutMajorTenants').then(
      (mod: any) => mod.LayoutMajorTenants
    )
  );

  const DynamicPartners: any = dynamic(() =>
    import('./LayoutComponent/LayoutPartners').then(
      (mod: any) => mod.LayoutPartners
    )
  );

  const DynamicProperties: any = dynamic(() =>
    import('./LayoutComponent/LayoutProperties').then(
      (mod: any) => mod.LayoutProperties
    )
  );

  const DynamicLocation: any = dynamic(() =>
    import('./LayoutComponent/LayoutDetailRESLocation').then(
      (mod: any) => mod.LayoutDetailRESLocation
    )
  );

  const DynamicUtility: any = dynamic(() =>
    import('./LayoutComponent/LayoutDetailUtility').then(
      (mod: any) => mod.LayDetailUtility
    )
  );

  const DynamicAllProperties: any = dynamic(() =>
    import('./LayoutComponent/LayoutAllProperties').then(
      (mod: any) => mod.LayoutAllProperties
    )
  );

  const DynamicPayment: any = dynamic(() =>
    import('./LayoutComponent/LayoutPaymentPlans').then(
      (mod: any) => mod.LayoutPaymentPlans
    )
  );

  const DynamicMap: any = dynamic(() =>
    import('./LayoutComponent/LayoutMap').then(
      (mod: any) => mod.LayoutMap
    )
  );
  const DynamicPriceCompare: any = dynamic(() =>
    import('./LayoutComponent/LayoutPriceCompare').then(
      (mod: any) => mod.LayoutPriceCompare
    )
  );
  const DynamicRatingReview: any = dynamic(() =>
    import('./LayoutComponent/LayoutRatingReview').then(
      (mod: any) => mod.LayoutRatingReview
    )
  );

  const DynamicCalculator: any = dynamic(() =>
    import('./LayoutComponent/LayoutCalculator').then(
      (mod: any) => mod.LayoutCalculator
    )
  );

  const DynamicAround: any = dynamic(() =>
    import('./LayoutComponent/LayoutDetailAround').then(
      (mod: any) => mod.LayoutDetailAround
    )
  );

  const DynamicAttach: any = dynamic(() =>
    import('./LayoutComponent/LayoutDetailAttach').then(
      (mod: any) => mod.LayoutDetailAttach
    )
  );
  return (
    <div>
      {/* <DynamicNavMobile t={translate} idPost={idPost} /> */}
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {notFound ? (
            <NoPost translate={translate} />
          ) : (
            <div>
              <DynamicDetailTop
                t={translate}
                post={dataDetail}
                hrefMain={hrefMain}
              />
              <DefaultWrapperWithBg />
              <DefaultWrapperWithBg typeof="fullScreen">
                <DefaultContentNoGrid style={{ paddingTop: '16px' }} typeof="fullScreen">
                  <DynamicBanner t={translate} images={dataDetail.arrayImage} />
                  <Row style={{ marginLeft: 16, marginRight: 16 }}>
                    <Col lg={4} md={6} sm={12} style={{ marginTop: 20, width: 1000 }}>
                      <ButtonWrap icon={<IconImage />}>
                        <span style={{ fontFamily: "Inter", fontSize: 16, fontWeight: '600' }}>Floor plan</span>
                      </ButtonWrap>
                    </Col>
                    <Col lg={4} md={6} sm={12} style={{ marginTop: 20 }}>
                      <ButtonWrap icon={<IconImage />}>
                        <span style={{ fontFamily: "Inter", fontSize: 16, fontWeight: '600' }}>Floor plan</span>
                      </ButtonWrap>
                    </Col>
                    <Col lg={4} md={6} sm={12} style={{ marginTop: 20 }}>
                      <ButtonWrap icon={<IconVirtual />} style={{ marginRight: 10 }}>
                        <span style={{ fontFamily: "Inter", fontSize: 16, fontWeight: '600' }}>Virtual tour</span>
                      </ButtonWrap>
                    </Col>
                    <Col lg={4} md={6} sm={12} style={{ marginTop: 20 }}>
                      <ButtonWrap icon={<IconMap />} style={{ marginRight: 10 }}>
                        <span style={{ fontFamily: "Inter", fontSize: 16, fontWeight: '600' }}>Map view</span>
                      </ButtonWrap>
                    </Col>
                    <Col lg={8} md={12} sm={24} style={{ justifyContent: 'flex-end', display: 'flex', marginTop: 20 }}>
                      <ButtonWrapProperties background="#F9C41F1A" icon={<IconFly />}>
                        <span style={{ fontFamily: "Inter", fontSize: 16, fontWeight: '600' }}>Way to this property</span>
                      </ButtonWrapProperties>
                    </Col>

                  </Row>
                </DefaultContentNoGrid>
              </DefaultWrapperWithBg>

              <DynamicDetailBottom
                t={translate}
                post={dataDetail}
                hrefMain={hrefMain}
              />
              <DynamicFacilites />
              <DynamicREName />
              {/* <DynamicCalculator
                t={translate}
                post={dataDetail}
                hrefMain={hrefMain} /> */}
              <DynamicTypeRoom />
              {/* <DynamicTenants
                t={translate}
                post={dataDetail}
                hrefMain={hrefMain}
              /> */}
              <DynamicAllProperties />
              {/* <DynamicPartners /> */}
              {/* <DynamicPayment /> */}
              <DynamicMap />
              <DynamicPriceCompare />
              <DynamicProperties t={translate} />
              <div id="rating-review">
                <DynamicRatingReview />

              </div>
            </div>
          )}
          <DynamicRowPost
            t={translate}
            posts={listUserSave?.data}
            pathName={POST_TYPE_PARAMS.POST_SAVED.params}
            title="home.realEstateSaved"
            subTitle="home.subSaved"
          />
        </div>
      )}
    </div>
  );
};

export default LayoutDetail;
