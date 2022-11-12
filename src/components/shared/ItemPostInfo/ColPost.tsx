import { SRC_IMAGE } from '@constants';
import { Col, Row } from 'antd';

import BannerThumbnail from './BannerThumbnail';
import ButtonAdd from './ButtonAdd';
import InfoPost from './InfoPost';
import { ItemPostText, ItemPostWrap } from './ItemPostInfo.style';

const ColPost = () => {
  return (
    <ItemPostWrap>
      <ItemPostText>
        <BannerThumbnail src={SRC_IMAGE.EXAMPLE2} />
        <InfoPost />
        <ButtonAdd />
      </ItemPostText>
    </ItemPostWrap>
  );
};

export default ColPost;
