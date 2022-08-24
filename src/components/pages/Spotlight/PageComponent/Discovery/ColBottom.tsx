import { SRC_IMAGE } from '@core';
import { IconQuotes } from '@root/public/icons';
import { Col, Divider, Image, Row, Typography } from 'antd';
import Link from 'next/link';
import { ColA } from '../../../Home/Home.style';
import { Flex } from './Discovery.styled';

const ColBottom = () => {
  const LISTITEM = [
    {
      image: SRC_IMAGE.ACADEMY3,
      title: 'INTERIOR',
      content:
        'Growth hacking or growth marketing is still a relatively new discipline.',
      time: '30 minutes ago',
      avatar: SRC_IMAGE.ACADEMY6,
      name: 'Robert Fox',
    },
    {
      image: SRC_IMAGE.ACADEMY3,
      title: 'INTERIOR',
      content:
        'Growth hacking or growth marketing is still a relatively new discipline.',
      time: '30 minutes ago',
      avatar: SRC_IMAGE.ACADEMY6,
      name: 'Robert Fox',
    },
    {
      image: SRC_IMAGE.ACADEMY3,
      title: 'INTERIOR',
      content:
        'Growth hacking or growth marketing is still a relatively new discipline.',
      time: '30 minutes ago',
      avatar: SRC_IMAGE.ACADEMY6,
      name: 'Robert Fox',
    },
    {
      image: SRC_IMAGE.ACADEMY3,
      title: 'INTERIOR',
      content:
        'Growth hacking or growth marketing is still a relatively new discipline.',
      time: '30 minutes ago',
      avatar: SRC_IMAGE.ACADEMY6,
      name: 'Robert Fox',
    },
  ];
  return (
    <>
      <Row className="mx-3 my-4">
        {LISTITEM.map((item, key) => {
          return (
            <>
              <ColA xs={24} sm={24} lg={12} key={key}>
                <Link href="/detail-spotlight">
                  <a>
                    <Flex>
                      <div className="width--50">
                        <Image
                          alt="post"
                          src={item.image}
                          preview={false}
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="width--50">
                        <Typography className="content-discovery__text--color">
                          {item.title}
                        </Typography>
                        <Typography className="content-discovery__text--style">
                          {item.content}
                        </Typography>
                        <Flex>
                          <Image
                            alt="person"
                            src={item.avatar}
                            preview={false}
                            width="36px"
                            height="36px"
                          />
                          <div className="mx-2">
                            <Typography className="content-discovery__time--style">
                              {item.time}
                            </Typography>
                            <Flex>
                              <Typography className="content-discovery__time--style">
                                by
                              </Typography>
                              <Typography className="content-discovery__name--style">
                                {item.name}
                              </Typography>
                            </Flex>
                          </div>
                        </Flex>
                      </div>
                    </Flex>
                  </a>
                </Link>
              </ColA>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default ColBottom;
