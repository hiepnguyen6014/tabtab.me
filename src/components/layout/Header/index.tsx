import { PUBLIC_ROUTES } from '@constants';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';
import { HeaderWrapper } from './Header.style';
import dynamic from 'next/dynamic';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
interface Props {
  themeLight?: boolean;
  showHeaderMobile?: boolean;
  t: any;
}

export default function HeaderComponent(props?: Props) {
  const { themeLight = false, t, showHeaderMobile = true } = props;
  const router = useRouter();

  // Tab current
  let tabCurrent = useMemo(() => {
    const pathCurrent = router.pathname;
    const key = Object.keys(PUBLIC_ROUTES).filter(
      (item) => pathCurrent.indexOf(PUBLIC_ROUTES[item].href) > -1
    );
    return key.length > 1 ? '' : PUBLIC_ROUTES[key[0]];
  }, [router.pathname]);

  // Redirect page
  const onRedirect = (href: string) => {
    router.push({
      pathname: href,
    });
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderDesktop
          t={t}
          themeLight={themeLight}
          tabCurrent={tabCurrent?.href}
          onRedirect={onRedirect}
        />
      </HeaderWrapper>
      {showHeaderMobile && (
        <HeaderMobile
          t={t}
          themeLight={themeLight}
          onRedirect={onRedirect}
          tabCurrent={tabCurrent?.href}
        />
      )}
    </>
  );
}
