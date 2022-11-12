import { SRC_IMAGE } from '@core';
import { VectorBookmark, VectorPlay, VectorPodcast } from '@root/public/icons';
import { Col, Image, Row, Typography } from 'antd';
import Link from 'next/link';

import {
  ArticleWrap,
  ColA,
  DivWrap,
  ImageWrap,
  ItemPostSpot,
  TypographyWrap,
} from '../../../Home/Home.style';
import ItemSpotlight from '../../../Home/Spotlight/ItemSpotlight';
import { SpotlightText } from '../../Spotlight.style';
import BannerExpert from './BannerExpert';
import SlideExpert from './SlideExpert';

const SecondContent = () => {
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
  return (
    <>
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
    </>
  );
};

export default SecondContent;
