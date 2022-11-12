import { SRC_IMAGE } from '@core';
import { IconQuotes } from '@root/public/icons';
import ColPost from '@root/src/components/shared/ItemPostInfo/ColPost';
import { Col, Divider, Image, Row, Typography } from 'antd';
import { DivA } from '../../../Home/Spotlight/ItemSpotlight.style';

const RightCol = () => {
  return (
    <>
      <div className="d-block m-right-23 mx-4" style={{cursor:"pointer"}}>
      <Image alt="news" src={SRC_IMAGE.ACADEMY1} width="100%" preview={false}/>
      <div className="d-flex justify-content-between py-2">
        <Typography className="category-text">Thể loại</Typography>
        <Typography className="date-text">30 minutes ago</Typography>
      </div>

      <Typography className="title-list-news py-2">
        Heres how you do a five-day quarantine
      </Typography>
      <Typography className="content-text">
        Demand recovered, while a shortage of containers exerted pressure on
        supply chains. More recently, a combination
      </Typography>
      <div className="horizontal-line" />
      <DivA className="d-flex">
        <IconQuotes className="mx-2" width="30px"/>
        <Typography className="content-other-news">
          Despite popular opinion, the French love Britain more
        </Typography>
      </DivA>
      <div className="horizontal-line" />

      <DivA className="d-flex">
        <IconQuotes className="mx-2" width="30px" />
        <Typography className="content-other-news">
          Despite popular opinion, the French love Britain more
        </Typography>
      </DivA>
      <div className="horizontal-line" />

      <DivA className="d-flex mb-4">
        <IconQuotes className="mx-2" width="30px" />
        <Typography className="content-other-news">
          Despite popular opinion, the French love Britain more
        </Typography>
      </DivA>
    </div>
    </>
  );
};

export default RightCol;
