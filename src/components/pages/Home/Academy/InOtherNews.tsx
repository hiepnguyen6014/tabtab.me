import { SRC_IMAGE } from '@core';
import { IconQuotes } from '@root/public/icons';
import { Image, Typography } from 'antd';
import Link from 'next/link';

import { DivA } from '../Spotlight/ItemSpotlight.style';

const InOtherNews: React.FC<{}> = () => {
  return (
    <div className="d-block m-right-23">
      <div className="height-50 d-flex align-items-center">
        <Typography className="title-header">In other news</Typography>
      </div>
      <DivA>
        <Link href="/academy">
          <Image
            alt="news"
            src={SRC_IMAGE.ACADEMY1}
            width="100%"
            preview={false}
          />
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
        </Link>
      </DivA>
      <div className="horizontal-line" />
      <DivA>
        <div className="d-flex">
          <IconQuotes className="mx-2" width="30px" />
          <Typography className="content-other-news">
            Despite popular opinion, the French love Britain more
          </Typography>
        </div>
      </DivA>
      <div className="horizontal-line" />
      <DivA>
        <div className="d-flex">
          <IconQuotes className="mx-2" width="30px" />
          <Typography className="content-other-news">
            Despite popular opinion, the French love Britain more
          </Typography>
        </div>
      </DivA>
      <div className="horizontal-line" />
      <DivA>
        <div className="d-flex mb-4">
          <IconQuotes className="mx-2" width="30px" />
          <Typography className="content-other-news">
            Despite popular opinion, the French love Britain more
          </Typography>
        </div>
      </DivA>
    </div>
  );
};

export default InOtherNews;
