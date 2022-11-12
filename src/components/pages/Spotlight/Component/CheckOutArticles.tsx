import { SRC_IMAGE } from '@core';
import {
  VectorBookmark,
  VectorPlay,
  VectorPodcast,
  VectorStar,
  VectorUp,
} from '@root/public/icons';
import {
  ArticleWrap,
  DivWrap,
  ImageWrap,
  ItemPostSpot,
  TypographyWrap,
} from '@root/src/components/pages/Home/Home.style';
import { Col, Image, Row, Typography } from 'antd';
import Link from 'next/link';

import { ButtonClick, SpotlightText, SpotlightWrap } from '../Spotlight.style';

interface CheckoutProps {
  clicktoPageHeader: () => void;
}

const CheckOutArticles: React.FC<CheckoutProps> = ({ clicktoPageHeader }) => {
  return (
    <>
      <div
        className="d-flex align-items-center"
        style={{ marginTop: '90px', marginBottom: '50px' }}
      >
        <Typography className="rating-review">
          Check our other articles
        </Typography>
      </div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        className="my-5"
      >
        <Col className="gutter-row" sm={24} lg={6}>
          <div>
            <ArticleWrap>
              <ImageWrap
                alt="imagePost"
                src={SRC_IMAGE.IMAGEB}
                height="100%"
                width="100%"
              />
              <DivWrap>
                <div className="bookmark">
                  <VectorBookmark height="28px" width="28px" />
                </div>
              </DivWrap>
            </ArticleWrap>
            <SpotlightText className="mt-1">
              <Typography.Title className="titlePostSpot">
                VILLA
              </Typography.Title>
              <Typography.Title className="contentPostSpot">
                North Bondi block sells for $22m+ but duplex next door for sale.
              </Typography.Title>
            </SpotlightText>

            <ItemPostSpot>
              <Image
                style={{ borderRadius: '50%' }}
                alt="img1"
                src={SRC_IMAGE.USERTAB1}
                width="50px"
                height="50px"
                preview={false}
              />

              <SpotlightText>
                <Typography.Paragraph className="timePostSpot">
                  30 minutes ago
                </Typography.Paragraph>
                <div className="d-flex">
                  <Typography.Paragraph className="timePostSpot">
                    by
                  </Typography.Paragraph>
                  <Typography.Paragraph className="userPostSpot mx-1">
                    Marvin McKinney
                  </Typography.Paragraph>
                </div>
              </SpotlightText>
            </ItemPostSpot>
          </div>
        </Col>

        <Col className="gutter-row" sm={24} lg={6}>
          <div>
            <ArticleWrap>
              <ImageWrap
                alt="imagePost"
                src={SRC_IMAGE.IMAGEC}
                height="100%"
                width="100%"
              />
              <DivWrap>
                <div className="bookmark">
                  <VectorBookmark height="28px" width="28px" />
                </div>
              </DivWrap>
            </ArticleWrap>

            <SpotlightText className="mt-1">
              <Typography.Title
                className="titlePostSpot"
                style={{ color: '#AE9B16' }}
              >
                Interior
              </Typography.Title>
              <Typography.Title className="contentPostSpot">
                Belarus exile group leader Vitaly Shishov found dead in Kyiv,
                police say.
              </Typography.Title>
            </SpotlightText>
          </div>
          <ItemPostSpot>
            <Image
              style={{ borderRadius: '50%' }}
              alt="img1"
              src={SRC_IMAGE.USERTAB2}
              width="50px"
              height="50px"
              preview={false}
            />
            <SpotlightText>
              <Typography.Paragraph className="timePostSpot">
                30 minutes ago
              </Typography.Paragraph>
              <div className="d-flex">
                <Typography.Paragraph className="timePostSpot">
                  by
                </Typography.Paragraph>
                <Typography.Paragraph className="userPostSpot mx-1">
                  Robert Fox
                </Typography.Paragraph>
              </div>
            </SpotlightText>
          </ItemPostSpot>
        </Col>

        <Col className="gutter-row" sm={24} lg={6}>
          <div>
            <ArticleWrap>
              <ImageWrap
                alt="imagePost"
                src={SRC_IMAGE.IMAGED}
                height="100%"
                width="100%"
              />
              <DivWrap>
                <div className="bookmark">
                  <VectorBookmark height="28px" width="28px" />
                </div>
                <div className="info-group d-flex align-items-center">
                  <VectorPlay height="24px" width="24px" />
                  <TypographyWrap>Video</TypographyWrap>
                </div>
              </DivWrap>
            </ArticleWrap>
            <SpotlightText className="mt-1">
              <Typography.Title
                className="titlePostSpot"
                style={{ color: '#AE9B16' }}
              >
                Interior
              </Typography.Title>
              <Typography.Title className="contentPostSpot">
                North Bondi block sells for $22m+ but duplex next door for sale.
              </Typography.Title>
            </SpotlightText>
          </div>
          <ItemPostSpot>
            <Image
              style={{ borderRadius: '50%' }}
              alt="img1"
              src={SRC_IMAGE.USERTAB3}
              width="50px"
              height="50px"
              preview={false}
            />

            <SpotlightText>
              <Typography.Paragraph className="timePostSpot">
                30 minutes ago
              </Typography.Paragraph>
              <div className="d-flex">
                <Typography.Paragraph className="timePostSpot">
                  by
                </Typography.Paragraph>
                <Typography.Paragraph className="userPostSpot mx-1">
                  Annette Black
                </Typography.Paragraph>
              </div>
            </SpotlightText>
          </ItemPostSpot>
        </Col>

        <Col className="gutter-row" sm={24} lg={6}>
          <div>
            <ArticleWrap>
              <ImageWrap
                alt="imagePost"
                src={SRC_IMAGE.IMAGEE}
                height="100%"
                width="100%"
              />
              <DivWrap>
                <div className="bookmark">
                  <VectorBookmark height="28px" width="28px" />
                </div>
                <div className="info-group d-flex align-items-center">
                  <VectorPodcast height="24px" width="24px" />
                  <TypographyWrap>Podcast</TypographyWrap>
                </div>
              </DivWrap>
            </ArticleWrap>
            <SpotlightText className="mt-1">
              <Typography.Title className="titlePostSpot">
                VILLA
              </Typography.Title>
              <Typography.Title className="contentPostSpot">
                BP expects the price of Brent crude to average $60 a barrel over
                the rest
              </Typography.Title>
            </SpotlightText>
          </div>
          <ItemPostSpot>
            <Image
              style={{ borderRadius: '50%' }}
              alt="img1"
              src={SRC_IMAGE.USERTAB4}
              width="50px"
              height="50px"
              preview={false}
            />

            <SpotlightText>
              <Typography.Paragraph className="timePostSpot">
                30 minutes ago
              </Typography.Paragraph>
              <div className="d-flex">
                <Typography.Paragraph className="timePostSpot">
                  by
                </Typography.Paragraph>
                <Typography.Paragraph className="userPostSpot mx-1">
                  Wade Warren
                </Typography.Paragraph>
              </div>
            </SpotlightText>
          </ItemPostSpot>
        </Col>
        <Link href="/detail-spotlight" legacyBehavior>
          <ButtonClick
            // onClick={(e) => clicktoPageHeader()}
            style={{ cursor: 'pointer' }}
          >
            <VectorUp />
          </ButtonClick>
        </Link>
      </Row>
    </>
  );
};

export default CheckOutArticles;
