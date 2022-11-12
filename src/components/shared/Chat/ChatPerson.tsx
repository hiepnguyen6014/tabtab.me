import { CloseOutlined } from '@ant-design/icons';
import { SRC_IMAGE } from '@core';
import {
  VectorAdjust,
  VectorClose,
  VectorDown,
  VectorEdit,
  VectorLinkCircle,
  VectorPushCircle,
  VectorSearchBlack,
  VectorSearchGrey,
} from '@root/public/icons';
import { Divider, Image, Typography } from 'antd';
import {
  BoxFriend,
  BoxUser,
  ChatPersonWrap,
  ChatWrap,
  DotMessage,
  Flex,
  MessageBox,
  SearchMessage,
  SearchMessageText,
} from './Chat.style';

const ChatPerson = ({hiddenChatPerson}) => {
  return (
    <>
      <ChatPersonWrap>
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
              <VectorClose style={{cursor:"pointer"}} onClick={e => hiddenChatPerson()}/>
            </Flex>
          </div>
          <Divider
            type="horizontal"
            style={{ margin: '0px', padding: '0px' }}
          />
          <Flex>
            <div className="d-flex align-self-end">
              <Image
                alt="user"
                src={SRC_IMAGE.ACADEMY5}
                width="32px"
                height="32px"
                preview={false}
              />
            </div>
            <div>
              <BoxFriend>
                The bun runs along the road and meets a wolf.ran away
              </BoxFriend>
            </div>
          </Flex>
          <Flex className="justify-content-end">
            <BoxUser>The bun runs along the road</BoxUser>
          </Flex>
          <Flex>
            <div className="d-flex align-self-end">
              <Image
                alt="user"
                src={SRC_IMAGE.ACADEMY5}
                width="32px"
                height="32px"
                preview={false}
              />
            </div>
            <div>
              <BoxFriend>and meets a wolf.ran away</BoxFriend>
            </div>
          </Flex>
          <Flex className="justify-content-end">
            <BoxUser>The bun runs</BoxUser>
          </Flex>
          <Flex>
            <div className="d-flex align-self-end">
              <Image
                alt="user"
                src={SRC_IMAGE.ACADEMY5}
                width="32px"
                height="32px"
                preview={false}
              />
            </div>
            <div>
              <BoxFriend>
                The bun runs along the road and meets a wolf.ran away
              </BoxFriend>
            </div>
          </Flex>
          <Flex>
            <div>
              <VectorLinkCircle />
            </div>
            <MessageBox placeholder="Write a message" />
            <div>
              <VectorPushCircle />
            </div>
          </Flex>
        </SearchMessageText>
      </ChatPersonWrap>
    </>
  );
};

export default ChatPerson;
