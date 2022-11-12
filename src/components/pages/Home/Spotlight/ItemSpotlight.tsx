import { VectorBookmark } from '@root/public/icons';
import { Image, Typography } from 'antd';

import {
  ArticleWrap,
  DivWrap,
  ImageWrap,
  ItemPostSpot,
  SpotlightText,
  TypographyWrap,
} from '../Home.style';
import { TextColor } from './ItemSpotlight.style';

const ItemSpotlight = ({ item }) => {
  return (
    <>
      <div>
        <ArticleWrap>
          <ImageWrap
            alt="imagePost"
            src={item.image}
            height="100%"
            width="100%"
          />
          <DivWrap>
            <div className="bookmark">
              <VectorBookmark height="28px" width="28px" />
            </div>
            {item.iconImage ? (
              <div className="info-group d-flex align-items-center">
                {item.iconImage}
                <TypographyWrap>{item.textImage}</TypographyWrap>
              </div>
            ) : (
              <></>
            )}
          </DivWrap>
        </ArticleWrap>
        <SpotlightText className="">
          <TextColor colorText={item.colorCategory}>{item.category}</TextColor>
          <Typography.Title className="contentPostSpot">
            {item.content}
          </Typography.Title>
        </SpotlightText>

        <ItemPostSpot>
          <Image
            style={{ borderRadius: '50%' }}
            alt="img1"
            src={item.avatar}
            width="50px"
            height="50px"
            preview={false}
          />

          <SpotlightText>
            <Typography.Paragraph className="timePostSpot">
              {item.time}
            </Typography.Paragraph>
            <Typography.Paragraph className="timePostSpot">
              by{' '}
              <Typography.Text className="userPostSpot">
                {item.name}
              </Typography.Text>
            </Typography.Paragraph>
          </SpotlightText>
        </ItemPostSpot>
      </div>
    </>
  );
};

export default ItemSpotlight;
