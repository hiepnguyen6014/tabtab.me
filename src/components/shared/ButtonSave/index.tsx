import { UserContext } from '@contexts';
import { IconHeart, IconSaveComplete } from '@root/public/icons';
import { userDeleteSavePost, userSavePost } from '@root/src/core/services';
import { Button, message } from 'antd';
import React, { useContext, useState } from 'react';

import { ButtonSaveWrap, IconSaved } from './button-save.style';

interface Props {
  idPost: string | number;
  text?: string;
  t: any;
  showIcon?: boolean;
  bordered?: string;
  IconDefault?: React.ReactSVGElement;
  IconActive?: React.ReactSVGElement;
  bg: any;
}
export const ButtonSave = (props: Props) => {
  const {
    t,
    showIcon = true,
    idPost,
    bordered = 'true',
    IconDefault,
    IconActive,
    bg,
  } = props;
  const { currentUser, listUserSave } = useContext(UserContext);
  const [isSave, setIsSave] = useState(() => {
    if (!listUserSave?.data?.length) return false;
    return (
      listUserSave?.data?.filter(item => item.realEstateId == idPost).length > 0
    );
  });

  const onSave = async () => {
    message.loading({ content: t('detail.widgetUser.processing'), key: 'key' });
    if (!Object.keys(currentUser).length) {
      message.error({ content: t('user.mustLogin'), key: 'key' });
    } else {
      if (!isSave) {
        // Save new post
        const status = await userSavePost(props.idPost);
        if (status && !isSave) {
          message.success({ content: t('user.saveSuccess'), key: 'key' });
          setIsSave(true);
        } else if (!status) {
          message.error({ content: t('user.saveFail'), key: 'key' });
        }
      } else {
        // Unsave post
        const status = await userDeleteSavePost(props.idPost);
        if (status && isSave) {
          message.success({ content: t('user.deleteSuccess'), key: 'key' });
          setIsSave(false);
        } else if (!status) {
          message.error({ content: t('user.deleteFail'), key: 'key' });
        }
      }
    }
  };
  return (
    <>
      <ButtonSaveWrap bordered={bordered} onClick={onSave} bg={bg}>
        {showIcon && isSave
          ? IconActive || <IconSaved />
          : IconDefault || (
              <IconHeart type="empty" style={{ transform: 'scale(.7)' }} />
            )}
        {props.text || t('button.save')}
      </ButtonSaveWrap>
    </>
  );
};
