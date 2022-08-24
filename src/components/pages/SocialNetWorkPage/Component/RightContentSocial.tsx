import { SRC_IMAGE } from '@core';
import { VectorNotification } from '@root/public/icons';
import { PaginationWrap } from '@root/src/components/shared/PaginationCustom/PaginationCustom.style';
import { Divider, Image, Typography } from 'antd';
import { BoxWrap, Flex } from '../SocialNetworkPage.style';

const RightContentSocial: React.FC<{}> = () => {
  const GROUPLIST = [
    {
      img: SRC_IMAGE.ACADEMY5,
      name: 'Esther Howard',
      text: 'Đã trả lời bình luận của bạn: tôi bị mất vị giác khi ăn uống',
      date: '5:17 PM',
    },
    {
      img: SRC_IMAGE.ACADEMY6,
      name: 'Theresa Webb',
      text: 'Đã trả lời bình luận của bạn: tôi bị mất vị giác khi ăn uống',
      date: '1 ngày',
    },
    {
      img: SRC_IMAGE.ACADEMY7,
      name: 'Jenny Wilson',
      text: 'Đã trả lời bình luận của bạn: tôi bị mất vị giác khi ăn uống',
      date: '20/09/2021',
    },
  ];
  return (
    <>
      <BoxWrap>
        <Flex style={{margin:'0px'}}>
          <VectorNotification />
          <Typography className="title-box__text">Notification</Typography>
        </Flex>
        <Divider type="horizontal" style={{marginTop: "16px", marginBottom: "12px"}}/>
        {GROUPLIST.map((item, key) => {
          return (
            <Flex key={key}>
              <Image alt="box-img" src={item.img} />
              <div>
                <Flex
                  style={{ margin: '0px', justifyContent: 'space-between' }}
                >
                  <Typography className="name-box_text">{item.name}</Typography>
                  <Typography className="date-box_text">{item.date}</Typography>
                </Flex>
                <Typography className="date-box_text">{item.text}</Typography>
              </div>
            </Flex>
          );
        })}
        <PaginationWrap defaultCurrent={9} total={30} />
      </BoxWrap>
      <Image alt='image' src={SRC_IMAGE.AD1} preview={false}/>
    </> 
  );
};

export default RightContentSocial;
