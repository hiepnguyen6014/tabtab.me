import { SRC_IMAGE } from '@core';
import { Button, Col, Divider, Image, Row, Typography } from 'antd';
import Link from 'next/link';

import {
  BannerSpotWrapper,
  BannerWrap,
  DivWrap,
  ImageBannerWrap,
  ItemPostSpot,
  LeftPostSpot,
  RightPostSpot,
  SpotlightText,
  WrapperSpot,
} from '../../../Home/Home.style';
import ItemSide from '../../../Home/Spotlight/ItemSide';
import { WrapperSpotPage } from './Expert.style';

const SlideExpert = () => {
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
      title: 'Roommate',
      colorTitle: '#F9C41F',
      content: 'Global oil prices before a quicker than',
    },
  ];
  return (
    <WrapperSpotPage>
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
            <Link href="/detail-spotlight" key={key} legacyBehavior>
              <ItemSide item={items} />
            </Link>
          );
        })}
      </div>
    </WrapperSpotPage>
  );
};

export default SlideExpert;
