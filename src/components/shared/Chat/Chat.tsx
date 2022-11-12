import { SRC_IMAGE } from '@core';
import {
  VectorAdjust,
  VectorDown,
  VectorEdit,
  VectorSearchBlack,
  VectorSearchGrey,
} from '@root/public/icons';
import { Button, Divider, Image, Typography } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

import {
  ChatWrap,
  DotMessage,
  Flex,
  MessageBox,
  SearchMessage,
  SearchMessageText,
} from './Chat.style';
import ChatPerson from './ChatPerson';

const Chat = ({ openChat, hiddenChat }) => {
  const CHATLIST = [
    {
      image: SRC_IMAGE.ACADEMY6,
      name: 'Esther Howard',
      time: '5:17 PM',
      dotMessage: true,
      content: 'Sau khi mắc Covid-19, tôi bị mất vị giác khi ăn uống',
    },
    {
      image: SRC_IMAGE.ACADEMY5,
      name: 'Theresa Webb',
      time: '5:17 PM',
      dotMessage: true,
      content: 'Sau khi mắc Covid-19, tôi bị mất vị giác khi ăn uống',
    },
    {
      image: SRC_IMAGE.ACADEMY7,
      name: 'Jenny Wilson',
      time: '5:17 PM',
      dotMessage: true,
      content: 'Sau khi mắc Covid-19, tôi bị mất vị giác khi ăn uống',
    },
    {
      image: SRC_IMAGE.ACADEMY8,
      name: 'Esther Howard',
      time: '5:17 PM',
      content: 'Sau khi mắc Covid-19, tôi bị mất vị giác khi ăn uống',
    },
    {
      image: SRC_IMAGE.ACADEMY6,
      name: 'Robert Fox',
      time: '5:17 PM',
      content: 'Sau khi mắc Covid-19, tôi bị mất vị giác khi ăn uống',
    },
    {
      image: SRC_IMAGE.ACADEMY6,
      name: 'Esther Howard',
      time: '5:17 PM',
      content: 'Sau khi mắc Covid-19, tôi bị mất vị giác khi ăn uống',
    },
    {
      image: SRC_IMAGE.ACADEMY6,
      name: 'Courtney Henry',
      time: '5:17 PM',
      content: 'Sau khi mắc Covid-19, tôi bị mất vị giác khi ăn uống',
    },
    {
      image: SRC_IMAGE.ACADEMY6,
      name: 'Esther Howard',
      time: '5:17 PM',
      content: 'Sau khi mắc Covid-19, tôi bị mất vị giác khi ăn uống',
    },
  ];

  const [openChatPerson, setOpenChatPerson] = useState(false);

  const showChatPerson = () => {
    setOpenChatPerson(true);
  };

  const hiddenChatPerson = () => {
    setOpenChatPerson(false);
  };

  return (
    <>
      {openChat === true ? (
        <ChatWrap>
          <SearchMessageText>
            <div className="d-flex justify-content-between">
              <Flex>
                <Image
                  alt="user"
                  src={SRC_IMAGE.ACADEMY5}
                  width="40px"
                  height="40px"
                  preview={false}
                />
                <Typography className="style__text--500--16--19">
                  Message
                </Typography>
              </Flex>
              <Flex>
                <VectorEdit />
                <div onClick={e => hiddenChat()} style={{ cursor: 'pointer' }}>
                  <VectorDown />
                </div>
              </Flex>
            </div>
            <SearchMessage
              prefix={<VectorSearchGrey />}
              suffix={<VectorAdjust />}
              placeholder="Search message"
            />
            {CHATLIST.map((item, key) => {
              return (
                <Flex
                  key={key}
                  onClick={e => showChatPerson()}
                  style={{ cursor: 'pointer' }}
                >
                  <div style={{ position: 'relative' }}>
                    <Image
                      alt="user"
                      src={item.image}
                      width="48px"
                      height="48px"
                      preview={false}
                    />
                    {item.dotMessage ? <DotMessage /> : <></>}
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <Typography className="style__text--600--16--19">
                        {item.name}
                      </Typography>
                      <Typography className="style__text--500--12--15">
                        {item.time}
                      </Typography>
                    </div>
                    <Typography className="style__text--500--12--15">
                      {item.content}
                    </Typography>
                    <Divider
                      type="horizontal"
                      style={{ margin: '0px', marginTop: '10px' }}
                    />
                  </div>
                </Flex>
              );
            })}
          </SearchMessageText>
        </ChatWrap>
      ) : (
        <></>
      )}
      {openChatPerson && <ChatPerson hiddenChatPerson={hiddenChatPerson} />}
    </>
  );
};

export default Chat;
