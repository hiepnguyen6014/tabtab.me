import React from 'react';
import { Container } from './DefaultComponent.style';
import { checkIsHomePage, useRoute } from '@utils';
import HeaderComponent from '../Header/index';
import { useRouter } from 'next/router';
import Footer from '../Footer/Footer';
import ChatCustom from '../../shared/Chat/ChatCustom';
interface Props {
  t: any;
  children?: any;
  showHeaderMobile?: boolean;
}
const DefaultLayout = (props: Props) => {
  const { t: translate, showHeaderMobile = true } = props;
  const { isHome } = useRoute();

  return (
    <Container hasTopPadding={!isHome}>
      <HeaderComponent t={translate} showHeaderMobile={showHeaderMobile} />
      {props.children}
      <ChatCustom />
      <Footer t={translate} />
    </Container>
  );
};

export default DefaultLayout;
