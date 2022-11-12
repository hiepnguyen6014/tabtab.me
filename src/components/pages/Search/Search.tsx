import { SRC_IMAGE } from '@core';
import { IconArrowDown, IconBell } from '@root/public/icons';
import { Favorite } from '@root/public/icons';
import { SearchDataProps } from '@root/src/core/types/filter';
import { Button, Col, Image, Popover, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { getListRealEstate } from '../../../core/services';
import SwiperGlobal from '../../shared/SwiperGlobal';
import {
  BoxFavorite,
  BoxFavoriteOne,
  BoxHiddenMobile,
  BoxImageSlide,
  BoxIntroduce,
  BoxLabelEndow,
  BoxLogoX,
  BoxLogoXOne,
  BoxPaddingRow,
  BoxSalePrice,
  BoxStopLoss,
  BoxWrapper,
  BoxWrapperData,
  BoxWrapperFooter,
  BoxWrapperLable,
  BoxWrapperMini,
  BoxWrapperRowContent,
  ButtonApply,
  ButtonClasses,
  ButtonClear,
  DivPrice,
  FDesktop,
  SpanPrice,
  WrapperHideMap,
} from './Search.style';
import InfoHome from './component/InfoHome';
import MoreFiler from './component/MoreFiler';
import PriceContent from './component/PriceContent';
import PropertyContent from './component/PropertyContent';
import {
  SEARCH_DATA,
  SEARCH_DATA_MINI,
  SEARCH_DATA_ROW,
} from './component/SearchData';

interface Props {
  posts: SearchDataProps;
  t: any;
}

export default function Search(props: Props) {
  const { t: translate, posts } = props;
  const [hideMap, setHideMap] = useState(true);
  console.log('post', posts);
  const [page, setPage] = useState(1);
  useEffect(() => {
    // getData()
  }, []);
  const getData = async () => {
    const listByRating: any = await getListRealEstate({
      // "filter": {
      //     "realEstateTitle": "a"
      // }
    });
  };

  const handleHideMap = () => {
    setHideMap(!hideMap);
  };

  const BedRoomContent = (
    <div style={{ padding: 12, width: 400 }}>
      <Typography
        style={{
          fontSize: 20,
          fontFamily: 'Inter',
          fontWeight: '700',
          marginBottom: 32,
        }}
      >
        Property types
      </Typography>
      <Row gutter={8}>
        <Col>
          <a
            style={{
              border: '1px solid #E9E9E9',
              borderRadius: 8,
              padding: '10px 15px 10px 15px',
            }}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              Studio
            </text>
          </a>
        </Col>
        <Col>
          <a
            style={{
              border: '1px solid #E9E9E9',
              borderRadius: 8,
              padding: '9px 15px 9px 15px',
              background: page == 1 ? '#F9C41F' : 'white',
            }}
            onClick={() => setPage(1)}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              1
            </text>
          </a>
        </Col>
        <Col>
          <a
            style={{
              border: '1px solid #E9E9E9',
              borderRadius: 8,
              padding: '9px 15px 9px 15px',
              background: page == 2 ? '#F9C41F' : 'white',
            }}
            onClick={() => setPage(2)}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              2
            </text>
          </a>
        </Col>
        <Col>
          <a
            style={{
              border: '1px solid #E9E9E9',
              borderRadius: 8,
              padding: '9px 15px 9px 15px',
              background: page == 3 ? '#F9C41F' : 'white',
            }}
            onClick={() => setPage(3)}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              3
            </text>
          </a>
        </Col>
        <Col>
          <a
            style={{
              border: '1px solid #E9E9E9',
              borderRadius: 8,
              padding: '9px 15px 9px 15px',
              background: page == 4 ? '#F9C41F' : 'white',
            }}
            onClick={() => setPage(4)}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              4
            </text>
          </a>
        </Col>
        <Col>
          <a
            style={{
              border: '1px solid #E9E9E9',
              borderRadius: 8,
              padding: '9px 15px 9px 15px',
              background: page == 5 ? '#F9C41F' : 'white',
            }}
            onClick={() => setPage(5)}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              5+
            </text>
          </a>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={12}>
          <ButtonClear
            style={{
              padding: 14,
              width: '100%',
              height: 'auto',
              marginTop: 16,
              borderRadius: 8,
            }}
          >
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: 'white',
              }}
            >
              Clear
            </text>
          </ButtonClear>
        </Col>
        <Col span={12}>
          <ButtonApply
            style={{
              padding: 14,
              width: '100%',
              height: 'auto',
              marginTop: 16,
              borderRadius: 8,
            }}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              Apply
            </text>
          </ButtonApply>
        </Col>
      </Row>
    </div>
  );

  return (
    <FDesktop>
      <BoxIntroduce>
        <h2
          style={{
            fontFamily: 'Inter',
            fontSize: 16,
            fontWeight: '700',
            color: '#7A7A7A',
          }}
        >
          Hơn 300 nhà
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: 'Inter', fontSize: 32, fontWeight: '700' }}>
            Nhà ở tại Quận 7
          </div>
          <Button onClick={handleHideMap}>
            {hideMap ? 'SHOW MAPS' : 'HIDE MAPS'}
          </Button>
        </div>
      </BoxIntroduce>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
        <Col span={hideMap ? 24 : 12}>
          <BoxHiddenMobile>
            <Row style={{ display: 'flex', marginTop: 20 }}>
              <Col style={{ marginBottom: 20 }}>
                <Popover
                  placement="bottomRight"
                  content={PriceContent}
                  trigger="click"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '5px 20px 5px 20px',
                      justifyContent: 'center',
                      border: '1px solid #7A7A7A',
                      borderRadius: 24,
                      marginRight: 15,
                    }}
                  >
                    <label
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 16,
                        fontWeight: '550',
                        marginRight: 10,
                      }}
                    >
                      Price
                    </label>
                    <IconArrowDown />
                  </div>
                </Popover>
              </Col>
              <Col style={{ marginBottom: 20 }}>
                <Popover
                  placement="bottomRight"
                  content={PropertyContent}
                  trigger="click"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '5px 20px 5px 20px',
                      justifyContent: 'center',
                      border: '1px solid #7A7A7A',
                      borderRadius: 24,
                      marginRight: 15,
                    }}
                  >
                    <label
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 16,
                        fontWeight: '550',
                        marginRight: 10,
                      }}
                    >
                      New Projects
                    </label>
                    <IconArrowDown />
                  </div>
                </Popover>
              </Col>
              <Col style={{ marginBottom: 20 }}>
                <Popover
                  placement="bottomRight"
                  content={PropertyContent}
                  trigger="click"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '5px 20px 5px 20px',
                      justifyContent: 'center',
                      border: '1px solid #7A7A7A',
                      borderRadius: 24,
                      marginRight: 15,
                    }}
                  >
                    <label
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 16,
                        fontWeight: '550',
                        marginRight: 10,
                      }}
                    >
                      Property types
                    </label>
                    <IconArrowDown />
                  </div>
                </Popover>
              </Col>
              <Col style={{ marginBottom: 20 }}>
                <Popover
                  placement="bottomRight"
                  content={BedRoomContent}
                  trigger="click"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '5px 20px 5px 20px',
                      justifyContent: 'center',
                      border: '1px solid #7A7A7A',
                      borderRadius: 24,
                      marginRight: 15,
                    }}
                  >
                    <label
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 16,
                        fontWeight: '550',
                        marginRight: 10,
                      }}
                    >
                      Bedrooms
                    </label>
                    <IconArrowDown />
                  </div>
                </Popover>
              </Col>
              <Col style={{ marginBottom: 20 }}>
                <Popover
                  placement="bottomRight"
                  content={MoreFiler}
                  trigger="click"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '5px 20px 5px 20px',
                      justifyContent: 'center',
                      border: '1px solid #7A7A7A',
                      borderRadius: 24,
                      marginRight: 15,
                    }}
                  >
                    <label
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 16,
                        fontWeight: '550',
                        marginRight: 10,
                      }}
                    >
                      More filters
                    </label>
                    <IconArrowDown />
                  </div>
                </Popover>
              </Col>
            </Row>
          </BoxHiddenMobile>
          <BoxWrapperLable>
            <IconBell />
            <BoxLabelEndow>Ưu đãi khách hàng tháng 8/2021.</BoxLabelEndow>
          </BoxWrapperLable>
          {!hideMap && (
            <WrapperHideMap
              gutter={[
                { xs: 0, sm: 0, md: 12, lg: 24 },
                { xs: 24, sm: 24, md: 24, lg: 28 },
              ]}
              className="wrapperHideMap"
            >
              {SEARCH_DATA.slice(0, 1).map((search, index) => (
                <Col sm={24} lg={24} key={index}>
                  <BoxWrapper key={index}>
                    <SwiperGlobal
                      width="100%"
                      height="300px"
                      arrayImage={search.imageHome}
                    />
                    <BoxSalePrice>
                      <SpanPrice>sale {search.sale} off</SpanPrice>
                    </BoxSalePrice>
                    <BoxLogoX>
                      <Image preview={false} src={SRC_IMAGE.LOGOXIMAGE} />
                    </BoxLogoX>
                    <BoxFavorite>
                      <Favorite />
                    </BoxFavorite>
                    <BoxWrapperData>
                      <InfoHome dataHome={search} titleDownPx />
                    </BoxWrapperData>
                  </BoxWrapper>
                </Col>
              ))}
              {SEARCH_DATA_ROW.slice(0, 1).map((search, index) => (
                <Col sm={24} lg={24} key={index}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: '#FFFFFF',
                      boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.16)',
                      borderRadius: '8px',
                      maxHeight: '304px',
                    }}
                    key={index}
                  >
                    <div style={{ maxWidth: '282px' }}>
                      <SwiperGlobal
                        width="100%"
                        height="304px"
                        arrayImage={search.imageHome}
                      />
                      <BoxSalePrice>
                        <SpanPrice>sale {search.sale} off</SpanPrice>
                      </BoxSalePrice>
                      <BoxLogoXOne>
                        <Image preview={false} src={SRC_IMAGE.LOGOXIMAGE} />
                      </BoxLogoXOne>
                      <BoxFavoriteOne>
                        <Favorite />
                      </BoxFavoriteOne>
                    </div>
                    <BoxPaddingRow>
                      <InfoHome dataHome={search} row />
                    </BoxPaddingRow>
                  </div>
                </Col>
              ))}

              <Col sm={24} lg={24} style={{ padding: 10 }}>
                <img src={SRC_IMAGE.ADGOOGLE} height="100%" width="100%" />
              </Col>
              {SEARCH_DATA_MINI.slice(0, 2).map((search, index) => (
                <Col xs={24} sm={24} md={24} lg={12} key={index}>
                  <BoxWrapperMini key={index}>
                    <SwiperGlobal
                      width="100%"
                      height="188px"
                      arrayImage={search.imageHome}
                    />
                    <BoxSalePrice>
                      <SpanPrice>sale {search.sale} off</SpanPrice>
                    </BoxSalePrice>
                    <BoxStopLoss>
                      <SpanPrice>CẮT LỖ {search.stopLoss}</SpanPrice>
                    </BoxStopLoss>
                    <BoxLogoX>
                      <Image preview={false} src={SRC_IMAGE.LOGOXIMAGE} />
                    </BoxLogoX>
                    <BoxFavorite>
                      <Favorite />
                    </BoxFavorite>
                    <div style={{ padding: '14px 7px 16px 8px' }}>
                      <InfoHome dataHome={search} row hiddenPrice changeImage />
                    </div>
                  </BoxWrapperMini>
                </Col>
              ))}
              <Col sm={24} lg={24} style={{ padding: 10 }}>
                <img src={SRC_IMAGE.ADGOOGLE} height="100%" width="100%" />
              </Col>
              {SEARCH_DATA_MINI.slice(0, 2).map((search, index) => (
                <Col xs={24} sm={24} md={24} lg={12} key={index}>
                  <BoxWrapperFooter key={index}>
                    <SwiperGlobal
                      width="100%"
                      height="188px"
                      arrayImage={search.imageHome}
                    />
                    <BoxSalePrice>
                      <SpanPrice>sale {search.sale} off</SpanPrice>
                    </BoxSalePrice>
                    <BoxLogoX>
                      <Image preview={false} src={SRC_IMAGE.LOGOXIMAGE} />
                    </BoxLogoX>
                    <BoxFavorite>
                      <Favorite />
                    </BoxFavorite>
                    <div style={{ padding: '14px 7px 16px 8px' }}>
                      <InfoHome
                        dataHome={search}
                        row
                        hiddenPrice
                        changeImage
                        hiddenInfoHome
                      />
                    </div>
                  </BoxWrapperFooter>
                </Col>
              ))}
            </WrapperHideMap>
          )}
        </Col>
        {!hideMap && <Col span={12}></Col>}
        {hideMap && (
          <WrapperHideMap
            gutter={[
              { xs: 0, sm: 0, md: 12, lg: 24 },
              { xs: 24, sm: 24, md: 24, lg: 28 },
            ]}
          >
            {SEARCH_DATA.map((search, index) => (
              <Col sm={24} lg={12} key={index}>
                <BoxWrapper key={index}>
                  <SwiperGlobal
                    width="100%"
                    height="300px"
                    arrayImage={search.imageHome}
                  />
                  <BoxSalePrice>
                    <SpanPrice>sale {search.sale} off</SpanPrice>
                  </BoxSalePrice>
                  <BoxLogoX>
                    <Image preview={false} src={SRC_IMAGE.LOGOXIMAGE} />
                  </BoxLogoX>
                  <BoxFavorite>
                    <Favorite />
                  </BoxFavorite>
                  <div style={{ padding: '14px 16px 16px 18px' }}>
                    <InfoHome dataHome={search} titleDownPx />
                  </div>
                </BoxWrapper>
              </Col>
            ))}
            {SEARCH_DATA_ROW.map((search, index) => (
              <Col
                sm={24}
                md={24}
                lg={24}
                xl={12}
                style={{ maxWidth: '700px' }}
                key={index}
              >
                <BoxWrapperRowContent key={index}>
                  <BoxImageSlide>
                    <SwiperGlobal
                      imageRow
                      width="100%"
                      height="304px"
                      arrayImage={search.imageHome}
                    />
                    <BoxSalePrice>
                      <SpanPrice>sale {search.sale} off</SpanPrice>
                    </BoxSalePrice>
                    <BoxLogoXOne>
                      <Image preview={false} src={SRC_IMAGE.LOGOXIMAGE} />
                    </BoxLogoXOne>
                    <BoxFavoriteOne>
                      <Favorite />
                    </BoxFavoriteOne>
                  </BoxImageSlide>
                  <BoxPaddingRow>
                    <InfoHome dataHome={search} row changeImage />
                  </BoxPaddingRow>
                </BoxWrapperRowContent>
              </Col>
            ))}
            <Row>
              <Col sm={24} lg={12} style={{ padding: 10 }}>
                <img src={SRC_IMAGE.ADGOOGLE} height="100%" width="100%" />
              </Col>
              <Col sm={24} lg={12} style={{ padding: 10 }}>
                <img src={SRC_IMAGE.ADGOOGLE} height="100%" width="100%" />
              </Col>
            </Row>
            <Row
              gutter={[
                { xs: 6, sm: 12, md: 24, lg: 24 },
                { xs: 24, sm: 24, md: 24, lg: 0 },
              ]}
            >
              {SEARCH_DATA_MINI.map((search, index) => (
                <Col xs={24} sm={12} md={12} lg={6} key={index}>
                  <BoxWrapperMini key={index}>
                    <SwiperGlobal
                      width="100%"
                      height="188px"
                      arrayImage={search.imageHome}
                    />
                    <BoxSalePrice>
                      <SpanPrice>sale {search.sale} off</SpanPrice>
                    </BoxSalePrice>
                    <BoxStopLoss>
                      <SpanPrice>CẮT LỖ {search.stopLoss}</SpanPrice>
                    </BoxStopLoss>
                    <BoxLogoX>
                      <Image preview={false} src={SRC_IMAGE.LOGOXIMAGE} />
                    </BoxLogoX>
                    <BoxFavorite>
                      <Favorite />
                    </BoxFavorite>
                    <div style={{ padding: '14px 7px 16px 8px' }}>
                      <InfoHome dataHome={search} row hiddenPrice imageMedium />
                    </div>
                  </BoxWrapperMini>
                </Col>
              ))}
            </Row>
            <Row>
              <Col sm={24} lg={12} style={{ padding: 10 }}>
                <img src={SRC_IMAGE.ADGOOGLE} height="100%" width="100%" />
              </Col>
              <Col sm={24} lg={12} style={{ padding: 10 }}>
                <img src={SRC_IMAGE.ADGOOGLE} height="100%" width="100%" />
              </Col>
            </Row>
            <Row
              gutter={[
                { xs: 6, sm: 12, md: 24, lg: 24 },
                { xs: 24, sm: 24, md: 24, lg: 0 },
              ]}
            >
              {SEARCH_DATA_MINI.map((search, index) => (
                <Col xs={24} sm={12} md={12} lg={6} key={index}>
                  <BoxWrapperFooter key={index}>
                    <SwiperGlobal
                      width="100%"
                      height="188px"
                      arrayImage={search.imageHome}
                    />
                    <BoxSalePrice>
                      <SpanPrice>sale {search.sale} off</SpanPrice>
                    </BoxSalePrice>
                    <BoxLogoX>
                      <Image preview={false} src={SRC_IMAGE.LOGOXIMAGE} />
                    </BoxLogoX>
                    <BoxFavorite>
                      <Favorite />
                    </BoxFavorite>
                    <div style={{ padding: '14px 7px 16px 8px' }}>
                      <InfoHome
                        dataHome={search}
                        row
                        hiddenPrice
                        imageMedium
                        hiddenInfoHome
                      />
                    </div>
                  </BoxWrapperFooter>
                </Col>
              ))}
            </Row>
          </WrapperHideMap>
        )}
      </Row>
    </FDesktop>
  );
}
