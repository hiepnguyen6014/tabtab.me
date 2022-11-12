/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { UserContext } from '@contexts';
import { markReadMessage } from './../../services/user/index';
import { getListCustomerMessage, deleteMessage } from '../../services/user';
import { useState, useEffect, useContext } from 'react';

export function UserListNotify<T>() {
  const { currentUser } = useContext(UserContext);

  const [listNotify, setListNotify] = useState({
    latest: [],
    recently: [],
    total: 0,
  });

  const {query: { page }} = useRouter();

  const filter = {
    customerId: currentUser.appUserId,
  }

  useEffect(() => {
    let unmounted = false;
    getListCustomerMessage(filter, !Array.isArray(page) ? page : '').then(
      (data) => {
        if (!unmounted) {
          setListNotify({
            latest: data.data.latest,
            recently: data.data.recently,
            total: data.total || 0,
          });
        }
      }
    );
    return () => {
      unmounted = true;
    };
  }, [page,currentUser.appUserId]);

  // Action
  const onDeleteMessage = (messageId: number) => {
    for (let i = 0; i < listNotify.latest.length; i++) {
      if (listNotify.latest[i].messageCustomerId == messageId) {
        listNotify.latest.splice(i, 1);
        setListNotify({ ...listNotify, latest: listNotify.latest });
        deleteMessage(messageId);
        return;
      }
    }
    for (let i = 0; i < listNotify.recently.length; i++) {
      if (listNotify.recently[i].messageCustomerId == messageId) {
        listNotify.recently.splice(i, 1);
        setListNotify({ ...listNotify, recently: listNotify.recently });
        deleteMessage(messageId);
        return;
      }
    }
  };
  const markRead = async(messageCustomerId: number) => {
    await markReadMessage(messageCustomerId);
  };


  

  return { listNotify, onDeleteMessage, markRead };
}
