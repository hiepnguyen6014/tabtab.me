import { PUBLIC_ROUTES } from '@constants';
import { useRoute } from '@utils';
import dynamic from 'next/dynamic';
import React, { useEffect, useMemo, useState } from 'react';

import { HeaderContainer, HeaderWrapper } from './Header.style';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

interface Props {
  showHeaderMobile?: boolean;
  t: any;
}

export default function HeaderComponent(props?: Props) {
  const { t, showHeaderMobile = true } = props;
  const { router, isHome } = useRoute();
  const [isTransparentBg, setIsTransparentBg] = useState(isHome);

  useEffect(() => {
    const updateHeaderBg = () => {
      if (!isHome) return;

      const scrollY = window.pageYOffset;
      if (scrollY > 0) {
        setIsTransparentBg(false);
      } else {
        setIsTransparentBg(true);
      }
    };

    window.addEventListener('scroll', updateHeaderBg);
    return () => window.removeEventListener('scroll', updateHeaderBg);
  }, []);

  const tabCurrent = useMemo(() => {
    const pathCurrent = router.pathname;
    const key = Object.keys(PUBLIC_ROUTES).filter(
      item => pathCurrent.indexOf(PUBLIC_ROUTES[item].href) > -1,
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
    <HeaderWrapper isTransparent={isTransparentBg}>
      <HeaderContainer>
        <HeaderDesktop
          t={t}
          isTransparentBg={isTransparentBg}
          isShowSearchBar={!isHome}
          tabCurrent={tabCurrent?.href}
          onRedirect={onRedirect}
        />
        {showHeaderMobile && (
          <HeaderMobile
            t={t}
            onRedirect={onRedirect}
            tabCurrent={tabCurrent?.href}
          />
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
}
