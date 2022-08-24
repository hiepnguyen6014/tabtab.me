/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from 'antd';
import { DefaultContentNoGrid, DefaultWrapperWithBg } from '../../layout';
import { NotifyItem } from '../../shared/NotifyItem';
import { UserListNotify } from '@utils';
import { PaginationCustom } from '../../shared/Pagination';

interface Props {
  title?: string;
  t: any;
}

const MyNotification = (props: Props) => {
  const { t: translate } = props;

  // Cookie khong goi duoc trong serverSideProps va thong bao cung ko can seo
  const { listNotify, onDeleteMessage, markRead } = UserListNotify();

  return (
    // Css truc tiep do cung layout nhung khac mau
    <>
      <DefaultWrapperWithBg>
        <DefaultContentNoGrid>
          {listNotify.latest.length > 0 && (
            <>
              <Typography.Title level={5}>
                {translate('notify.latest')}
              </Typography.Title>
              {listNotify.latest.map((data, key) => (
                <NotifyItem
                  markRead={markRead}
                  onDelete={onDeleteMessage}
                  t={translate}
                  data={data}
                  key={key}
                />
              ))}
            </>
          )}

          {listNotify.recently.length > 0 && (
            <>
              <Typography.Title level={5}>
                {translate('notify.recently')}
              </Typography.Title>
              {listNotify.recently.map((data, key) => (
                <NotifyItem
                  markRead={markRead}
                  onDelete={onDeleteMessage}
                  t={translate}
                  data={data}
                  key={key}
                />
              ))}
            </>
          )}

          <PaginationCustom total={listNotify.total} />
        </DefaultContentNoGrid>
      </DefaultWrapperWithBg>

      {!listNotify.recently.length && !listNotify.latest.length && (
        <>
          <DefaultWrapperWithBg>
            <DefaultContentNoGrid>
              <Typography.Title
                style={{ textAlign: 'center', margin: '30px' }}
                level={4}
              >
                {translate('notify.noResult')}
              </Typography.Title>
            </DefaultContentNoGrid>
          </DefaultWrapperWithBg>
        </>
      )}
    </>
  );
};

export default MyNotification;
