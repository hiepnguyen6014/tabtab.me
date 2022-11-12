import { ROUTES } from '@constants';
import { UserContext } from '@contexts';
import { getDetailPost, paymentRecord } from '../../../../core/services';
import { STATUS_PAYMENT } from '../../../../core/constants/common';
import { MPaymentRecord } from '@models/MPaymentRecord';
import { MPostDetail } from '@models/MPostDetail';
import { IconLocked } from '@root/public/icons';
import { message, Popconfirm, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { LockWrap } from './LockContact.style';

interface Props {
  t: any;
  realEstateId: string;
  paymentRecords?: MPaymentRecord[];
  setContactFunc?: Function;
  contactRecord?: { phone: string; email: string };
}
export const LockContact = (props: Props) => {
  const {
    t: translate,
    paymentRecords,
    realEstateId,
    setContactFunc,
    contactRecord,
  } = props;

  const { currentUser } = useContext(UserContext);

  const router = useRouter();

  const isLogin = Object.keys(currentUser).length > 0; // Check if the user is logged in or not: T = logged, F = not logged
  
  const keyContent = 'processing'; // Feature loading in antd

  if (
    (isLogin && (contactRecord?.email || contactRecord?.phone)) ||
    paymentRecords?.length > 0
  )
    return <></>; // Logged and user paymentd for contact, component will be hide

  const textConfirm = {
    title: translate(
      !isLogin ? 'detail.widgetUser.logged' : 'detail.widgetUser.payment'
    ),
    ok: translate(
      !isLogin ? 'detail.widgetUser.okLogin' : 'detail.widgetUser.okPayment'
    ),
    cancel: translate('detail.widgetUser.cancel'),
  };

  const onLogin = (href: string) => {
    router.push({
      pathname: `${href}/${window.location.pathname}`,
      query: { ...router.query },
    });
  };

  const handleOK = async (id: string) => {
    message.loading({
      content: translate('detail.widgetUser.processing'),
      key: keyContent,
    });
    if (isLogin) {
      // handle payment for record contact
      paymentRecord(id).then((res: any) => {
        if (res.mess == STATUS_PAYMENT.NOT_ENOUGH.mess) {
          // NOT ENOUGH
          message.error({
            content: translate('detail.widgetUser.notEnough'),
            key: keyContent,
          });
        } else if (res.mess == STATUS_PAYMENT.SUCCESS.mess) {
          // PAYMENT SUCCESS
          getDetailPost(parseInt(id)).then((response: MPostDetail) => {
            message.info({
              content:
                translate('detail.widgetUser.paymenSuccessBefore') +
                response.paymentRecords[0]?.deduction +
                translate('detail.widgetUser.paymenSuccessAfter'),
              key: keyContent,
              duration: 2,
            });
            setContactFunc({
              email: res?.data?.realEstateEmail,
              phone: res?.data?.realEstatePhone,
            });
          });
        } else{
          message.warning({content:translate('detail.widgetUser.problem'), key:keyContent})
        }
      });
    } else {
      // If user not login, Popconfirm will ask user if they want to login
      onLogin(ROUTES.LOGIN.href);
    }
  };

  return (
    <>
      <Popconfirm
        onConfirm={() => handleOK(realEstateId)}
        title={textConfirm.title}
        okText={textConfirm.ok}
        cancelText={textConfirm.cancel}
      >
        <LockWrap>
          <IconLocked />
          <label>{translate('user.payment')}</label>
        </LockWrap>
      </Popconfirm>
    </>
  );
};
