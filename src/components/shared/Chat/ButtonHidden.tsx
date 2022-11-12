import { SRC_IMAGE } from '@core';
import { VectorEdit, VectorUp } from '@root/public/icons';
import { Image, Typography } from 'antd';

import {
  ChatSmallWrap,
  DotMessage,
  Flex,
  MessageBox,
  SearchMessageText,
} from './Chat.style';

const ButtonHidden = ({ openChat, showChat }) => {
  return (
    <>
      {openChat === false ? (
        <>
          <ChatSmallWrap>
            <SearchMessageText>
              <div className="d-flex justify-content-between">
                <Flex>
                  <div style={{ position: 'relative' }}>
                    <Image
                      alt="user"
                      src={SRC_IMAGE.ACADEMY5}
                      width="40px"
                      height="40px"
                      preview={false}
                    />
                    <DotMessage />
                  </div>

                  <Typography className="style__text--500--16--19">
                    Message
                  </Typography>
                </Flex>
                <Flex>
                  <VectorEdit />
                  <div onClick={e => showChat()} style={{ cursor: 'pointer' }}>
                    <VectorUp />
                  </div>
                </Flex>
              </div>
            </SearchMessageText>
          </ChatSmallWrap>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ButtonHidden;
