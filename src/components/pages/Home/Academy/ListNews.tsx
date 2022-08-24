import { SRC_IMAGE } from '@core';
import { Col, Image, Row, Typography } from 'antd';
import { DivA } from '../Spotlight/ItemSpotlight.style';

const ListNews: React.FC<{}> = () => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <DivA className="d-flex align-items-center">
            <Image alt="list" src={SRC_IMAGE.ACADEMY2} preview={false} className="img-wrap"/>
            <div className='m-left-16'>
              <div className='d-flex mb-1'>
                <Typography className='category-text m-right-23'>Thể loại</Typography>
                <Typography className='date-text'>30 minutes ago</Typography>
              </div>
              <Typography className='title-list-news'>
                Kookaburras hockey gold after extraordinary{' '}
              </Typography>
            </div>
          </DivA>
        </Col>
        <Col span={12}>
          <DivA className="d-flex align-items-center">
            <Image alt="list" src={SRC_IMAGE.ACADEMY3} preview={false} className="img-wrap"/>
            <div className='m-left-16'>
              <div className='d-flex mb-1'>
                <Typography className='category-text m-right-23'>Thể loại</Typography>
                <Typography className='date-text'>30 minutes ago</Typography>
              </div>
              <Typography className='title-list-news'>
                Kick-off and venue of women’s Olympic football
              </Typography>
            </div>
          </DivA>
        </Col>
      </Row>
    </div>
  );
};

export default ListNews;
