import { SRC_IMAGE } from '@core';
import ColPost from '@root/src/components/shared/ItemPostInfo/ColPost';
import { Col, Divider, Image, Row, Typography } from 'antd';
import Link from 'next/link';

const LeftColTop = () => {
  return (
    <>
      <div className="margin-X--30" style={{ cursor: 'pointer' }}>
        <Link href="/detail-spotlight">
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
            Since Sean Ellis launched the data-driven trend nearly a decade ago,
            many traditional agencies
          </Typography>
          <Typography className="content-text py-1">
            Container shipping rates have skyrocketed as the global economy
            bounced back from the Covid-19 pandemic and commodity demand
            recovered, while a shortage of containers exerted pressure on supply
          </Typography>
        </Link>
      </div>
    </>
  );
};

export default LeftColTop;
