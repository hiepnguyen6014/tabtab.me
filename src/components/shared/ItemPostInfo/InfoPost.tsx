import { Col, Image, Row, Typography } from 'antd';
import { SRC_IMAGE } from '@constants';
import BannerThumbnail from './BannerThumbnail';
import { ItemPostText, ItemPostWrap } from './ItemPostInfo.style';
import { VectorLocation } from '@root/public/icons';

const InfoPost = () => {
  return (
      <div className='item__margin--10'>
        <Typography className='item__text--date'>21 DEC 2021 AT 13:00</Typography>
        <Typography className='item__text--content'>
          Will COVID lockdowns end the love affair with Australian cities?
        </Typography>
        <div className="d-flex">
          <VectorLocation className="mx-2" />
          <Typography className='item__text--location'>1 Sandal Road, London</Typography>
        </div>
      </div>
  );
};

export default InfoPost;
