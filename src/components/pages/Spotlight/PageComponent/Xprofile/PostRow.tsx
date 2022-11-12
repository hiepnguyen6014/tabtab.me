import { SRC_IMAGE } from '@core';
import { VectorBookmark, VectorPlay } from '@root/public/icons';
import ColPost from '@root/src/components/shared/ItemPostInfo/ColPost';
import { Col, Divider, Image, Row, Typography } from 'antd';
import {
  ArticleWrap,
  ColA,
  DivWrap,
  ImageWrap,
  ItemPostSpot,
  TypographyWrap,
} from '../../../Home/Home.style';
import { SpotlightText } from '../../Spotlight.style';
import { XprofileWrap } from './Xprofile.styled';

const PostRow = () => {
  return (
    <>
      <XprofileWrap>
        <div className="margin-X--30">
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }} 
          
        >
          <ColA className="gutter-row" span={8}>
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
                  North Bondi block sells for $22m+ but duplex next door for
                  sale.
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
                  <Typography.Paragraph className="timePostSpot">
                    by{' '}
                    <Typography.Text className="userPostSpot">
                      Marvin McKinney
                    </Typography.Text>
                  </Typography.Paragraph>
                </SpotlightText>
              </ItemPostSpot>
            </div>
          </ColA>

          <ColA className="gutter-row" span={8}>
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
                <Typography.Paragraph className="timePostSpot">
                  by{' '}
                  <Typography.Text className="userPostSpot">
                    Robert Fox
                  </Typography.Text>
                </Typography.Paragraph>
              </SpotlightText>
            </ItemPostSpot>
          </ColA>

          <ColA className="gutter-row" span={8}>
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
                  North Bondi block sells for $22m+ but duplex next door for
                  sale.
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
                <Typography.Paragraph className="timePostSpot">
                  by{' '}
                  <Typography.Text className="userPostSpot">
                    Annette Black
                  </Typography.Text>
                </Typography.Paragraph>
              </SpotlightText>
            </ItemPostSpot>
          </ColA>
        </Row>
        </div>
      </XprofileWrap>
    </>
  );
};

export default PostRow;
