import { useRoute } from '@utils';
import React from 'react';

import ChatCustom from '../../shared/Chat/ChatCustom';
import Footer from '../Footer/Footer';
import HeaderComponent from '../Header/index';
import { Container } from './DefaultComponent.style';

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
