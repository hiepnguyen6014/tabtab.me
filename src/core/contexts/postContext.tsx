import React, { useState } from 'react';

interface Post {
  id: string;
}

interface PostContextProps {
  crudSuccess: boolean;
  postType?: string;
  updatedPost: Post;
  removedPost: Post;

  setCrudStatus?: (val: boolean) => void;
  setEditedPost?: Function;
  setDeletedPost?: Function;
  handleSetContentType?: (val: string) => void;
}

export const PostContext = React.createContext<PostContextProps>({
  crudSuccess: false,
  updatedPost: null,
  removedPost: null,
});

export const PostContextProvider = props => {
  const [postType, setPostType] = useState<string>(''); //check contentType post when show post create in component
  const [crudSuccess, setCrudSuccess] = useState<boolean>(false);
  const [updatedPost, setUpdatedPost] = useState<Post>(null);
  const [removedPost, setRemovedPost] = useState<Post>(null);

  const setCrudStatus = val => {
    setCrudSuccess(val);
  };

  const setEditedPost = (post: Post) => {
    setUpdatedPost(post);
  };

  const setDeletedPost = (post: Post) => {
    setRemovedPost(post);
  };

  const handleSetContentType = (val: string) => {
    setPostType(val);
  };

  return (
    <PostContext.Provider
      value={{
        crudSuccess,
        updatedPost,
        removedPost,
        postType,
        setCrudStatus,
        setEditedPost,
        setDeletedPost,
        handleSetContentType,
      }}
    >
      {React.Children.toArray(props.children)}
    </PostContext.Provider>
  );
};
