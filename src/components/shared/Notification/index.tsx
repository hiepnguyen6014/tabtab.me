import { Typography, message } from 'antd';
import { IconFace, IconFlag } from 'public/icons';
import { useCallback, useContext, useState } from 'react';

import { UserContext } from '../../../core/contexts';
import { PopupReport } from '../Popup';
import { ContentRight, NotifyWrapper } from './Notification.style';

export const Notification = (props: { idPost: string | number; t: any }) => {
  const { t } = props;
  const { currentUser } = useContext(UserContext);
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = useCallback(() => {
    if (typeof currentUser === 'object' && Object.keys(currentUser).length) {
      setShowPopup(true);
    } else {
      message.error(t('user.mustLogin'));
    }
  }, [currentUser]);
  return (
    <>
      <NotifyWrapper>
        <div>
          <IconFace />
        </div>
        <ContentRight>
          <Typography.Paragraph>
            {t('detail.report.title')}
          </Typography.Paragraph>
          <a style={{ color: '#222222' }} onClick={handleShowPopup}>
            <IconFlag />
            {t('detail.report.subTitle')}
          </a>
        </ContentRight>
        <PopupReport
          t={t}
          token={currentUser?.token}
          id={props.idPost}
          isShow={showPopup}
          setIsShow={setShowPopup}
        />
      </NotifyWrapper>
    </>
  );
};
