import { Col, Row } from 'antd';
import { SRC_IMAGE } from '@constants';
import BannerThumbnail from './BannerThumbnail';
import { ItemPostText, ItemPostWrap } from './ItemPostInfo.style';
import InfoPost from './InfoPost';
import ButtonAdd from './ButtonAdd';

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
