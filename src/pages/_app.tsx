import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import nextCookies from 'next-cookies';
import { reactLocalStorage } from '@core';
import Config from '@root/config';
import App from 'next/app';
import { globalStyles } from '@styles/global';
// import { theme } from '@styles/theme';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
// import { ThemeProvider } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import NextNprogress from 'nextjs-progressbar';
import { UserContextProvider } from '@contexts';
import { appWithTranslation, i18n } from 'next-i18next';
import Head from 'next/head';
import { WEB_NAME, SRC_LOGO } from '@core';
import { I18nextProvider } from 'react-i18next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as ga from '../../lib/ga';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFC22B',
      },
      text: {
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 1024,
        xl: 1200,
      }
    },
    typography: {
      "fontFamily": "Inter"
    }
  });

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageView(window, url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <CookiesProvider>
      <Head>
        <link rel="icon" href={SRC_LOGO.LOGO_WEB} />
        <title>{WEB_NAME}</title>
      </Head>
      <ThemeProvider theme={theme}>
        {globalStyles}
        <NextNprogress
          color={theme.palette.primary.main}
          options={{ showSpinner: false }}
        />
        <UserContextProvider>
          <Component {...pageProps} />
        </UserContextProvider>
      </ThemeProvider>
    </CookiesProvider>
  );
}

MyApp.getStaticProps = async (appContext: any) => {
  const ctx = appContext.ctx;
  const cookie = nextCookies(ctx);

  let isLogin = false;

  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    user: cookie[Config.USER_KEY],
    loggedIn: isLogin,
  };
};

export default appWithTranslation(MyApp);
