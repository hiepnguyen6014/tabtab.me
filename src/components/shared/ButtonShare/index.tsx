import { IconShare } from '@root/public/icons';
import { message } from 'antd';

import { ButtonShareWrap } from './button-share.style';

export const ButtonShare = (props: {
  t: any;
  text?: string;
  children?: any;
  icon: any;
  bg: any;
  borderColor: any;
  content: any;
  bordered?: string;
}) => {
  const {
    t: translate,
    text,
    icon,
    bg,
    borderColor,
    bordered = 'true',
    content,
  } = props;
  const handleCopy = () => {
    text
      ? navigator.clipboard.writeText(text)
      : navigator.clipboard.writeText(window.location.href);
    message.success(translate('user.share'));
  };
  return (
    <>
      <div onClick={() => handleCopy()}>
        {props.children || (
          <ButtonShareWrap
            style={{
              backgroundColor: bg ? bg : 'white',
              borderColor: borderColor ? borderColor : '',
              borderRadius: 8,
            }}
          >
            <IconShare />
            {content ? content : translate('button.share')}
          </ButtonShareWrap>
        )}
      </div>
    </>
  );
};
