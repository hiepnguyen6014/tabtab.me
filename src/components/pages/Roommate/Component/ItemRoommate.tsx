import { CloseOutlined, FacebookFilled } from '@ant-design/icons';
import { SRC_IMAGE } from '@core';
import {
  IconFacebook,
  MaleFemale,
  MaleFemaleBlack,
  SleepingRoom,
  SleepingRoomBlack,
  VectorDistance,
  VectorDistanceBlack,
  VectorDollarS,
  VectorEmail,
  VectorPhone,
  VectorSearchBlack,
  VectorSearchWhite,
  VectorSocial,
  VectorTalk,
} from '@root/public/icons';
import { Button, Col, Divider, Image, Modal, Row, Typography } from 'antd';
import { useState } from 'react';
import {
  BannerRoommate,
  DividerItem,
  ItemRoommateText,
  ItemRoommateWrap,
  SearchingForWrap,
  TextInBanner,
  Flex,
  ModalRoommate,
  DetailRoommate,
  RoommateWrap,
  ButtonDetail,
  ButtonChat,
  ButtonShadow,
  ButtonClose,
  ImageWrap,
} from './ItemRoommate.style';

const ItemRoommate = ({ items, key }) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      {items.name ? (
        <Col className="gutter-row" xs={12} md={6} lg={6} key={key}>
          <RoommateWrap>
            <ItemRoommateWrap colorWrap={items.colorWrap}>
              <ItemRoommateText>
                <BannerRoommate>
                  <Image alt="person" src={items.avatar} preview={false} />
                  <TextInBanner>
                    <Flex>
                      <Typography className="name-roommate">
                        {items.name}
                      </Typography>
                      <Typography
                        className="info-roommate"
                        style={{ paddingBottom: '10px' }}
                      >
                        .
                      </Typography>
                      <Typography className="info-roommate">
                        {items.age}
                      </Typography>
                      <Typography
                        className="info-roommate"
                        style={{ paddingBottom: '10px' }}
                      >
                        .
                      </Typography>
                      <Typography className="info-roommate">
                        {items.sex}
                      </Typography>
                    </Flex>

                    <Flex>
                      <Typography className="work-roommate">
                        {items.role}
                      </Typography>
                      <Divider
                        type="vertical"
                        style={{ borderColor: 'rgba(255, 255, 255, 0.8)' }}
                      />
                      <Typography className="work-roommate">
                        {items.company}
                      </Typography>
                      <Divider
                        type="vertical"
                        style={{ borderColor: 'rgba(255, 255, 255, 0.8)' }}
                      />
                      <Typography className="coin-dollar">
                        {items.coin}
                      </Typography>
                      <VectorDollarS />
                    </Flex>
                  </TextInBanner>
                </BannerRoommate>
                <div className="padding-content">
                  <Typography className="content-roommate">
                    {items.content}
                  </Typography>
                  <Typography className="search-info">
                    Searching for:
                  </Typography>
                  <div>
                    <Flex>
                      <SearchingForWrap>
                        <SleepingRoom />
                        {items.searchFor1}
                      </SearchingForWrap>
                      <SearchingForWrap>
                        <MaleFemale />
                        {items.searchFor2}
                      </SearchingForWrap>
                    </Flex>
                    <SearchingForWrap className="mt-2">
                      <VectorSearchWhite />
                      {items.searchFor3}
                    </SearchingForWrap>
                  </div>
                  <DividerItem />
                  <Flex>
                    <VectorDistance />
                    <Typography className="distance-roommate">
                      {items.distance}
                    </Typography>
                  </Flex>
                </div>
              </ItemRoommateText>
            </ItemRoommateWrap>
            <DetailRoommate>
              <ButtonDetail onClick={showModal}>Xem chi tiết</ButtonDetail>
            </DetailRoommate>
          </RoommateWrap>
        </Col>
      ) : (
        <Col>
          <RoommateWrap
            style={{
              background:
                'radial-gradient(80.73% 70.97% at 0% 1.84%, #E93A9B 0%, #BF0EF0 100%)',
              backdropFilter: 'blur(120px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '96px',
                lineHeight: '116px',

                color: '#FFFFFF',
              }}
            >
              ads
            </Typography>
          </RoommateWrap>
        </Col>
      )}
      <ModalRoommate
        visible={visible}
        title={null}
        centered
        footer={null}
        width="972px"
      >
        <ButtonClose onClick={handleCancel}>
          <CloseOutlined />
          Close
        </ButtonClose>
        <ItemRoommateText>
          <Row>
            <Col xs={24} sm={24} lg={10}>
              <ImageWrap alt="roommate" src={SRC_IMAGE.ROOMMATE4} preview={false} />
            </Col>
            <Col xs={24} sm={24} lg={14} style={{ padding: '10px' }}>
              <Flex>
                <Typography
                  className="name-roommate"
                  style={{ color: '#000000' }}
                >
                  {items.name}
                </Typography>
                <Typography
                  className="info-roommate"
                  style={{ paddingBottom: '10px', color: 'rgba(0, 0, 0, 0.6)' }}
                >
                  .
                </Typography>
                <Typography
                  className="info-roommate"
                  style={{ color: 'rgba(0, 0, 0, 0.6)' }}
                >
                  {items.age}
                </Typography>
                <Typography
                  className="info-roommate"
                  style={{ paddingBottom: '10px', color: 'rgba(0, 0, 0, 0.6)' }}
                >
                  .
                </Typography>
                <Typography
                  className="info-roommate"
                  style={{ color: 'rgba(0, 0, 0, 0.6)' }}
                >
                  {items.sex}
                </Typography>
              </Flex>
              <Flex style={{ padding: '10px 0px' }}>
                <Typography
                  className="work-roommate"
                  style={{ color: 'rgba(0, 0, 0, 0.8)' }}
                >
                  {items.role}
                </Typography>
                <Divider
                  type="vertical"
                  style={{ borderColor: 'rgba(0, 0, 0, 0.8)' }}
                />
                <Typography
                  className="work-roommate"
                  style={{ color: 'rgba(0, 0, 0, 0.8)' }}
                >
                  {items.company}
                </Typography>
                <Divider
                  type="vertical"
                  style={{ borderColor: 'rgba(0, 0, 0, 0.8)' }}
                />
                <Typography className="coin-dollar">{items.coin}</Typography>
                <VectorDollarS />
              </Flex>
              <Typography
                className="content-roommate"
                style={{ color: 'rgba(0, 0, 0, 0.8)', padding: '10px 0px' }}
              >
                Nothing is more exciting to me than the gratifying feeling I get
                from helping people meet their real estate needs. You can count
                on me to always do what is in your best interest. I pride myself
                on being honest, trustworthy, and knowledgeable in the real
                estate market. I do my absolute best to consistently offer every
                client my undivided attention. I understand how important it is
                to find your dream home and/or get the best offer for your
                prop...
              </Typography>
              <DividerItem style={{ borderColor: '#E9E9E9' }} />
              <Row>
                <Col xs={10} sm={10} lg={6}>
                  <Flex style={{ padding: '5px 0px' }}>
                    <VectorSocial />
                    <Typography style={{ color: '#7A7A7A', marginLeft: '5px' }}>
                      Social
                    </Typography>
                  </Flex>
                  <Flex style={{ padding: '5px 0px' }}>
                    <VectorEmail />
                    <Typography style={{ color: '#7A7A7A', marginLeft: '5px' }}>
                      Email
                    </Typography>
                  </Flex>
                  <Flex style={{ padding: '5px 0px' }}>
                    <VectorPhone />
                    <Typography style={{ color: '#7A7A7A', marginLeft: '5px' }}>
                      Phone
                    </Typography>
                  </Flex>
                </Col>
                <Col xs={14} sm={14} lg={18}>
                  <Flex style={{ padding: '6px 0px' }}>
                    <FacebookFilled />
                  </Flex>
                  <Flex style={{ padding: '3px 0px' }}>
                    <Typography style={{ color: '#7A7A7A' }}>
                      email@mail.com
                    </Typography>
                  </Flex>
                  <Flex style={{ padding: '3px 0px' }}>
                    <Typography style={{ color: '#7A7A7A' }}>
                      09090909091
                    </Typography>
                  </Flex>
                  <ButtonShadow>Open</ButtonShadow>
                </Col>
              </Row>
              <Typography
                className="search-info"
                style={{ color: '#4E4E4E', padding: '10px 0px' }}
              >
                Searching for:
              </Typography>
              <Flex style={{ padding: '0px 5px 16px 0px' }}>
                <SearchingForWrap
                  style={{
                    color: '#222222',
                    borderColor: '#F9C41F',
                    marginRight: '10px',
                  }}
                >
                  <SleepingRoomBlack />
                  {items.searchFor1}
                </SearchingForWrap>
                <SearchingForWrap
                  style={{
                    color: '#222222',
                    borderColor: '#F9C41F',
                    marginRight: '10px',
                  }}
                >
                  <MaleFemaleBlack />
                  {items.searchFor2}
                </SearchingForWrap>
                <SearchingForWrap
                  style={{ color: '#222222', borderColor: '#F9C41F' }}
                >
                  <VectorSearchBlack />
                  {items.searchFor3}
                </SearchingForWrap>
              </Flex>
              <Flex style={{ padding: '10px 0px' }}>
                <VectorDistanceBlack />
                <Typography
                  className="distance-roommate"
                  style={{ color: '#222222' }}
                >
                  {items.distance}
                </Typography>
              </Flex>
              <ButtonChat>
                <VectorTalk />
                Chat trực tiếp với An
              </ButtonChat>
            </Col>
          </Row>
        </ItemRoommateText>
      </ModalRoommate>
    </>
  );
};

export default ItemRoommate;
