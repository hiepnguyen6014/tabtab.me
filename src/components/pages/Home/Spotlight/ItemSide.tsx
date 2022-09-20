import { Row } from 'antd';
import Image from 'material-ui-image';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  ItemPostSpot,
  LeftPostSpot,
  RightPostSpot,
  SpotlightText,
  ImageWrap
} from '../Home.style';
import { DivA, TextColor } from './ItemSpotlight.style';

const ItemSide = ({ item }) => {
  return (
    <>
      <DivA>
        <Row className="px-3">
          <LeftPostSpot>
            <ItemPostSpot>
              <SpotlightText>
                <div className="padTop">
                  <TextColor colorText={item.colorTitle}>
                    {item.title}
                  </TextColor>
                  <Typography className="detailPostSpot">
                    {item.content}
                  </Typography>
                </div>
              </SpotlightText>
            </ItemPostSpot>
          </LeftPostSpot>
          <RightPostSpot className="d-flex align-self-center justify-content-end">
            <img
              alt="pic"
              src={item.image}
              height="84px"
              width="84px"
              // preview={false}
            />
          </RightPostSpot>
          <div className="vertical-line" />
        </Row>
      </DivA>
    </>
  );
};

export default ItemSide;
