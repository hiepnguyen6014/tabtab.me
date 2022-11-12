import { SRC_IMAGE } from '@constants';
import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';
import { Image, Row, Typography } from 'antd';
import { IconQuotes } from 'public/icons';
import { useState } from 'react';

import {
  ColWrap,
  GeneralText,
  GeneralWrap,
  SpotlightText,
  TextWrap,
  VerticalLine,
  WrapperSpot,
} from '../Home.style';

const Opinion: React.FC<{}> = () => {
  const [showContent, setShowContent] = useState(true);

  return (
    <WrapperSpot>
      <GeneralText>
        <Typography.Title className="title-general">
          Nhận định của chuyên gia
          <Typography.Text className="title-hide">HIDE</Typography.Text>
        </Typography.Title>
        <GeneralWrap>
          <div className="general-between-wrap">
            <div className="general-wrap">
              <IconQuotes />
              <Typography.Title className="content-general">
                Nhận định chuyên gia cho riêng anh/chị [displayName]
              </Typography.Title>
            </div>
            <div
              onClick={e => setShowContent(showContent ? false : true)}
              style={{ cursor: 'pointer' }}
            >
              <Typography.Text className="content-hide">HIDE</Typography.Text>
            </div>
          </div>
        </GeneralWrap>
      </GeneralText>
      {showContent && (
        <>
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <ColWrap className="gutter-row" xs={12} md={6}>
              <TextWrap>
                <div className="wrap-text">
                  <Typography.Paragraph className="text-opinion">
                    There are fines of up to €3,000 if you don’t self-isolate
                    on.
                  </Typography.Paragraph>
                </div>

                <Typography.Paragraph className="text-name">
                  Darrell Steward
                </Typography.Paragraph>
                <Typography.Paragraph className="text-role">
                  Chief Operations Officer
                </Typography.Paragraph>
                <div className="flex-wrap">
                  <VerticalLine />
                  <Typography.Paragraph className="text-company">
                    APPLE
                  </Typography.Paragraph>
                  <VerticalLine />
                </div>
              </TextWrap>

              <div
                style={{
                  justifyContent: 'center',
                  objectPosition: 'center',
                  display: 'flex',
                  objectFit: 'cover',
                }}
              >
                <div className="circle-wrap">
                  <Image
                    src={SRC_IMAGE.CIRCLE}
                    alt="Picture of the author"
                    width="100%"
                    height="100%"
                    preview={false}
                    style={{
                      justifyContent: 'center',
                      objectPosition: 'center',
                      display: 'flex',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="image-wrap">
                  <Image
                    src={SRC_IMAGE.STAFF3}
                    alt="Picture of the author"
                    width="100%"
                    height="100%"
                    preview={false}
                  />
                  <div
                    className="horizotalLine"
                    style={{ marginTop: '-5px' }}
                  />
                </div>
              </div>
              {/* <div className="horizotalLine"/> */}
            </ColWrap>
            <ColWrap className="gutter-row" xs={12} md={6}>
              <TextWrap>
                <div className="wrap-text">
                  <Typography.Paragraph className="text-opinion">
                    Once neglected in favour of supposedly healthier products or
                    produced
                  </Typography.Paragraph>
                </div>

                <Typography.Paragraph className="text-name">
                  Albert Flores
                </Typography.Paragraph>
                <Typography.Paragraph className="text-role">
                  Chief Operations Officer
                </Typography.Paragraph>
                <div className="flex-wrap">
                  <VerticalLine />
                  <Typography.Paragraph className="text-company">
                    ANGIA
                  </Typography.Paragraph>
                  <VerticalLine />
                </div>
              </TextWrap>
              <div
                style={{
                  justifyContent: 'center',
                  objectPosition: 'center',
                  display: 'flex',
                  objectFit: 'contain',
                }}
              >
                <div className="circle-wrap">
                  <Image
                    src={SRC_IMAGE.CIRCLE}
                    alt="Picture of the author"
                    width="100%"
                    height="100%"
                    preview={false}
                  />
                </div>
                <div className="image-wrap">
                  <Image
                    src={SRC_IMAGE.STAFF1}
                    alt="Picture of the author"
                    width="100%"
                    height="100%"
                    preview={false}
                  />
                  <div
                    className="horizotalLine"
                    style={{ marginTop: '-5px' }}
                  />
                </div>
              </div>
            </ColWrap>
            <ColWrap className="gutter-row" xs={12} md={6}>
              <TextWrap>
                <div className="wrap-text">
                  <Typography.Paragraph className="text-opinion">
                    Better than ever, thanks to chefs who are adding bone marrow
                  </Typography.Paragraph>
                </div>
                <Typography.Paragraph className="text-name">
                  Marvin McKinney
                </Typography.Paragraph>
                <Typography.Paragraph className="text-role">
                  Chief Operations Officer
                </Typography.Paragraph>
                <div className="flex-wrap">
                  <VerticalLine />
                  <Typography.Paragraph className="text-company">
                    ANGIA
                  </Typography.Paragraph>
                  <VerticalLine />
                </div>
              </TextWrap>
              <div
                style={{
                  justifyContent: 'center',
                  objectPosition: 'center',
                  display: 'flex',
                  objectFit: 'contain',
                }}
              >
                <div className="circle-wrap">
                  <Image
                    src={SRC_IMAGE.CIRCLE}
                    alt="Picture of the author"
                    width="100%"
                    height="100%"
                    preview={false}
                  />
                </div>
                <div className="image-wrap">
                  <Image
                    src={SRC_IMAGE.STAFF2}
                    alt="Picture of the author"
                    width="100%"
                    height="100%"
                    preview={false}
                  />
                  <div
                    className="horizotalLine"
                    style={{ marginTop: '-5px' }}
                  />
                </div>
              </div>
            </ColWrap>
            <ColWrap className="gutter-row" xs={12} md={6}>
              <TextWrap>
                <div className="wrap-text">
                  <Typography.Paragraph className="text-opinion">
                    It was in the Fat Duck that I first noticed it, around the
                    turn of the millennium
                  </Typography.Paragraph>
                </div>
                <Typography.Paragraph className="text-name">
                  Kristin Watson
                </Typography.Paragraph>
                <Typography.Paragraph className="text-role">
                  Sale Manager
                </Typography.Paragraph>
                <div className="flex-wrap">
                  <VerticalLine />
                  <Typography.Paragraph className="text-company">
                    REVER
                  </Typography.Paragraph>
                  <VerticalLine />
                </div>
              </TextWrap>
              <div
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  objectPosition: 'center',
                  display: 'flex',
                  objectFit: 'contain',
                }}
              >
                <div className="circle-wrap">
                  <Image
                    src={SRC_IMAGE.CIRCLE}
                    alt="Picture of the author"
                    width="100%"
                    height="100%"
                    preview={false}
                  />
                </div>
                <div className="image-wrap">
                  <Image
                    src={SRC_IMAGE.STAFF4}
                    alt="Picture of the author"
                    width="100%"
                    height="100%"
                    preview={false}
                  />
                  <div
                    className="horizotalLine"
                    style={{ marginTop: '-5px' }}
                  />
                </div>
              </div>
            </ColWrap>
          </Row>

          <PaginationWrapCustom
            total={10}
            // defaultPageSize={10}
            pageSize={1}
          />
        </>
      )}
    </WrapperSpot>
  );
};

export default Opinion;
