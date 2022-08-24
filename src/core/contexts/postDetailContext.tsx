import React, { useState } from 'react';

interface PostDetailContextProps {
  focusComment: boolean;
  setFocusComment?: (val: boolean) => void;
}

export const PostDetailContext = React.createContext<PostDetailContextProps>({
  focusComment: false,
});

export const PostDetailContextProvider = (props) => {
  const [focusComment, setFocusComment] = useState<boolean>(false);

  const handleFocusComment = () => {
    setFocusComment(true);
  };

  return (
    <PostDetailContext.Provider
      value={{
        focusComment,
        setFocusComment,
      }}
    >
      {React.Children.toArray(props.children)}
    </PostDetailContext.Provider>
  );
};
