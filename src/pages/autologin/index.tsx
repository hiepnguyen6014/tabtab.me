/* eslint-disable react-hooks/exhaustive-deps */
import { ROUTES } from '@constants';
import Config from '@root/config';
import { TToken } from '@types';
import { Navigator, reactLocalStorage } from '@utils';
import { Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Loading } from '../../components/shared/Loading';
import { getUserInfo } from '../../core/services/user';

const AutoLogin: React.FC<{
  token: TToken;
  redirectUrl?: string;
  logout?: boolean;
}> = ({ token, redirectUrl, logout }) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  useEffect(() => {
    const isLogin = Object.keys(
      reactLocalStorage.getObject(Config.INFO_USER_KEY, ''),
    ).length;
    if (token) {
      // Handle login
      if (!isLogin) {
        getUserInfo(token).then(data => {
          if (data) reactLocalStorage.setObject(Config.INFO_USER_KEY, data);
        });
      }
      if (redirectUrl) {
        Navigator.client.jump(redirectUrl);
      } else {
        Navigator.client.jump(ROUTES.HOME);
      }
    } else if (logout) {
      // Handle logout
      if (isLogin) {
        reactLocalStorage.removeItem(Config.INFO_USER_KEY);
        Navigator.client.jump(Config.AUTO_LOGOUT);
      } else {
        router.push(ROUTES.HOME);
      }
    } else if (!redirectUrl) {
      router.push(ROUTES.HOME);
    }
  }, []);
  return (
    <>
      <Typography.Title
        style={{ textAlign: 'center', marginTop: '100px' }}
        level={4}
      >
        {t(logout ? 'loading.logout' : 'loading.login')}...{'  '}
      </Typography.Title>
      <Loading />
    </>
  );
};

export async function getServerSideProps(context: any) {
  const {
    query: { token, redirectUrl, logout },
    locale,
  } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      token: token || null,
      logout: logout || false,
      redirectUrl: redirectUrl || null,
    },
  };
}

export default AutoLogin;
