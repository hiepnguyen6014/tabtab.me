import { SRC_IMAGE } from '@constants';
import { VectorBookmark } from '@root/public/icons';
import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';
import { Button, Col, Image, Row, Typography } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconQuotes, VectorPlay, VectorPodcast } from 'public/icons';
import { useState } from 'react';

import { Flex } from '../../HelpCenter/HelpCenter.style';
import {
  BannerSpotWrapper,
  BannerWrap,
  ButtonViewAll,
  DivWrap,
  GeneralText,
  GeneralWrap,
  ImageBannerWrap,
  SpotlightText,
  WrapperSpot,
} from '../Home.style';
import ItemSide from '../Spotlight/ItemSide';
import ItemSpotlight from '../Spotlight/ItemSpotlight';
import { ColA } from '../Spotlight/ItemSpotlight.style';

const SpotLight: React.FC<{}> = () => {
  const router = useRouter();

  const ITEMSPOTLIGHTLIST = [
    {
      image: SRC_IMAGE.IMAGEC,
      iconImage: '',
      textImage: '',
      category: 'Villa',
      colorCategory: '',
      content:
        'Belarus exile group leader Vitaly Shishov found dead in Kyiv, police say.',
      avatar: SRC_IMAGE.USERTAB2,
      time: '30 minutes ago',
      name: 'Marvin McKinney',
    },
    {
      image: SRC_IMAGE.IMAGED,
      iconImage: '',
      textImage: 'Popcast',
      category: 'Interior',
      colorCategory: '#AE9B16',
      content:
        'North Bondi block sells for $22m+ but duplex next door for sale.',
      avatar: SRC_IMAGE.USERTAB3,
      time: '30 minutes ago',
      name: 'Robert Fox',
    },
    {
      image: SRC_IMAGE.IMAGEC,
      iconImage: <VectorPlay height="24px" width="24px" />,
      textImage: 'Video',
      category: 'Interior',
      colorCategory: '#AE9B16',
      content:
        'North Bondi block sells for $22m+ but duplex next door for sale.',
      avatar: SRC_IMAGE.USERTAB1,
      time: '30 minutes ago',
      name: 'Annette Black',
    },
    {
      image: SRC_IMAGE.IMAGEE,
      iconImage: <VectorPodcast height="24px" width="24px" />,
      textImage: 'Popcast',
      category: 'VILLA',
      colorCategory: '',
      content:
        ' BP expects the price of Brent crude to average $60 a barrel over the rest',
      avatar: SRC_IMAGE.USERTAB4,
      time: '30 minutes ago',
      name: 'Wade Warren',
    },
  ];

  const ITEMSPOTLIGHTSIDE = [
    {
      image: SRC_IMAGE.IMAGEF,
      title: 'Property',
      colorTitle: '#EB4E27',
      content: 'North Bondi block sells for 22m',
    },
    {
      image: SRC_IMAGE.IMAGEG,
      title: 'Property',
      colorTitle: '#EB4E27',
      content: ' through share buy backs and has.',
    },
    {
      image: SRC_IMAGE.IMAGEH,
      title: 'Property',
      colorTitle: '#F9C41F',
      content: 'Global oil prices before a quicker than',
    },
  ];

  const [showContent, setShowContent] = useState(true);

  return (
    <WrapperSpot>
      <GeneralText>
        <Link href="/spotlight-page">
          <Typography.Title className="title-general">
            Tin nổi bật
            <Typography.Text className="title-hide">HIDE</Typography.Text>
          </Typography.Title>
        </Link>
        <GeneralWrap>
          <div className="general-between-wrap">
            <div className="general-wrap">
              <IconQuotes />
              <Typography.Title className="content-general">
                Những tin tức mới nhất phù hợp với anh/chị [DisplayName]
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
        <div>
          <Row>
            <Col sm={24} lg={16} className="my-2">
              <Link href="/spotlight-page">
                <BannerSpotWrapper>
                  <BannerWrap>
                    <div className="bookmark">
                      <VectorBookmark height="28px" width="28px" />
                    </div>
                    <ImageBannerWrap
                      alt="imagePost"
                      src={SRC_IMAGE.IMAGEA}
                      preview={false}
                    />
                    <DivWrap>
                      <div className="title-post">
                        <SpotlightText>
                          <Typography className="titleBannerTop">
                            Genres
                          </Typography>
                          <Typography className="titleBannerMiddle">
                            Keep up with the rest of the world
                          </Typography>
                          <Typography className="titleBannerBottom">
                            Here, four sixtysomethings offer advice to those in
                            their.
                          </Typography>
                        </SpotlightText>
                        <div className="d-flex info-group pb-1">
                          <div
                            style={{ width: 36, height: 36 }}
                            className="mx-2"
                          >
                            <Image
                              alt="user"
                              src={SRC_IMAGE.STAFF3}
                              width={36}
                              height={36}
                              className="rounded-circle"
                            />
                          </div>
                          <SpotlightText>
                            <Typography className="dateBanner">
                              26/05/2021
                            </Typography>
                            <Typography className="dateBanner">
                              by{' '}
                              <Typography.Text className="nameBanner">
                                Jenny Wilson
                              </Typography.Text>
                            </Typography>
                          </SpotlightText>
                        </div>
                      </div>
                    </DivWrap>
                  </BannerWrap>
                </BannerSpotWrapper>
              </Link>
            </Col>
            <Col xs={0} sm={0} lg={8}>
              <Row className="px-2">
                <SpotlightText>
                  <Button type="text" danger>
                    <Typography.Text
                      className="optionPostSpot"
                      style={{
                        borderBottom: '1px solid #F9C41F',
                        paddingBottom: 15,
                      }}
                    >
                      LAST NEWS
                    </Typography.Text>
                  </Button>
                  <Button type="text" danger>
                    <Typography.Text className="optionPostSpot">
                      MOST VIEW
                    </Typography.Text>
                  </Button>
                </SpotlightText>
              </Row>
              <div style={{ marginTop: '20px' }} className="px-2 right">
                {ITEMSPOTLIGHTSIDE.map((items, key) => {
                  return (
                    <Link href="/detail-spotlight" key={key}>
                      <ItemSide item={items} />
                    </Link>
                  );
                })}
              </div>
            </Col>
          </Row>

          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            {ITEMSPOTLIGHTLIST.map((item, key) => {
              return (
                <ColA className="gutter-row" sm={24} lg={6} key={key}>
                  <Link href="/detail-spotlight">
                    <ItemSpotlight item={item} />
                  </Link>
                </ColA>
              );
            })}
          </Row>
          {/* <Col
            span={12}
            offset={6}
            style={{
              marginTop: '50px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ButtonViewAll>VIEW ALL</ButtonViewAll>

    
          </Col> */}
          <PaginationWrapCustom total={10} pageSize={1} />
        </div>
      )}
    </WrapperSpot>
  );
};

export default SpotLight;
