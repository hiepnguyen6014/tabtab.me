import {
  VectorBookmark,
} from '@root/public/icons';
import Typography from '@mui/material/Typography';
import {
  ArticleWrap,
  DivWrap,
  ImageWrap,
  ItemPostSpot,
  SpotlightText,
  TypographyWrap,
  WrapperSpot
} from '../Home.style';
import { TextColor } from './ItemSpotlight.style';

const ItemSpotlight = ({ item }) => {
  return (
    <div style={{ height: '300px', width: '300px' }}>
      <ArticleWrap>
        <img
          alt="imagePost"
          src={item.image}
          // height="300px"
          width="100%"
        />
        <DivWrap>
          <div>
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
      <SpotlightText className="mt-1">
        <TextColor colorText={item.colorCategory}>
          {item.category}
        </TextColor>
        <Typography className="contentPostSpot">
          {item.content}
        </Typography>
      </SpotlightText>

      <ItemPostSpot>
        <img
          style={{ borderRadius: '50%' }}
          alt="img1"
          src={item.avatar}
          width="50px"
          height="50px"
        // preview={false}
        />

        <SpotlightText>
          <Typography className="timePostSpot">
            {item.time}
          </Typography>
          <Typography className="timePostSpot">
            by{' '}
            <Typography className="userPostSpot">
              {item.name}
            </Typography>
          </Typography>
        </SpotlightText>
      </ItemPostSpot>
    </div>
  );
};

export default ItemSpotlight;
