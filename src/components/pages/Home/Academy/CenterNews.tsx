import { SRC_IMAGE } from '@core';
import { Image, Typography } from 'antd';

const CenterNews: React.FC<{}> = () => {
  return (
    <div>
      <div className="height-50" />
      <Image alt="imgnews" src={SRC_IMAGE.ACADEMY4} height="363px" preview={false}/>
      <div className='d-flex py-1'>
        <Typography className="category-text m-right-14">Villa</Typography>
        <Typography className="date-text">30 minutes ago</Typography>
      </div>

      <Typography className="title-center py-2">
        The lost history of the electric car – and what it tells us about the
        future of transport
      </Typography>
      <Typography className="content-text py-1">
        Container shipping rates have skyrocketed as the global economy bounced
        back from the Covid-19 pandemic and commodity demand recovered, while a
        shortage of containers exerted pressure on supply chains. More recently,
        a combination of rising retailer orders and slower turnaround rates due
        to Covid-19 outbreaks in several countries has driven prices even
        higher.
      </Typography>
    </div>
  );
};

export default CenterNews;
