import { SRC_IMAGE } from '@core';
import {
  VectorDollarS,
  VectorNextButton,
  VectorPrevButton,
} from '@root/public/icons';
import { Col, Divider, Image, Row, Typography } from 'antd';

import {
  BoxWrap,
  ButtonConnect,
  ColWrap,
  ContentInImage,
  Flex,
  SearchWrap,
} from '../SocialNetworkPage.style';

const InterestPerson = () => {
  const GROUPPERSONLIST = [
    {
      img: SRC_IMAGE.INTEREST,
      name: 'Esther Howard',
      role: 'Sale Manager',
      company: 'CMC Corp',
      coin: '24t',
    },
    {
      img: SRC_IMAGE.INTEREST,
      name: 'Esther Howard',
      role: 'Sale Manager',
      company: 'CMC Corp',
      coin: '24t',
    },
    {
      img: SRC_IMAGE.INTEREST,
      name: 'Esther Howard',
      role: 'Sale Manager',
      company: 'CMC Corp',
      coin: '24t',
    },
    {
      img: SRC_IMAGE.INTEREST,
      name: 'Esther Howard',
      role: 'Sale Manager',
      company: 'CMC Corp',
      coin: '24t',
    },
  ];
  return (
    <BoxWrap style={{ padding: '0px 20px', position: 'relative' }}>
      <Flex style={{ overflow: 'hidden' }}>
        {GROUPPERSONLIST.map((item, key) => {
          return (
            <ColWrap span={7} key={key}>
              <Image alt="imgs" src={item.img} preview={false} />
              <Typography className="interested-person-name">
                {item.name}
              </Typography>
              <Flex style={{ justifyContent: 'center' }}>
                <Typography className="interested-person-text">
                  {item.role}
                </Typography>
                <Typography className="interested-person-text">|</Typography>
                <Typography className="interested-person-text">
                  {item.company}
                </Typography>
              </Flex>
              <Flex style={{ justifyContent: 'center' }}>
                <Typography className="coin-dollar">{item.coin}</Typography>
                <VectorDollarS />
              </Flex>
              <Flex style={{ justifyContent: 'center' }}>
                <ButtonConnect>Connect</ButtonConnect>
              </Flex>
            </ColWrap>
          );
        })}
        <ContentInImage>
          <div className="prev-button">
            <VectorPrevButton />
          </div>
          <div className="next-button">
            <VectorNextButton />
          </div>
        </ContentInImage>
      </Flex>
    </BoxWrap>
  );
};

export default InterestPerson;
