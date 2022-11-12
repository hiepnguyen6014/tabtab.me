import { SRC_IMAGE } from '@core';
import { IconQuotes } from '@root/public/icons';
import { Col, Divider, Image, Row, Typography } from 'antd';
import Link from 'next/link';

import { DivA } from '../../../Home/Spotlight/ItemSpotlight.style';
import { DiscoveryText, DividerH, Flex, ImageWrap } from './Discovery.styled';

const SlideDiscoveryPost = () => {
  const DISCOVERYLIST = [
    {
      image: SRC_IMAGE.ACADEMY1,
      title: 'Property',
      content: 'North Bondi block sells for $22m+',
    },
    {
      image: SRC_IMAGE.ACADEMY1,
      title: 'Property',
      content: 'North Bondi block sells for $22m+',
    },
    {
      image: SRC_IMAGE.ACADEMY1,
      title: 'Property',
      content: 'North Bondi block sells for $22m+',
    },
    {
      image: SRC_IMAGE.ACADEMY1,
      title: 'Property',
      content: 'North Bondi block sells for $22m+',
    },
  ];
  return (
    <>
      <DiscoveryText>
        {DISCOVERYLIST.map((item, key) => {
          return (
            <>
              <DivA key={key}>
                <Link href="/detail-spotlight" legacyBehavior>
                  <Flex>
                    <ImageWrap
                      alt="property"
                      src={item.image}
                      width="84px"
                      height="84px"
                    />
                    <div className="margin-left-post">
                      <Typography className="title-discovery__text--color">
                        {item.title}
                      </Typography>
                      <Typography className="title-discovery__text--style">
                        {item.content}
                      </Typography>
                    </div>
                  </Flex>
                  <DividerH />
                </Link>
              </DivA>
            </>
          );
        })}
      </DiscoveryText>
    </>
  );
};

export default SlideDiscoveryPost;
