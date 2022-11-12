import { message } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  text?: string;
}
export const CopyBtn = (props: Props) => {
  const { t: translation } = useTranslation();
  const { text } = props;
  const handleCopy = () => {
    if (text) {
      text
        ? navigator.clipboard.writeText(text)
        : navigator.clipboard.writeText(window.location.href);
    }
    message.success(translation('postItem.copy'));
  };
  return (
    <>
      <div onClick={handleCopy}>
        <span>{text}</span>
      </div>
    </>
  );
};
