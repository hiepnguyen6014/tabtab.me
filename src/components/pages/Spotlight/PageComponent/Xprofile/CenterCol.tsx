import { SRC_IMAGE } from '@core';
import ColPost from '@root/src/components/shared/ItemPostInfo/ColPost';
import { Col, Divider, Image, Row, Typography } from 'antd';

import { DivA } from '../../../Home/Spotlight/ItemSpotlight.style';

const CenterCol = () => {
  return (
    <DivA>
      <div className="margin-X--30">
        <Image
          alt="imgnews"
          src={SRC_IMAGE.ACADEMY4}
          height="363px"
          width="100%"
          preview={false}
        />
        <div className="d-flex py-1">
          <Typography className="category-text m-right-14">Villa</Typography>
          <Typography className="date-text">30 minutes ago</Typography>
        </div>

        <Typography className="title-center py-2">
          The lost history of the electric car – and what it tells us about the
          future of transport
        </Typography>
        <Typography className="content-text py-1">
          Container shipping rates have skyrocketed as the global economy
          bounced back from the Covid-19 pandemic and commodity demand
          recovered, while a shortage of containers exerted pressure on supply
          chains. More recently, a combination of rising retailer orders and
          slower turnaround rates due to Covid-19 outbreaks in several countries
          has driven prices even higher.
        </Typography>
      </div>
    </DivA>
  );
};

export default CenterCol;
