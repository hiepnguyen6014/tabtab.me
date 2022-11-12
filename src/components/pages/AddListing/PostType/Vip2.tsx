import ThumbnailCard from '@root/public/static/images-recommend.png';
import { Col, Divider, Row, Typography } from 'antd';
import Image from 'next/image';
import {
  SFavorite,
  VectorBuilding,
  VectorCalendar,
  VectorDirection,
  VectorHouse,
  VectorSquare,
  VectorTalk,
  VectorTree,
  VectorUser,
} from 'public/icons';
import React from 'react';

import {
  ContentInItem,
  ContentInItemPost,
  DetailItem,
  PostContent,
  PostMiddle,
  PostMiddleFooter,
  PostTitle,
  TypographyText,
  Vip2Wrapper,
} from '../AddListing.style';

const detailItemList = [
  { id: 1, icon: <VectorSquare />, content: '72m²' },
  { id: 2, icon: <VectorTree />, content: '---' },
  { id: 3, icon: <VectorUser />, content: 'Chính chủ' },
  { id: 4, icon: <VectorHouse />, content: '4m' },
  { id: 5, icon: <VectorDirection />, content: 'West' },
  { id: 6, icon: <VectorBuilding />, content: 'Chung cư' },
];
const Vip2 = () => {
  return (
    <Vip2Wrapper>
      <div>
        <Image src={ThumbnailCard} alt="vip" width={282} height={304} />
        <ContentInItemPost>
          <TypographyText>
            <div style={{ margin: '35px 10px' }}>
              <div
                style={{
                  width: '260px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    width: 118,
                    height: 24,
                    background: '#FFFFFF',
                    marginBottom: '8px',
                    borderRadius: '4px',
                  }}
                >
                  <Typography.Text className="inContentItem mx-2">
                    SALE 15% OFF
                  </Typography.Text>
                </div>
                <SFavorite />
              </div>
            </div>
          </TypographyText>
        </ContentInItemPost>
      </div>
      <PostContent>
        <TypographyText>
          <PostTitle>
            <Row>
              <Col sm={18}>
                <Typography.Title className="price">
                  3.000.000$
                </Typography.Title>
                <Typography.Title
                  className="wasPrice"
                  style={{ marginTop: '-13px' }}
                >
                  was 4.500.000$ • 400$/m²
                </Typography.Title>
              </Col>
            </Row>
            <div>
              <Typography.Title
                className="detailPost"
                style={{ overflow: 'clip' }}
              >
                Sir Francis Drake Blvd. Retail /Office 312
              </Typography.Title>
              <Typography.Title
                className="addressPost"
                style={{ marginTop: '0px' }}
              >
                23 Willow Way, Bletchley, USA
              </Typography.Title>
            </div>
          </PostTitle>

          <DetailItem>
            {detailItemList.map(item => (
              <div className="item" key={item.id}>
                <span>{item.icon}</span>
                <span
                  className="item-content"
                  style={{ marginLeft: '5px', marginTop: '4px' }}
                >
                  {item.content}
                </span>
              </div>
            ))}
          </DetailItem>
          <Divider style={{ marginTop: '5px', marginBottom: '7px' }} />
          <PostMiddle className="wrap-post">
            <PostMiddleFooter>
              {
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <VectorCalendar />
                  <Typography.Text className="textPostMiddle">
                    15 giờ trước
                  </Typography.Text>
                </span>
              }
            </PostMiddleFooter>

            <PostMiddleFooter>
              {
                <>
                  <a
                    style={{
                      borderRadius: '6px',
                      display: 'flex',

                      alignItems: 'center',
                      background: '#F9C41F',
                      padding: '7px 12px',
                    }}
                  >
                    <VectorTalk />
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: '600',
                        fontFamily: 'Inter',

                        marginLeft: 10,
                      }}
                    >
                      CHAT NOW
                    </span>
                  </a>
                </>
              }
            </PostMiddleFooter>
          </PostMiddle>
        </TypographyText>
      </PostContent>
    </Vip2Wrapper>
  );
};

export default Vip2;
