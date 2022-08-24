import { SearchOutlined } from '@ant-design/icons';
import { SRC_IMAGE } from '@core';
import { SearchIcon } from '@root/public/icons';
import { PaginationWrap } from '@root/src/components/shared/PaginationCustom/PaginationCustom.style';
import { Divider, Image, Input, Typography } from 'antd';
import { BoxWrap, Flex, SearchWrap } from '../SocialNetworkPage.style';

const LeftContentSocial: React.FC<{}> = () => {
  const GROUPLIST = [
    {
      img: SRC_IMAGE.ACADEMY1,
      text: 'Tên group',
    },
    {
      img: SRC_IMAGE.ACADEMY1,
      text: 'Tên group',
    },
    {
      img: SRC_IMAGE.ACADEMY1,
      text: 'Tên group',
    },
    {
      img: SRC_IMAGE.ACADEMY1,
      text: 'Tên group',
    },
  ];
  return (
    <>
      <SearchWrap size="large" placeholder="Search" prefix={<SearchIcon />} />
      <BoxWrap>
        <Typography className="title-box__text">
          Community that you joined.
        </Typography>
        <Divider type="horizontal" />
        {GROUPLIST.map((item, key) => {
          return (
            <Flex key={key}>
              <Image alt="box-img" src={item.img} width="40px" height="40px" className='img-border-radius' />
              <Typography>{item.text}</Typography>
            </Flex>
          );
        })}
        <PaginationWrap defaultCurrent={9} total={30}/>
      </BoxWrap>
    </>
  );
};

export default LeftContentSocial;
