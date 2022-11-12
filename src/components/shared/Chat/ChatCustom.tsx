import { useState } from 'react';

import ButtonHidden from './ButtonHidden';
import Chat from './Chat';

const ChatCustom = () => {
  const [openChat, setOpenChat] = useState(false);

  const showChat = () => {
    setOpenChat(true);
  };

  const hiddenChat = () => {
    setOpenChat(false);
  };

  return (
    <>
      {openChat ? (
        <Chat openChat={openChat} hiddenChat={hiddenChat} />
      ) : (
        <ButtonHidden openChat={openChat} showChat={showChat} />
      )}
    </>
  );
};

export default ChatCustom;
