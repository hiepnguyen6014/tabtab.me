import { Image, Row, Typography } from 'antd';

import {
  ItemPostSpot,
  LeftPostSpot,
  RightPostSpot,
  SpotlightText,
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
                  <Typography.Paragraph className="detailPostSpot">
                    {item.content}
                  </Typography.Paragraph>
                </div>
              </SpotlightText>
            </ItemPostSpot>
          </LeftPostSpot>
          <RightPostSpot className="d-flex align-self-center justify-content-end">
            <Image
              alt="pic"
              src={item.image}
              height="84px"
              width="84px"
              preview={false}
            />
          </RightPostSpot>
          <div className="vertical-line" />
        </Row>
      </DivA>
    </>
  );
};

export default ItemSide;
